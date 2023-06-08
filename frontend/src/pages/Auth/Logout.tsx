import { useAuth } from "@/hooks";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth() ?? {};

  useEffect(() => {
    if (!logOut) return;

    logOut();
    navigate("/", { replace: true });
  }, []);

  return null;
};

export default Logout;
