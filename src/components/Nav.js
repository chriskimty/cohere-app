import { Link } from "react-router-dom";
import icon from '../assets/petNameGenIcon.png';

const Navbar = () => {
  // Refresh page to avoid going back to forms if generate button has already been pressed. Can return to this function for improved solution.
  const refresh = () => {
    window.reload();
  }

  return (
    <nav className="navbar wrapper">
      <div className="icon">
        <Link to="/" onClick={refresh}>
          <img src={icon} alt="PNG (pet name generator) icon" />
        </Link>
      </div>
      <ul className="links">
        <li>
          <Link to="/" onClick={refresh}>
            <p className="button">
              <span className="material-symbols-outlined">house</span>
              Home
            </p>
          </Link>
        </li>
        <li>
          <Link to="/spotlight">
            <p className="button"><span className="material-symbols-outlined">cruelty_free</span>
              Spotlight
            </p>
          </Link>
        </li> 
      </ul>
    </nav>
  );
}

export default Navbar;