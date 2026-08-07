// import { useEffect, useState } from "react";
// import { motion } from "motion/react";
// import logo from "@/assets/logo.png";5
// import { Link } from "@tanstack/react-router";


// const links = [
//   { label: "About", hash: "about" },
//   { label: "Work", hash: "work" },
//   { label: "Process", hash: "process" },
//   { label: "Services", hash: "services" },
// ];

// export function Nav() {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 24);
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <motion.header
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
//       className="fixed inset-x-0 top-0 z-50 py-4"
//     >
//       <div className="section-shell">
//         <div
//           className={`flex items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${
//             scrolled ? "glass-card" : "border border-transparent"
//           }`}
//         >
//           <a href="/" className="flex items-center gap-4 text-lg font-bold tracking-widest">
//   <img src={logo} alt="Logo" className="h-20 w-20 object-contain" />
//   MIR<span className="text-muted-foreground">.</span>MURTAZA
// </a>

// <nav className="hidden items-center gap-8 md:flex">
//   {links.map((link) => (
//     <Link
//       key={link.hash}
//       to="/"
//       hash={link.hash}
//       className="text-sm text-muted-foreground transition-colors hover:text-foreground"
//     >
//       {link.label}
//     </Link>
//   ))}
// </nav>

//           <Link
//   to="/start-a-project"
//   className="rounded-full border border-border bg-surface-strong px-5 py-2 text-sm font-medium transition-all duration-300 hover:border-primary/50 hover:bg-primary/10"
// >
//   Start a project
// </Link>
//         </div>
//       </div>
//     </motion.header>
//   );
// }
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import logo from "@/assets/logo.png";
import { Link } from "@tanstack/react-router";

const links = [
  { label: "About", hash: "about" },
  { label: "Work", hash: "work" },
  { label: "Process", hash: "process" },
  { label: "Services", hash: "services" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-3 py-3 sm:px-4 sm:py-4"
    >
      <div className="section-shell">
        <div
          className={`flex min-w-0 items-center justify-between gap-2 rounded-full px-3 py-2 sm:px-5 sm:py-3 ${
            scrolled ? "glass-card" : "border border-transparent"
          }`}
        >
          {/* Logo + Brand */}
          <a
            href="/"
            className="flex min-w-0 shrink items-center gap-2 sm:gap-3"
          >
            <img
              src={logo}
              alt="MIR MURTAZA Logo"
              className="h-12 w-12 shrink-0 object-contain sm:h-16 sm:w-16"
            />

            <span className="truncate text-sm font-bold tracking-[0.18em] sm:text-lg sm:tracking-widest">
              MIR<span className="text-muted-foreground">.</span>MURTAZA
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <Link
                key={link.hash}
                to="/"
                hash={link.hash}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <Link
            to="/start-a-project"
            className="shrink-0 rounded-full border border-border bg-surface-strong px-3 py-2 text-xs font-medium whitespace-nowrap transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 sm:px-5 sm:py-2 sm:text-sm"
          >
            <span className="sm:hidden">Start</span>
            <span className="hidden sm:inline">Start a project</span>
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
