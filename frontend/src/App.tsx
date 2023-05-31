import NavBar from "./components/NavBar/NavBar";

import { Suspense } from "react";
import { MainRoutes } from "./routes";
import navLinks from "./constants/navLinksData";
import { ScreenLoader } from "./components";

function App() {
  return (
    <>
      <NavBar navLinks={navLinks} />
      <Suspense fallback={<ScreenLoader />}>
        <MainRoutes />
      </Suspense>
    </>
  );
}

export default App;
