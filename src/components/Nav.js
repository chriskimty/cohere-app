import { Link } from "react-router-dom";
import icon from '../assets/petNameGenIcon.png';

const Navbar = () => {
  const refresh = () => {
    window.reload();
  }

  return (
    <nav className="navbar wrapper">
      <div className="icon">
        <Link to="/">
          <img src={icon} alt="PNG (pet name generator) icon" />
        </Link>
      </div>
      <ul className="links">
        <li>
          <Link to="/" onClick={refresh}>
            <p className="button">
              <span class="material-symbols-outlined">house</span>
              Home
            </p>
          </Link>
        </li>
        <li>
          <Link to="/spotlight">
            <p className="button"><span class="material-symbols-outlined">cruelty_free</span>
              Spotlight
            </p>
          </Link>
        </li> 
      </ul>
    </nav>
  );
}

export default Navbar;