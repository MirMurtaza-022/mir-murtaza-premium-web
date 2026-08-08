import restaurant from "@/assets/BBQ.png";
import Essence from "@/assets/Essence.png";
import logistics from "@/assets/ShayMah.png";
import School from "@/assets/School.png";
import Clinic from "@/assets/Clinic.png";
import Gym from "@/assets/Gym.png";

export interface PortfolioProject {
  title: string;
  category: string;
  image: string;
  link: string;
  caseStudy: string | null;
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
    caseStudy: null,
  },
  {
    title: "Balochi Essence",
    category: "Fragrance",
    image: Essence,
    link: "https://balochi-essence.vercel.app/",
    caseStudy: null,
  },
  {
    title: "ShayMah logistics hub",
    category: "Logistics",
    image: logistics,
    link: "https://shay-mah-logistics-hub.vercel.app",
    caseStudy: null,
  },
  {
    title: "Gawadar Grammar School",
    category: "School",
    image: School,
    link: "https://gwadar-grammar-school.vercel.app",
    caseStudy: null,
  },
  {
    title: "Kinetic Forge",
    category: "Gym",
    image: Gym,
    link: "https://kinetic-forge-peach.vercel.app/",
    caseStudy: null,
  },
  {
    title: "Bio Glow",
    category: "Clinic",
    image: Clinic,
    link: "https://bioglow-elevate.vercel.app/",
    caseStudy: null,
  },
];
