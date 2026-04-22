import { useNavigate } from "react-router-dom";

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
        <button className="back-button" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <h1>Faculty Directory</h1>
        <p className="faculty-intro">
          Meet the dedicated leaders and educators of the College of Industrial Technology
        </p>

        {/* College Administration */}
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

        {/* Department Heads */}
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
