import { motion } from "framer-motion";

const courses = [
  {
    name: "Automotive Technology",
    faculty: [
      "DATU, JORDAN A.",
      "BERNARDO, JAY C.",
      "BUCAO, IRVING E."
    ]
  },
  {
    name: "Mechanical Technology",
    faculty: [
      "PEREZ, ELDON P.",
      "BARRA, ERWIN C."
    ]
  },
  {
    name: "Electrical Technology",
    faculty: [
      "DANGILA CRUZ, ROLE",
      "DOCTOR III, MARIO M.",
      "REYNOSO, ROBERTO E."
    ]
  },
  {
    name: "Electronics Technology",
    faculty: [
      "SANDOVAL, ALLAN A.",
      "ALVARO, FERDINAND P.",
      "BAIRAN, RYAN ALEXIE L.",
      "CASTILLANO, IVAN F.",
      "ORDOVEZ, ERWIN P."
    ]
  },
  {
    name: "Drafting Technology",
    faculty: [
      "REYNANTE T. TIONG",
      "CANTARA, ROLITO A.",
      "RELINDO, CYNTHIA M."
    ]
  },
  {
    name: "General Education",
    faculty: [
      "PERALTA, DERICK O.",
      "ANGLO, EDWIN",
      "DELA CRUZ, SOFIA",
      "DINEROS, DANIEL D.",
      "JAMERO, FELIPE K.",
      "JAMERO, RICHARD K.",
      "VILLADOLID, ROWENA M.",
      "VILLANUEVA, CHRISTIAN"
    ]
  },
  {
    name: "Food Trades",
    faculty: [
      "SAN JUAN RHYCA MAE C.",
      "BUENCUCHILLO, RODITA M.",
      "BASI, MAUREEN D.",
      "PIELAGO, MARIVIR M.",
      "PIELAGO, MITHOS ARTH M."
    ]
  },
  {
    name: "Computer Technology",
    faculty: [
      "TANUECO, JOSEPH",
      "RIVERA, SHERWIN KEITH T.",
      "ORDOVEZ, DENNIS P."
    ]
  },
  {
    name: "HVAC-R",
    faculty: [
      "MARCELO, LUISMINDA",
      "AMAC, NACHO B."
    ]
  },
  {
    name: "Apparel and Fashion Technology",
    faculty: [
      "BEDIA, DESIREE JOYCE L.",
      "MANGAHAS, JANICE P."
    ]
  }
];

const leaders = [
  { name: "DR. ERWIN P. ORDOVEZ", role: "College Dean" },
  { name: "PROF. EVELYN A. GABAS", role: "Associate Dean" }
];

function Home() {
  return (
    <div>

      <h2>College Leaders</h2>
      <div className="grid">
        {leaders.map((l, index) => (
          <div key={index} className="card">
            <h3>{l.name}</h3>
            <p>{l.role}</p>
          </div>
        ))}
      </div>

      <h2>Courses</h2>

      {courses.map((course, index) => (
        <div key={index} className="course-section">
          <h3>{course.name}</h3>

          <div className="grid">
            {course.faculty.map((f, i) => (
              <div key={i} className="card">
                <p>{f}</p>
              </div>
            ))}
          </div>

        </div>
      ))}

    </div>
  );
}

export default Home;