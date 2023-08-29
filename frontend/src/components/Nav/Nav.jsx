import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import DesktopNav from './components/DesktopNav';
import MobileNav from './components/MobileNav';
import LogoNav from './components/LogoNav';
import './Nav.css';

const Nav = () => {

  const [toggle, setToggle] = useState(false);

  let displayClass = toggle ? "mobile__bar--active" : "";

  return (
    <nav className="nav">
      <LogoNav />
      {toggle ? (
        <FaTimes
          className="nav__btn nav__btn--active"
          onClick={() => setToggle((prev) => !prev)}
        />
      ) : (
        <FaBars
          className="nav__btn"
          onClick={() => setToggle((prev) => !prev)}
        />
      )}
      <DesktopNav />
      <MobileNav displayClass={displayClass} />
    </nav>
  );
};

export default Nav;
