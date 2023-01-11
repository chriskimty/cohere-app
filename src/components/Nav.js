import { Link } from "react-router-dom";
import icon from '../assets/petNameGenIcon.png';

const Navbar = () => {

  return (
    <nav className="navbar wrapper">
      <div className="icon">
        <Link to="/">
          <img src={icon} alt="PNG (pet name generator) icon" />
        </Link>
      </div>
      <ul className="links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/spotlight">Spotlight</Link>
        </li> 
      </ul>
    </nav>
  );
}

export default Navbar;