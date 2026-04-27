import { Link, useNavigate } from "react-router-dom";
import { courses} from "../data/courses";

function Home() {
  const navigate = useNavigate();

  const handleHeroClick = () => {
    navigate("/");
  };
  return (
    <div>

      {/* HERO */}
      <div className="hero" onClick={handleHeroClick} style={{ cursor: "pointer" }}>
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
            Earistians are proud members and graduates of the College of Industrial Technology at Eulogio "Amang" Rodriguez Institute of Science and Technology (EARIST). 
            They are technologically competent professionals committed to excellence in innovation, research, and industry-responsive solutions. 
            Earistians embody the values of continuous learning, quality instruction, and dedication to advancing industrial technology and computer technology for the betterment of society.
          </p>
        </div>

        {/* PORTRAIT STATISTICS BOXES */}
        <h2 style={{ marginTop: "50px", marginBottom: "30px" }}>Why Choose CIT?</h2>
        <div className="portrait-grid">
          <div className="portrait-box">
            <div className="portrait-icon">🎓</div>
            <h3>10+ Programs</h3>
            <p>Diverse courses ranging from automotive to computer technology, designed to meet industry demands.</p>
          </div>
          
          <div className="portrait-box">
            <div className="portrait-icon">👨‍🏫</div>
            <h3>Expert Faculty</h3>
            <p>Dedicated educators and industry professionals guiding students toward excellence and innovation.</p>
          </div>
          
          <div className="portrait-box">
            <div className="portrait-icon">🏭</div>
            <h3>Modern Labs</h3>
            <p>State-of-the-art laboratories and workshops equipped with the latest technology and equipment.</p>
          </div>
          
          <div className="portrait-box">
            <div className="portrait-icon">🌟</div>
            <h3>Industry Ready</h3>
            <p>Our graduates are equipped with practical skills and knowledge demanded by the industry.</p>
          </div>
          
          <div className="portrait-box">
            <div className="portrait-icon">🤝</div>
            <h3>Industry Partners</h3>
            <p>Strong connections with leading companies ensuring relevant training and job opportunities.</p>
          </div>
          
          <div className="portrait-box">
            <div className="portrait-icon">📈</div>
            <h3>Career Growth</h3>
            <p>Comprehensive training and guidance for career advancement and professional development.</p>
          </div>
        </div>

        {/* FACILITIES PREVIEW */}
        <h2 id="facilities" style={{ marginTop: "50px", marginBottom: "30px" }}>Explore Our Facilities</h2>
        <div className="facilities-preview-box" onClick={() => navigate("/facilities")} style={{ cursor: "pointer" }}>
          <div className="facilities-preview-img">
            <img src="/asset/facilities/automotive.jpg" alt="Facilities" />
          </div>
          <div className="facilities-preview-info">
            <h3>Our Modern Laboratories & Workshops</h3>
            <p>Discover state-of-the-art facilities equipped with cutting-edge technology for hands-on learning across all courses.</p>
            <button className="preview-btn">View All Facilities →</button>
          </div>
        </div>

        {/* COURSES */}
        <h2 id="courses" style={{ marginTop: "50px", marginBottom: "30px" }}>Our Courses</h2>

        <div className="grid">
          {courses.map((course, index) => (
            <Link key={index} to={`/course/${course.name}`} className="card">
              <h3>{course.name}</h3>
            </Link>
          ))}
        </div>

      </div>

    </div>
  );
}

export default Home;