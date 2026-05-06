import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { courses } from "../data/courses";
import FacultyCard from "../components/FacultyCard";

const facultyBoard = [
  { name: "DR. ERWIN P. ORDOVEZ", role: "College Dean", department: "Administration" },
  { name: "PROF. EVELYN A. GABAS", role: "Associate Dean", department: "Administration" },

  { name: "DATU, JORDAN A.", role: "Department Head", department: "Automotive Technology" },
  { name: "SANDOVAL, ALLAN A.", role: "Department Head", department: "Electronics Technology" },
  { name: "DANGILA CRUZ, ROLE", role: "Department Head", department: "Electrical Technology" },
  { name: "TANUECO, JOSEPH", role: "Department Head", department: "Computer Technology" },
  { name: "BEDIA, DESIREE JOYCE L.", role: "Department Head", department: "Apparel & Fashion Technology" },
  { name: "PERALTA, DERICK O.", role: "Department Head", department: "General Education" },
  { name: "SAN JUAN RHYCA MAE C.", role: "Department Head", department: "Food Trades" },
];

function FacultyPage() {
  const navigate = useNavigate();

  const administration = facultyBoard.filter(f => f.department === "Administration");
  const departmentHeads = facultyBoard.filter(f => f.role === "Department Head");

  return (
    <div className="faculty-page">
      <div className="container">

        <button className="back-button" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <h1>Faculty Directory</h1>

        <p className="faculty-intro">
          Meet the dedicated leaders and educators of the College of Industrial Technology.
          These professionals guide students toward excellence, innovation, and industry readiness.
        </p>

        {/* ADMINISTRATION */}
        <section className="faculty-section">
          <h2>College Administration</h2>
          <div className="faculty-grid">
            {administration.map((f, index) => (
              <div key={index} className="faculty-card">
                <h3>{f.name}</h3>
                <p className="faculty-role">{f.role}</p>
                <p className="faculty-department">{f.department}</p>
              </div>
            ))}
          </div>
        </section>

        {/* DEPARTMENT HEADS */}
        <section className="faculty-section">
          <h2>Department Heads</h2>
          <div className="faculty-grid">
            {departmentHeads.map((f, index) => (
              <div key={index} className="faculty-card">
                <h3>{f.name}</h3>
                <p className="faculty-role">{f.role}</p>
                <p className="faculty-department">{f.department}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ALL FACULTY BY DEPARTMENT */}
        <section className="faculty-section">
          <h2>Faculty by Department</h2>
          {courses.map((course, index) => (
            <div key={index} style={{ marginBottom: '40px' }}>
              <h3 style={{ color: '#FFC000', marginBottom: '16px' }}>
                <Link to={`/course/${encodeURIComponent(course.name)}`} style={{ color: '#FFC000' }}>
                  {course.name}
                </Link>
              </h3>
              <div className="grid">
                {course.faculty.map((f, fi) => (
                  <FacultyCard key={fi} name={f.name} img={f.img} role={f.role} />
                ))}
              </div>
            </div>
          ))}
        </section>

      </div>
    </div>
  );
}

export default FacultyPage;