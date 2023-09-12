import React from 'react';
import { navLinks } from '../NavLinks.js';
import { NavLink } from '../../../components';

const DesktopNav = () => {
  return (
    <>
      <ul className="desktop__bar">
        {navLinks.map((link) => (
          <NavLink to={link.to} className="nav">
            {link.content}
          </NavLink>
        ))}
      </ul>
    </>
  );
};

export default DesktopNav;
