const courses = [
  {
    name: "Automotive Technology",
    faculty: [
      { name: "DATU, JORDAN A.", img: "/images/faculty/default.jpg" },
      { name: "BERNARDO, JAY C.", img: "/images/faculty/default.jpg" },
      { name: "BUCAO, IRVING E.", img: "/images/faculty/default.jpg" }
    ]
  },
  {
    name: "Mechanical Technology",
    faculty: [
      { name: "PEREZ, ELDON P.", img: "/images/faculty/default.jpg" },
      { name: "BARRA, ERWIN C.", img: "/images/faculty/default.jpg" }
    ]
  },
  {
    name: "Electrical Technology",
    faculty: [
      { name: "DANGILA CRUZ, ROLE", img: "/images/faculty/default.jpg" },
      { name: "DOCTOR III, MARIO M.", img: "/images/faculty/default.jpg" },
      { name: "REYNOSO, ROBERTO E.", img: "/images/faculty/default.jpg" }
    ]
  },
  {
    name: "Electronics Technology",
    faculty: [
      { name: "SANDOVAL, ALLAN A.", img: "/images/faculty/default.jpg" },
      { name: "ALVARO, FERDINAND P.", img: "/images/faculty/default.jpg" },
      { name: "BAIRAN, RYAN ALEXIE L.", img: "/images/faculty/default.jpg" },
      { name: "CASTILLANO, IVAN F.", img: "/images/faculty/default.jpg" },
      { name: "ORDOVEZ, ERWIN P.", img: "/images/faculty/default.jpg" }
    ]
  },
  {
    name: "Drafting Technology",
    faculty: [
      { name: "REYNANTE T. TIONG", img: "/images/faculty/default.jpg" },
      { name: "CANTARA, ROLITO A.", img: "/images/faculty/default.jpg" },
      { name: "RELINDO, CYNTHIA M.", img: "/images/faculty/default.jpg" }
    ]
  },
  {
    name: "General Education",
    faculty: [
      { name: "PERALTA, DERICK O.", img: "/images/faculty/default.jpg" },
      { name: "ANGLO, EDWIN", img: "/images/faculty/default.jpg" },
      { name: "DELA CRUZ, SOFIA", img: "/images/faculty/default.jpg" },
      { name: "DINEROS, DANIEL D.", img: "/images/faculty/default.jpg" },
      { name: "JAMERO, FELIPE K.", img: "/images/faculty/default.jpg" },
      { name: "JAMERO, RICHARD K.", img: "/images/faculty/default.jpg" },
      { name: "VILLADOLID, ROWENA M.", img: "/images/faculty/default.jpg" },
      { name: "VILLANUEVA, CHRISTIAN", img: "/images/faculty/default.jpg" }
    ]
  },
  {
    name: "Food Trades",
    faculty: [
      { name: "SAN JUAN RHYCA MAE C.", img: "/images/faculty/default.jpg" },
      { name: "BUENCUCHILLO, RODITA M.", img: "/images/faculty/default.jpg" },
      { name: "BASI, MAUREEN D.", img: "/images/faculty/default.jpg" },
      { name: "PIELAGO, MARIVIR M.", img: "/images/faculty/default.jpg" },
      { name: "PIELAGO, MITHOS ARTH M.", img: "/images/faculty/default.jpg" }
    ]
  },
  {
    name: "Computer Technology",
    faculty: [
      { name: "TANUECO, JOSEPH", img: "/images/faculty/default.jpg" },
      { name: "RIVERA, SHERWIN KEITH T.", img: "/images/faculty/default.jpg" },
      { name: "ORDOVEZ, DENNIS P.", img: "/images/faculty/default.jpg" }
    ]
  },
  {
    name: "HVAC-R",
    faculty: [
      { name: "MARCELO, LUISMINDA", img: "/images/faculty/default.jpg" },
      { name: "AMAC, NACHO B.", img: "/images/faculty/default.jpg" }
    ]
  },
  {
    name: "Apparel and Fashion Technology",
    faculty: [
      { name: "BEDIA, DESIREE JOYCE L.", img: "/images/faculty/default.jpg" },
      { name: "MANGAHAS, JANICE P.", img: "/images/faculty/default.jpg" }
    ]
  }
];

const leaders = [
  { name: "DR. ERWIN P. ORDOVEZ", role: "College Dean", img: "/images/faculty/default.jpg" },
  { name: "PROF. EVELYN A. GABAS", role: "Associate Dean", img: "/images/faculty/default.jpg" }
];

function Home() {
  return (
    <div className="container">

      <h2>College Leaders</h2>
      <div className="grid">
        {leaders.map((l, index) => (
          <div key={index} className="card">
            <img src={l.img} alt={l.name} />
            <h3>{l.name}</h3>
            <p>{l.role}</p>
          </div>
        ))}
      </div>

      <h2 id="courses">Courses</h2>

      {courses.map((course, index) => (
        <div key={index} className="course-section">
          <h3>{course.name}</h3>

          <div className="grid">
            {course.faculty.map((f, i) => (
              <div key={i} className="card">
                <img src={f.img} alt={f.name} />
                <p>{f.name}</p>
              </div>
            ))}
          </div>

        </div>
      ))}

    </div>
  );
}

export default Home;