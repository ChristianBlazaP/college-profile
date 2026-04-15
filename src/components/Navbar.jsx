function Navbar() {
  return (
    <div className="navbar">
      <h2>COLLEGE OF INDUSTRIL TECHNOLOGY</h2>

      <input type="checkbox" id="menu-toggle" />
      <label htmlFor="menu-toggle" className="menu-icon">☰</label>

      <ul className="menu">
        <li>Home</li>
        <li>Courses</li>
        <li>Faculty</li>
      </ul>
    </div>
  );
}

export default Navbar;