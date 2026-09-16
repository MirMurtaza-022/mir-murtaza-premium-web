import { useEffect, useState } from "react";
import { Users } from "lucide-react";

/* ───────────────────────── CONFIG ───────────────────────── */
// Free Abacus counter — no account/key. Namespace is the "password", keep it unguessable.
const NAMESPACE = "mirmurtaza-portfolio-7q2x";
const KEY = "site-visitors-v2"; // v2 = clean launch count (v1 had dev tests)

// Hidden from the public until this many real devices.
const PUBLIC_AT = 1000;

// Your secret preview: visit  /?admin=mir2026  once on each of YOUR devices.
// That device then (a) sees the live number and (b) is NEVER counted itself.
const ADMIN_SECRET = "mir2026";

const LS_COUNTED = "mm_device_counted";
const LS_ADMIN = "mm_counter_admin";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 730; // 2 years

// Real-interaction signals — bots/link-previews/uptime checks don't do these.
const HUMAN_EVENTS = ["pointermove", "touchstart", "keydown", "scroll", "click"];
const FALLBACK_MS = 12000; // count a passive reader after 12s (if tab is visible)

// Obvious non-humans that announce themselves in the user agent.
const BOT_RE = /bot|crawler|spider|crawling|preview|monitor|uptime|headless|puppeteer|playwright|lighthouse|python-requests|curl|wget|axios|facebookexternalhit|slackbot|discordbot|telegrambot|whatsapp|bingpreview|embedly|quora link preview/i;
/* ─────────────────────────────────────────────────────────── */

const api = {
  hit: () => fetch(`https://abacus.jasoncameron.dev/hit/${NAMESPACE}/${KEY}`).then((r) => r.json()),
  // Returns 0 when the counter doesn't exist yet (API 404s before the first hit).
  get: async () => {
    const r = await fetch(`https://abacus.jasoncameron.dev/get/${NAMESPACE}/${KEY}`);
    if (!r.ok) return { value: 0 };
    return r.json();
  },
};

const fullFmt = new Intl.NumberFormat();
const compactFmt = new Intl.NumberFormat(undefined, { notation: "compact" });

let inflight = false; // guards React StrictMode double-mount

export function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let fallbackTimer: number | undefined;
    const cleanup: Array<() => void> = [];

    try {
      // 1) Secret admin unlock — accepts  ?admin=mir2026  OR  #admin=mir2026
      //    (the hash form survives routers that strip unknown query params)
      const query = new URLSearchParams(window.location.search);
      const hashParams = new URLSearchParams(window.location.hash.replace(/^#/, ""));
      if (query.get("admin") === ADMIN_SECRET || hashParams.get("admin") === ADMIN_SECRET) {
        localStorage.setItem(LS_ADMIN, "1");
        window.history.replaceState({}, "", window.location.pathname);
      }
      const isAdmin = localStorage.getItem(LS_ADMIN) === "1";

      const render = (value: number) => {
        if (cancelled) return;
        setCount(value);
        setShow(isAdmin || value >= PUBLIC_AT);
      };

      const markCounted = () => {
        try {
          localStorage.setItem(LS_COUNTED, "1");
          document.cookie = `${LS_COUNTED}=1; max-age=${COOKIE_MAX_AGE}; path=/; samesite=lax`;
        } catch {
          /* storage blocked */
        }
      };

      const alreadyCounted =
        localStorage.getItem(LS_COUNTED) === "1" ||
        document.cookie.split(";").some((c) => c.trim().startsWith(`${LS_COUNTED}=`));

      // Already-counted device (or admin): just READ, never increment.
      if (alreadyCounted || isAdmin) {
        api.get().then((d) => typeof d?.value === "number" && render(d.value)).catch(() => {});
        return () => {
          cancelled = true;
        };
      }

      // 2) Never count: localhost / preview builds
      if (import.meta.env.DEV) return () => { cancelled = true; };

      // 3) Never count: bots, headless browsers, prerendered/speculative loads
      const isBot = BOT_RE.test(navigator.userAgent) || navigator.webdriver === true;
      const isPrerender = "prerendering" in document && (document as Document & { prerendering?: boolean }).prerendering;
      if (isBot || isPrerender) return () => { cancelled = true; };

      // 4) Wait for proof of a real human before counting this device once.
      if (inflight) return () => { cancelled = true; };
      inflight = true;

      const countNow = () => {
        HUMAN_EVENTS.forEach((e) => window.removeEventListener(e, countNow, { passive: true } as AddEventListenerOptions));
        window.clearTimeout(fallbackTimer);
        if (cancelled) return;
        api
          .hit()
          .then((d) => {
            if (typeof d?.value === "number") {
              markCounted();
              render(d.value);
            }
          })
          .catch(() => {})
          .finally(() => { inflight = false; });
      };

      HUMAN_EVENTS.forEach((e) => {
        window.addEventListener(e, countNow, { passive: true, once: true } as AddEventListenerOptions);
        cleanup.push(() => window.removeEventListener(e, countNow));
      });
      fallbackTimer = window.setTimeout(() => {
        if (document.visibilityState === "visible") countNow();
      }, FALLBACK_MS);
    } catch {
      /* storage blocked / unusual browser → stay silent */
    }

    return () => {
      cancelled = true;
      inflight = false;
      window.clearTimeout(fallbackTimer);
      cleanup.forEach((fn) => fn());
    };
  }, []);

  if (!show || count === null) return null;

  return (
    <span
      className="glass-card inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold"
      title="Real devices that have visited this site"
    >
      <Users size={13} className="text-primary" />
      <span className="sm:hidden">{compactFmt.format(count)}</span>
      <span className="hidden sm:inline">{fullFmt.format(count)}</span>
      <span className="hidden text-muted-foreground sm:inline">visitors</span>
    </span>
  );
}
