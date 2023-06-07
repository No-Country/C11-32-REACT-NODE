import { ROUTES } from "@/routes";

interface NavLinkItem {
  title: string;
  path: string;
}
const navLinks: NavLinkItem[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: ROUTES.about,
  },
  {
    title: "Rooms",
    path: ROUTES.rooms.default,
  },
  {
    title: "RoadMap",
    path: ROUTES.roadMap,
  },
  {
    title: "Pricing",
    path: ROUTES.suscriptions.pricingPlans,
  },
  {
    title: "Blog",
    path: ROUTES.blog,
  },
  {
    title: "Login",
    path: ROUTES.auth.login,
  },
  {
    title: "Register",
    path: ROUTES.auth.register,
  },
];

export default navLinks;
