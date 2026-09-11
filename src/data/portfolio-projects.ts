import restaurant from "@/assets/BBQ.png";
import Essence from "@/assets/Essence.png";
import logistics from "@/assets/ShayMah.png";
import School from "@/assets/School.png";
import Clinic from "@/assets/Clinic.png";
import Gym from "@/assets/Gym.png";
import crownandcraft from "@/assets/crownandcraft.png";
import velo from "@/assets/velo.png";
import ncrcet from "@/assets/ncrcet.png"
import gamingstore from "@/assets/gamingstore.png"
import nueplex from "@/assets/nueplex.png"
import portfolio1 from "@/assets/shayparasdesignstudio.png"

export interface PortfolioProject {
  title: string;
  category: string;
  image: string;
  link: string;
  caseStudy: string | null;
  status: "Demo" | "Sold";
  is3D?: boolean;
}

/**
 * Add new projects here — they'll automatically show up on the
 * full /projects page. Only the first two show on the homepage.
 */

export const portfolioProjects: PortfolioProject[] = [
  {
    title: "Royal BBQ",
    category: "Restaurant",
    image: restaurant,
    link: "https://royal-bbq-digital-experience.vercel.app/",
    status: "Demo",
    caseStudy: null,
  },
  {
    title: "Balochi Essence",
    category: "Fragrance",
    image: Essence,
    link: "https://balochi-essence.vercel.app/",
    status: "Demo",
    caseStudy: null,
  },
  {
    title: "ShayMah logistics hub",
    category: "Logistics",
    image: logistics,
    link: "https://shay-mah-logistics-hub.vercel.app",
    status: "Demo",
    caseStudy: null,
  },
  {
    title: "Gawadar Grammar School",
    category: "School",
    image: School,
    link: "https://gwadar-grammar-school.vercel.app",
    status: "Demo",
    caseStudy: null,
  },
  {
    title: "Kinetic Forge",
    category: "Gym",
    image: Gym,
    link: "https://kinetic-forge-peach.vercel.app/",
    status: "Demo",
    caseStudy: null,
    is3D: true,
  },
  {
    title: "Bio Glow",
    category: "Clinic",
    image: Clinic,
    link: "https://bioglow-elevate.vercel.app/",
    status: "Demo",
    caseStudy: null,
    is3D: false,
  },
  {
    title: "Crown And Craft",
    category: "Saloon",
    image: crownandcraft,
    link: "https://crown-craft-grooming.vercel.app/",
    status: "Demo",
    caseStudy: null,
    is3D: true,
  },  
  {
    title: "VELO",
    category: "Padel Club",
    image: velo,
    link: "https://velo-padel-experience.vercel.app/",
    status: "Demo",
    caseStudy: null,
  },  
  {
    title: "NCR-CET",
    category: "College",
    image: ncrcet,
    link: "https://university-refresh.vercel.app/",
    status: "Demo",
    caseStudy: null,
  },  
  {
    title: "Gaming Valut",
    category: "Gaming Store",
    image: gamingstore,
    link: "https://gaming-vault-unlocked.vercel.app/",
    status: "Demo",
    caseStudy: null,
  },
  {
    title: "Neuplex",
    category: "Cinema",
    image: nueplex,
    link: "https://neuplex-five.vercel.app/",
    status: "Demo",
    caseStudy: null,
  },
  {
    title: "Shay Paras Design Studio",
    category: "Portfolio",
    image: portfolio1,
    link: "https://shayparasdesignstudio.vercel.app/",
    status: "Sold",
    caseStudy: null,
  },
];
