import { useAuth } from "@/hooks";
import { ROUTES } from "@/routes";
import { Navigate, Outlet } from "react-router-dom";

function RoutesWithAuth() {
  const { auth } = useAuth() ?? {};

  return auth ? <Outlet /> : <Navigate to={ROUTES.auth.login} />;
}
export default RoutesWithAuth;
