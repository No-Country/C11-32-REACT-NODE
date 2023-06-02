import { lazy } from "react";
import { Navigate, Route } from "react-router-dom";
import { ROUTES } from ".";
import { RoutesWithNotFound } from "@/components";
import Specially from "@/pages/Clases/Specially";
const About = lazy(() => import("@/pages/About/About"));
const Home = lazy(() => import("@/pages/Home/Home"));
const RoadMap = lazy(() => import("@/pages/RoadMap/RoadMap"));
const ContainerBlog = lazy(() => import("@/pages/Blog/ContainerBlog"));

const VideoCalling = lazy(() => import("@/pages/VideoCalling/VideoCalling"));

const Login = lazy(() => import("@/pages/Login/Login"));
const PricingPlans = lazy(() => import("@/pages/Suscriptions/PricingPlans"));
const Checkout = lazy(() => import("@/pages/Suscriptions/Checkout"));

const MainRoutes = () => {
  return (
    <RoutesWithNotFound>
      <Route path="/" element={<Home />} />
      <Route path={ROUTES.about} element={<About />} />
      <Route path={ROUTES.roadMap} element={<RoadMap />} />
      <Route path={ROUTES.blog} element={<ContainerBlog />} />
      <Route path={ROUTES.specially} element={<Specially />} />

      <Route path={ROUTES.rooms} element={<VideoCalling />} />
      <Route path={ROUTES.auth.login} element={<Login />} />
      <Route
        path={ROUTES.suscriptions.pricingPlans}
        element={<PricingPlans />}
      />
      <Route
        path={`${ROUTES.suscriptions.checkout}/:id`}
        element={<Checkout />}
      />
      <Route
        path={`${ROUTES.suscriptions.checkout}`}
        element={<Navigate to={ROUTES.suscriptions.pricingPlans} />}
      />
    </RoutesWithNotFound>
  );
};

export default MainRoutes;
