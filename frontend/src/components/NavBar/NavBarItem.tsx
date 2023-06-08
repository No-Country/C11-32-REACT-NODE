import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

interface NavBarItemProps {
  title: string;
  path: string;
  toggle?: () => void;
}

const NavBarItem: React.FC<NavBarItemProps> = ({ path, title, toggle }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const textColor = isHovered ? '#FF7A00' : 'currentColor';

  return (
    <NavLink
      to={path}
      className="block rounded-md px-3 py-2 text-base font-medium text-current hover:text-white"
      onClick={toggle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ color: textColor }}
    >
      {title}
    </NavLink>
  );
};

export default NavBarItem;
