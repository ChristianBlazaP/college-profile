import { Link } from "react-router-dom";

const courses = [
  {
    name: "Automotive Technology",
    faculty: [
      { name: "DATU, JORDAN A.", img: "/asset/faculty/default.jpg" },
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
      { name: "DANGILA CRUZ, ROLE", img: "/asset/faculty/default.jpg" },
      { name: "DOCTOR III, MARIO M.", img: "/asset/faculty/default.jpg" },
      { name: "REYNOSO, ROBERTO E.", img: "/asset/faculty/default.jpg" }
    ]
  },
  {
    name: "Electronics Technology",
    faculty: [
      { name: "SANDOVAL, ALLAN A.", img: "/asset/faculty/default.jpg" },
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
      { name: "PERALTA, DERICK O.", img: "/asset/faculty/default.jpg" },
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
      { name: "SAN JUAN RHYCA MAE C.", img: "/asset/faculty/default.jpg" },
      { name: "BUENCUCHILLO, RODITA M.", img: "/asset/faculty/default.jpg" },
      { name: "BASI, MAUREEN D.", img: "/asset/faculty/default.jpg" },
      { name: "PIELAGO, MARIVIR M.", img: "/asset/faculty/default.jpg" },
      { name: "PIELAGO, MITHOS ARTH M.", img: "/asset/faculty/default.jpg" }
    ]
  },
  {
    name: "Computer Technology",
    faculty: [
      { name: "TANUECO, JOSEPH", img: "/asset/faculty/default.jpg" },
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
      { name: "BEDIA, DESIREE JOYCE L.", img: "/asset/faculty/default.jpg" },
      { name: "MANGAHAS, JANICE P.", img: "/asset/faculty/default.jpg" }
    ]
  }
];

const facultyBoard = [
  { name: "DR. ERWIN P. ORDOVEZ", role: "College Dean" },
  { name: "PROF. EVELYN A. GABAS", role: "Associate Dean" },
  { name: "DATU, JORDAN A.", role: "Department Head - Automotive Technology" },
  { name: "SANDOVAL, ALLAN A.", role: "Department Head - Electronics Technology" },
  { name: "DANGILA CRUZ, ROLE", role: "Department Head - Electrical Technology" },
  { name: "TANUECO, JOSEPH", role: "Department Head - Computer Technology" },
  { name: "BEDIA, DESIREE JOYCE L.", role: "Department Head - Apparel & Fashion Technology" },
  { name: "PERALTA, DERICK O.", role: "Department Head - General Education" },
  { name: "SAN JUAN RHYCA MAE C.", role: "Department Head - Food Trades" }
];

function Home() {
  return (
    <div>

      {/* HERO */}
      <div className="hero">
        <h1>Produce technologically competitive graduates by providing capability build-up responsive to the needs of industry.</h1>
        <h1>Achieve quality instruction, research, extension and production through appropriate continuing faculty development programs in Industrial Technology and Computer Technology.</h1>
        <p>Building better future, with innovation and excellence</p>

        <a href="#courses">
          <button>View Courses</button>
        </a>
      </div>

      {/* CONTENT */}
      <div className="container">

        {/* PHILOSOPHY */}
        <div className="philosophy-section">
          <h3>Who are Earistians?</h3>
          <p>
            Earistians are proud members and graduates of the College of Industrial Technology at Educational Academy of Republic of the Islands of Science and Technology (EARIST). 
            They are technologically competent professionals committed to excellence in innovation, research, and industry-responsive solutions. 
            Earistians embody the values of continuous learning, quality instruction, and dedication to advancing industrial technology and computer technology for the betterment of society.
          </p>
        </div>

        {/* FACULTY */}
        <h2 id="faculty">Faculty Board</h2>
        <div className="grid">
          {facultyBoard.map((f, index) => (
            <div key={index} className="card">
              <h3>{f.name}</h3>
              <p>{f.role}</p>
            </div>
          ))}
        </div>

        {/* COURSES */}
        <h2 id="courses">Courses</h2>

        <div className="grid">
          {courses.map((course, index) => (
            <Link key={index} to={`/course/${course.name}`} className="card">
              <h3>{course.name}</h3>
              <p>Click to view instructors</p>
            </Link>
          ))}
        </div>

      </div>

    </div>
  );
}

export default Home;