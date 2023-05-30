import NavBar from "./components/NavBar/NavBar";

import { Suspense } from "react";
import { MainRoutes } from "./routes";
import navLinks from "./constants/navLinksData";

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
