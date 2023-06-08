import { FC, ReactNode, createContext, useEffect } from "react";
import jwtDecode, { JwtPayload } from "jwt-decode";
import { useLocalStorage } from "@/hooks";

interface AuthContextProps {
  auth?: Auth | null;
  setAuthToken?: (response: Auth) => void;
  setAuth?: (auth: Auth | null) => void;
  isExpiredToken?: () => boolean;
  logOut?: () => void;
  children?: ReactNode;
}

export interface Auth {
  token: string;
  name: string;
  last_name: string;
  hasSubscriptionActive: boolean;
}

const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthProvider: FC<AuthContextProps> = ({ children }) => {
  const [auth, setAuth] = useLocalStorage<Auth | null>("persist", null);

  function isExpiredToken() {
    if (!auth?.token) return false;

    const { exp = 0 } = jwtDecode<JwtPayload>(auth.token) ?? {};

    return Date.now() >= exp * 1000;
  }

  function logOut() {
    setAuth(null);
    window.localStorage.removeItem("persist");
  }

  useEffect(() => {
    const auth = window.localStorage.getItem("persist");

    if (auth === null || auth === "null") return;

    const tokenParsed = JSON.parse(auth) as Auth;
    const accessTokenDecoded = jwtDecode<JwtPayload>(tokenParsed.token);

    if (!accessTokenDecoded.exp) return;

    setAuth(tokenParsed);

    if (Date.now() >= accessTokenDecoded.exp * 1000) {
      window.localStorage.removeItem("persist");
      setAuth(null);
    }
  }, []);

  const setAuthToken = (response: Auth) => {
    setAuth(response);
    localStorage.setItem("persist", JSON.stringify(response));
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuthToken,
        setAuth,
        isExpiredToken,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
