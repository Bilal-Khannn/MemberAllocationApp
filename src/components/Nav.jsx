import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-ligh bg-light">
      <ul className="navbar-nav me-atuo mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/GroupedTeamMembers">
            Teams
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
