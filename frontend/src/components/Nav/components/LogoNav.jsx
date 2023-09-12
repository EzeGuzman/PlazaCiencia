import { Link } from 'react-router-dom';
import logo from '../assets/logo-secre.jpg';

const NavLogo = () => (
  <Link to="/" className="nav__logo">
    <img src={logo} alt="Plaza Ciencia Logo" />
  </Link>
);

export default NavLogo;
