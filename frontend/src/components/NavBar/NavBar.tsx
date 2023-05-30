import { logo } from "@/assets";
import { useState } from "react";
import { NavBarItem } from ".";

interface NavLinkItem {
  title: string;
  path: string;
}

interface NavBarProps {
  navLinks: NavLinkItem[];
}

const NavBar: React.FC<NavBarProps> = ({ navLinks }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img src={logo} alt="logo" style={{ width: "30px" }} />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {navLinks.map(({ path, title }) => (
                    <NavBarItem key={path} path={path} title={title} />
                  ))}
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                {/* Agrega aquí cualquier elemento adicional para la versión de escritorio */}
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                type="button"
                onClick={toggleMenu}
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen ? "true" : "false"}
              >
                <span className="sr-only">Open menu</span>
                {/* Icono de menú hamburguesa */}
                <svg
                  className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                {/* Icono de menú cerrado (X) */}
                <svg
                  className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Menú desplegable para dispositivos móviles */}
        <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {navLinks.map(({ path, title }) => (
              <NavBarItem
                key={title}
                path={path}
                title={title}
                toggle={toggleMenu}
              />
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
