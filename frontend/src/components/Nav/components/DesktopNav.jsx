import React from 'react';
import { navLinks } from '../NavLinks.js';
import { NavLink } from '../../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const DesktopNav = () => {
  return (
    <>
      <ul className="desktop__bar">
        {navLinks.map((link) => (
          <NavLink to={link.to} className="nav">
            {link.content} <FontAwesomeIcon icon={faAngleDown} />
          </NavLink>
        ))}
      </ul>
    </>
  );
};

export default DesktopNav;
