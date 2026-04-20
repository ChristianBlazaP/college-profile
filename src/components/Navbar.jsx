import citLogo from "../assets/citLOGO.png";

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
        <a href="/">Home</a>
        <a href="/#courses">Courses</a>
        <a href="/#faculty">Faculty</a>
      </nav>

    </header>
  );
}

export default Navbar;