import { ROUTES } from "@/routes";

const navLinks = [
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
    path: ROUTES.rooms,
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

  // Agrega más objetos para cada enlace del navbar
];

export default navLinks;
