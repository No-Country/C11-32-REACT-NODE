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

interface Auth {
  user: User;
  accessToken: string;
}

interface User {
  id: string;
  name: string;
  last_name: string;
  hasActiveSubscriptions: boolean;
}

const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthProvider: FC<AuthContextProps> = ({ children }) => {
  const [auth, setAuth] = useLocalStorage<Auth | null>("persist", null);

  function isExpiredToken() {
    if (!auth?.accessToken) return false;

    const { exp = 0 } = jwtDecode<JwtPayload>(auth.accessToken) ?? {};

    return Date.now() >= exp * 1000;
  }

  function logOut() {
    setAuth(null);
    window.localStorage.removeItem("persist");
  }

  useEffect(() => {
    const token = window.localStorage.getItem("persist");

    if (token === null || token === "null") return;

    const tokenParsed = JSON.parse(token) as Auth;
    const accessTokenDecoded = jwtDecode<JwtPayload>(tokenParsed.accessToken);

    if (!accessTokenDecoded.exp) return;

    setAuth({
      user: accessTokenDecoded as User,
      accessToken: tokenParsed.accessToken,
    });

    if (Date.now() >= accessTokenDecoded.exp * 1000) {
      window.localStorage.removeItem("persist");
      setAuth(null);
    }
  }, []);

  const setAuthToken = (response: Auth) => {
    setAuth(response);
    localStorage.setItem(
      "persist",
      JSON.stringify({
        accessToken: response.accessToken,
      })
    );
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
