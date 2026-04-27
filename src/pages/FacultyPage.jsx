import { useNavigate } from "react-router-dom";

// Import course data with faculty
const courseData = [
  {
    name: "Automotive Technology",
    faculty: [
      { name: "DATU, JORDAN A.", img: "/asset/faculty/default.jpg", role: "Department Head" },
      { name: "BERNARDO, JAY C.", img: "/asset/faculty/default.jpg" },
      { name: "BUCAO, IRVING E.", img: "/asset/faculty/default.jpg" }
    ]
  },
  {
    name: "Mechanical Technology",
    faculty: [
      { name: "PEREZ, ELDON P.", img: "/asset/faculty/default.jpg" },
      { name: "BARRA, ERWIN C.", img: "/asset/faculty/default.jpg" }
    ]
  },
  {
    name: "Electrical Technology",
    faculty: [
      { name: "DANGILA CRUZ, ROLE", img: "/asset/faculty/default.jpg", role: "Department Head" },
      { name: "DOCTOR III, MARIO M.", img: "/asset/faculty/default.jpg" },
      { name: "REYNOSO, ROBERTO E.", img: "/asset/faculty/default.jpg" }
    ]
  },
  {
    name: "Electronics Technology",
    faculty: [
      { name: "SANDOVAL, ALLAN A.", img: "/asset/faculty/default.jpg", role: "Department Head" },
      { name: "ALVARO, FERDINAND P.", img: "/asset/faculty/default.jpg" },
      { name: "BAIRAN, RYAN ALEXIE L.", img: "/asset/faculty/default.jpg" },
      { name: "CASTILLANO, IVAN F.", img: "/asset/faculty/default.jpg" },
      { name: "ORDOVEZ, ERWIN P.", img: "/asset/faculty/default.jpg" }
    ]
  },
  {
    name: "Drafting Technology",
    faculty: [
      { name: "REYNANTE T. TIONG", img: "/asset/faculty/default.jpg" },
      { name: "CANTARA, ROLITO A.", img: "/asset/faculty/default.jpg" },
      { name: "RELINDO, CYNTHIA M.", img: "/asset/faculty/default.jpg" }
    ]
  },
  {
    name: "General Education",
    faculty: [
      { name: "PERALTA, DERICK O.", img: "/asset/faculty/default.jpg", role: "Department Head" },
      { name: "ANGLO, EDWIN", img: "/asset/faculty/default.jpg" },
      { name: "DELA CRUZ, SOFIA", img: "/asset/faculty/default.jpg" },
      { name: "DINEROS, DANIEL D.", img: "/asset/faculty/default.jpg" },
      { name: "JAMERO, FELIPE K.", img: "/asset/faculty/default.jpg" },
      { name: "JAMERO, RICHARD K.", img: "/asset/faculty/default.jpg" },
      { name: "VILLADOLID, ROWENA M.", img: "/asset/faculty/default.jpg" },
      { name: "VILLANUEVA, CHRISTIAN", img: "/asset/faculty/default.jpg" }
    ]
  },
  {
    name: "Food Trades",
    faculty: [
      { name: "SAN JUAN RHYCA MAE C.", img: "/asset/faculty/default.jpg", role: "Department Head" },
      { name: "BUENCUCHILLO, RODITA M.", img: "/asset/faculty/default.jpg" },
      { name: "BASI, MAUREEN D.", img: "/asset/faculty/default.jpg" },
      { name: "PIELAGO, MARIVIR M.", img: "/asset/faculty/default.jpg" },
      { name: "PIELAGO, MITHOS ARTH M.", img: "/asset/faculty/default.jpg" }
    ]
  },
  {
    name: "Computer Technology",
    faculty: [
      { name: "TANUECO, JOSEPH", img: "/asset/faculty/default.jpg", role: "Department Head" },
      { name: "RIVERA, SHERWIN KEITH T.", img: "/asset/faculty/default.jpg" },
      { name: "ORDOVEZ, DENNIS P.", img: "/asset/faculty/default.jpg" }
    ]
  },
  {
    name: "HVAC-R",
    faculty: [
      { name: "MARCELO, LUISMINDA", img: "/asset/faculty/default.jpg" },
      { name: "AMAC, NACHO B.", img: "/asset/faculty/default.jpg" }
    ]
  },
  {
    name: "Apparel and Fashion Technology",
    faculty: [
      { name: "BEDIA, DESIREE JOYCE L.", img: "/asset/faculty/default.jpg", role: "Department Head" },
      { name: "MANGAHAS, JANICE P.", img: "/asset/faculty/default.jpg" }
    ]
  }
];

const facultyBoard = [
  { name: "DR. ERWIN P. ORDOVEZ", role: "College Dean", department: "Administration" },
  { name: "PROF. EVELYN A. GABAS", role: "Associate Dean", department: "Administration" },

  { name: "DATU, JORDAN A.", role: "Department Head - Automotive Technology", department: "Automotive Technology" },
  { name: "SANDOVAL, ALLAN A.", role: "Department Head - Electronics Technology", department: "Electronics Technology" },
  { name: "DANGILA CRUZ, ROLE", role: "Department Head - Electrical Technology", department: "Electrical Technology" },
  { name: "TANUECO, JOSEPH", role: "Department Head - Computer Technology", department: "Computer Technology" },
  { name: "BEDIA, DESIREE JOYCE L.", role: "Department Head - Apparel & Fashion Technology", department: "Apparel & Fashion Technology" },
  { name: "PERALTA, DERICK O.", role: "Department Head - General Education", department: "General Education" },
  { name: "SAN JUAN RHYCA MAE C.", role: "Department Head - Food Trades", department: "Food Trades" }
];

function FacultyPage() {
  const navigate = useNavigate();

  // Group faculty by role
  const groupedFaculty = {
    Administration: facultyBoard.filter(f => f.department === "Administration"),
    DepartmentHeads: facultyBoard.filter(f => f.role.includes("Department Head"))
  };

  return (
    <div className="faculty-page">
      <div className="container">

        {/* BACK BUTTON */}
        <button className="back-button" onClick={() => navigate(-1)}>
          ← Back
        </button>

        {/* TITLE */}
        <h1>Faculty Directory</h1>

        {/* INTRO */}
        <p className="faculty-intro">
          Meet the dedicated leaders and educators of the College of Industrial Technology.
          These professionals guide students toward excellence, innovation, and industry readiness.
        </p>

        {/* ADMINISTRATION */}
        <section className="faculty-section">
          <h2>College Administration</h2>

          <div className="faculty-grid">
            {groupedFaculty.Administration.map((faculty, index) => (
              <div key={index} className="faculty-card">
                <h3>{faculty.name}</h3>
                <p className="faculty-role">{faculty.role}</p>
                <p className="faculty-department">{faculty.department}</p>
              </div>
            ))}
          </div>
        </section>

        {/* DEPARTMENT HEADS */}
        <section className="faculty-section">
          <h2>Department Heads</h2>

          <div className="faculty-grid">
            {groupedFaculty.DepartmentHeads.map((faculty, index) => (
              <div key={index} className="faculty-card">
                <h3>{faculty.name}</h3>
                <p className="faculty-role">{faculty.role}</p>
                <p className="faculty-department">{faculty.department}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}

export default FacultyPage;