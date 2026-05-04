import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { courses } from "../data/courses";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDown = currentScrollY > lastScrollY;
      lastScrollY = currentScrollY;

      const portraitBoxes = document.querySelectorAll(".portrait-box");

      portraitBoxes.forEach((box) => {
        if (!box) return;

        const rect = box.getBoundingClientRect();
        const isInView =
          rect.top < window.innerHeight * 0.7 && rect.bottom > 0;

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

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHeroClick = () => {
    navigate("/");
  };

  return (
    <div>

      {/* HERO */}
      <div className="hero" onClick={handleHeroClick} style={{ cursor: "pointer" }}>
        <h1>
          Produce technologically competitive graduates by providing capability build-up responsive to the needs of industry.
        </h1>
        <h1>
          Achieve quality instruction, research, extension and production through appropriate continuing faculty development programs in Industrial Technology and Computer Technology.
        </h1>
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
            Earistians embody continuous learning and dedication to industrial and computer technology advancement.
          </p>
        </div>

        {/* PORTRAIT SECTION */}
        <h2 style={{ marginTop: "50px", marginBottom: "30px" }}>Why Choose CIT?</h2>

        <div className="portrait-grid">

          <div className="portrait-box">
            <div className="portrait-icon">🎓</div>
            <h3>Quality Technical Programs</h3>
            <p>Specialized vocational and technical programs for industry-ready graduates.</p>
          </div>

          <div className="portrait-box">
            <div className="portrait-icon">👨‍🏫</div>
            <h3>Faculty Development</h3>
            <p>Continuously trained educators ensuring modern and quality instruction.</p>
          </div>

          <div className="portrait-box">
            <div className="portrait-icon">🏭</div>
            <h3>Practical Facilities</h3>
            <p>Hands-on laboratories for real-world technical training experience.</p>
          </div>

          <div className="portrait-box">
            <div className="portrait-icon">🌟</div>
            <h3>Competitive Graduates</h3>
            <p>Producing skilled professionals ready for industry demands.</p>
          </div>

          <div className="portrait-box">
            <div className="portrait-icon">🔬</div>
            <h3>Research & Development</h3>
            <p>Encouraging innovation and academic advancement.</p>
          </div>

          <div className="portrait-box">
            <div className="portrait-icon">🚀</div>
            <h3>Excellence</h3>
            <p>Committed to becoming a center of excellence in technology education.</p>
          </div>

        </div>

        {/* FACILITIES */}
        <h2 id="facilities" style={{ marginTop: "50px", marginBottom: "30px" }}>
          Explore Our Facilities
        </h2>

        <div
          className="facilities-preview-box"
          onClick={() => navigate("/facilities")}
          style={{ cursor: "pointer" }}
        >
          <div className="facilities-preview-img">
            <img src="/asset/facilities/automotive.jpg" alt="Facilities" />
          </div>

          <div className="facilities-preview-info">
            <h3>Modern Laboratories & Workshops</h3>
            <p>State-of-the-art facilities for hands-on learning across all programs.</p>
            <button className="preview-btn">View All Facilities →</button>
          </div>
        </div>

        {/* COURSES */}
        <h2 id="courses" style={{ marginTop: "50px", marginBottom: "30px" }}>
          Our Courses
        </h2>

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