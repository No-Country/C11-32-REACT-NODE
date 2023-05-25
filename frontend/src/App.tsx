import NavBar from "./components/NavBar/NavBar";
import navLinks from "./constants/navLinksData";

import { Suspense } from "react";
import { MainRoutes } from "./routes";

function App() {
  return (
    <>
      <NavBar navLinks={navLinks} />
      <Suspense fallback={<div>Loading...</div>}>
        <MainRoutes />
      </Suspense>
    </>
  );
}

export default App;
