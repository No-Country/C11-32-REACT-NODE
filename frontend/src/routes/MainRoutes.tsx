import { lazy } from "react";
import { Navigate, Route } from "react-router-dom";
import { ROUTES } from ".";
import { RoutesWithAuth, RoutesWithNotFound } from "@/components";

import { Logout } from "@/pages";

const About = lazy(() => import("@/pages/About/About"));
const Home = lazy(() => import("@/pages/Home/Home"));
const RoadMap = lazy(() => import("@/pages/RoadMap/RoadMap"));
const ContainerBlog = lazy(() => import("@/pages/Blog/ContainerBlog"));
const FAQ = lazy(() => import("@/pages/FAQ/FAQ"));

const Rooms = lazy(() => import("@/pages/Rooms/Rooms"));
const Meeting = lazy(() => import("@/pages/Meeting/Meeting"));
const CreateRoom = lazy(() => import("@/pages/Rooms/CreateRoom"));

const Login = lazy(() => import("@/pages/Auth/Login"));
const Register = lazy(() => import("@/pages/Auth/Register"));
const PricingPlans = lazy(() => import("@/pages/Suscriptions/PricingPlans"));
const Checkout = lazy(() => import("@/pages/Suscriptions/Checkout"));

const MainRoutes = () => {
  return (
    <RoutesWithNotFound>
      <Route path="/" element={<Home />} />
      <Route path={ROUTES.rooms.default} element={<Rooms />} />

      <Route path={ROUTES.about} element={<About />} />
      <Route path={ROUTES.blog} element={<ContainerBlog />} />
      <Route path={ROUTES.FAQ} element={<FAQ />} />

      <Route path={ROUTES.auth.login} element={<Login />} />
      <Route path={ROUTES.auth.register} element={<Register />} />
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

      <Route element={<RoutesWithAuth />}>
        <Route path={ROUTES.roadMap} element={<RoadMap />} />
        <Route path={ROUTES.rooms.create} element={<CreateRoom />} />
        <Route path={`${ROUTES.rooms.join}/:meetingId`} element={<Meeting />} />
        <Route path={`${ROUTES.auth.logout}`} element={<Logout />} />
      </Route>
    </RoutesWithNotFound>
  );
};

export default MainRoutes;
