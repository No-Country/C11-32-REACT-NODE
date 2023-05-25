import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from ".";
import { RoutesWithNotFound } from "@/components";
const About = lazy(() => import("@/pages/About/About"));
const Home = lazy(() => import("@/pages/Home/Home"));
const RoadMap = lazy(() => import("@/pages/RoadMap/RoadMap"));
const ContainerBlog = lazy(() => import("@/pages/Blog/ContainerBlog"));
const VideoCalling = lazy(() => import("@/pages/VideoCalling/VideoCalling"));
const Login = lazy(() => import("@/pages/Login/Login"));

const MainRoutes = () => {
  return (
    <RoutesWithNotFound>
      <Route path="/" element={<Home />} />
      <Route path={ROUTES.about} element={<About />} />
      <Route path={ROUTES.roadMap} element={<RoadMap />} />
      <Route path={ROUTES.blog} element={<ContainerBlog />} />
      <Route path={ROUTES.rooms} element={<VideoCalling />} />
      <Route path={ROUTES.auth.login} element={<Login />} />
    </RoutesWithNotFound>
  );
};

export default MainRoutes;
