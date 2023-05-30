import { NavLink } from "react-router-dom";

interface NavBarItem {
  title: string;
  path: string;
  toggle?: () => void;
}

const NavBarItem: React.FC<NavBarItem> = ({ path, title, toggle }) => {
  return (
    <NavLink
      to={path}
      className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:text-white"
      onClick={toggle}
    >
      {title}
    </NavLink>
  );
};

export default NavBarItem;
