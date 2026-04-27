import citLogo from "../assets/citLOGO.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">

      {/* LEFT SIDE */}
      <div className="nav-left">
        <img src={citLogo} alt="CIT Logo" className="logo" />
        <h2>COLLEGE OF INDUSTRIAL TECHNOLOGY</h2>
      </div>

      {/* RIGHT SIDE */}
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <a href="/#courses">Courses</a>
        <Link to="/facilities">Facilities</Link>
        <Link to="/faculty">Faculty</Link>
      </nav>

    </header>
  );
}

export default Navbar;