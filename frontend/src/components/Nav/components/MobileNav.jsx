import { navLinks } from "../NavLinks.js";
import { NavLink } from '../../../components';

const MobileNav = ({ displayClass }) => (
    <ul className={`mobile__bar ${displayClass}`}>
        {
            navLinks.map((link) => (
                <NavLink to={link.to} className="nav">
                    {link.content}
                </NavLink>
            ))
        }
    </ul>
);

export default MobileNav;