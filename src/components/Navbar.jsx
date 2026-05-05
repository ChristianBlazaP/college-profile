import citLogo from "../assets/citLOGO.png";
import { Link } from "react-router-dom";

function Navbar() {
  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="navbar">

      {/* LEFT SIDE */}
      <div className="nav-left">
        <img src={citLogo} alt="CIT Logo" className="logo" />
        <h2>COLLEGE OF INDUSTRIAL TECHNOLOGY</h2>
      </div>

      {/* RIGHT SIDE */}
      <nav className="nav-links">
        <Link to="/" onClick={handleHomeClick}>
          Home
        </Link>
        <Link to="/" onClick={() => {
          setTimeout(() => {
            document.getElementById("courses")?.scrollIntoView({
            behavior: "smooth"
            });
          }, 100);
        }}>
          Courses
        </Link>
        <Link to="/facilities">
          Facilities
        </Link>
        <Link to="/faculty">
          Faculty
        </Link>
      </nav>

    </header>
  );
}

export default Navbar;