import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { courses} from "../data/courses";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const observerOptions = {
      threshold: 0.3,
      rootMargin: "0px 0px -50px 0px"
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDown = currentScrollY > lastScrollY;
      lastScrollY = currentScrollY;

      const portraitBoxes = document.querySelectorAll(".portrait-box");
      portraitBoxes.forEach((box) => {
        const rect = box.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight * 0.7 && rect.bottom > 0;

        if (isInView && scrollDown) {
          box.classList.add("animate-in");
          box.classList.remove("animate-out");
        } else if (!isInView && !scrollDown) {
          box.classList.add("animate-out");
          box.classList.remove("animate-in");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
            <h3>Quality Technical Programs</h3>
            <p>Specialized programs in Automotive, Mechanical, and Electrical Technology designed to produce vocationally, technically, and technologically trained graduates.</p>
          </div>
          
          <div className="portrait-box">
            <div className="portrait-icon">👨‍🏫</div>
            <h3>Continuous Faculty Development</h3>
            <p>Dedicated educators committed to excellence with ongoing professional development programs ensuring quality instruction and industry-relevant expertise.</p>
          </div>
          
          <div className="portrait-box">
            <div className="portrait-icon">🏭</div>
            <h3>Practical Learning Facilities</h3>
            <p>Well-equipped laboratories and workshops designed for hands-on technical training and skill development in automotive, mechanical, and electrical systems.</p>
          </div>
          
          <div className="portrait-box">
            <div className="portrait-icon">🌟</div>
            <h3>Globally Competitive Graduates</h3>
            <p>Production of quality graduates who are economically productive, self-sufficient, and equipped to meet the needs of business and industry.</p>
          </div>
          
          <div className="portrait-box">
            <div className="portrait-icon">🔬</div>
            <h3>Research & Development</h3>
            <p>Commitment to research, advanced studies, and progressive leadership through academic excellence and institutional advancement.</p>
          </div>
          
          <div className="portrait-box">
            <div className="portrait-icon">🚀</div>
            <h3>Excellence & Accreditation</h3>
            <p>Pursuit of academic excellence through accreditation, striving to be a center of excellence in technical and technological education.</p>
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