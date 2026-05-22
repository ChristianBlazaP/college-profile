import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { courses } from "../data/courses";
import bgImage from "../assets/BG.png";

// Simple hook for scroll reveal animation
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up");
            entry.target.style.opacity = 1;
            // Optionally unobserve after revealing
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal-on-scroll").forEach((el) => {
      el.style.opacity = 0; // initial state
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}

function StatCounter({ end, label, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);

  useEffect(() => {
    let startTime;
    let observer = new IntersectionObserver((entries) => {
      if(entries[0].isIntersecting) {
        let frameId;
        const animate = (timestamp) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / duration, 1);
          setCount(Math.floor(progress * end));
          if (progress < 1) {
            frameId = requestAnimationFrame(animate);
          }
        };
        frameId = requestAnimationFrame(animate);
        observer.disconnect();
      }
    });
    if(nodeRef.current) observer.observe(nodeRef.current);
    
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <div ref={nodeRef} className="stat-card glass-panel" style={{ padding: '30px 20px', textAlign: 'center' }}>
      <h2 className="text-gradient-primary" style={{ fontSize: '3.5rem', margin: '0 0 10px 0' }}>{count}+</h2>
      <p style={{ color: 'var(--text-muted)', margin: 0, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>{label}</p>
    </div>
  );
}

function Home() {
  const navigate = useNavigate();
  useScrollReveal();

  return (
    <div>
      {/* GLOBAL BACKGROUND FOR HOME ONLY */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        background: `url(${bgImage}) center/cover no-repeat`,
        backgroundAttachment: 'fixed'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.98))'
        }}></div>
      </div>

      {/* HERO SECTION */}
      <div className="hero" style={{ 
        height: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        position: 'relative',
        textAlign: 'center',
        padding: '0 24px'
      }}>
        {/* Glassy Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(15, 23, 42, 0.2)',
          backdropFilter: 'blur(8px)',
          zIndex: 0
        }}></div>
        <div style={{ maxWidth: '900px', zIndex: 1 }} className="animate-fade-in">
          <span className="section-badge" style={{ marginBottom: '24px' }}>Welcome to Earist</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '24px' }}>
            College of <span className="text-gradient-primary">Industrial Technology</span>
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: 'var(--text-muted)', marginBottom: '40px', maxWidth: '750px', margin: '0 auto 40px', lineHeight: 1.8 }}>
            Produce technologically competitive graduates by providing capability build-up responsive to the needs of industry. Building a better future with innovation and excellence.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#courses" className="btn btn-primary" style={{ textDecoration: 'none' }}>Explore Programs</a>
            <Link to="/facilities" className="btn btn-ghost" style={{ textDecoration: 'none' }}>Tour Facilities</Link>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <a href="#stats" style={{ position: 'absolute', bottom: '40px', color: 'white', textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: 0.7, animation: 'float 3s infinite ease-in-out' }}>
          <span style={{ fontSize: '0.85rem', marginBottom: '8px', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 600 }}>Scroll</span>
          <span style={{ fontSize: '1.2rem' }}>↓</span>
        </a>
      </div>

      <div className="container">
        
        {/* STATS SECTION */}
        <div id="stats" className="grid-4 section-padding reveal-on-scroll">
          <StatCounter end={10} label="Programs" />
          <StatCounter end={29} label="Expert Faculty" />
          <StatCounter end={6} label="Laboratories" />
          <StatCounter end={30} label="Years Excellence" />
        </div>

        {/* PHILOSOPHY */}
        <div className="glass-panel section-padding reveal-on-scroll" style={{ padding: '60px', marginBottom: '60px', borderLeft: '6px solid var(--primary)' }}>
          <span className="section-badge">Our Identity</span>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '24px', color: 'white' }}>Who are Earistians?</h2>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.8, margin: 0 }}>
            Earistians are proud members and graduates of the College of Industrial Technology at Eulogio "Amang" Rodriguez Institute of Science and Technology (EARIST).
            They are technologically competent professionals committed to excellence in innovation, research, and industry-responsive solutions.
            Earistians embody continuous learning and dedication to industrial and computer technology advancement.
          </p>
        </div>

        {/* GUIDING PRINCIPLES (VMG) */}
        <div className="section-padding reveal-on-scroll" style={{ paddingTop: 0, paddingBottom: '100px' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
             <span className="section-badge">Principles</span>
             <h2 className="section-title">Vision, Mission & Goals</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {/* EARIST Section */}
            <div className="glass-panel" style={{ padding: '50px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '-20px', right: '-20px', opacity: 0.03, fontSize: '15rem', pointerEvents: 'none' }}>🏛️</div>
              <h3 style={{ fontSize: '2rem', color: 'white', marginBottom: '30px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '15px' }}>
                <span style={{ color: 'var(--primary)' }}>EARIST</span> Institute
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                <div>
                  <h4 style={{ fontSize: '1.5rem', color: 'white', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ color: 'var(--primary)' }}>👁️</span> Vision <span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 400 }}>(Bisyon)</span>
                  </h4>
                  <p style={{ fontSize: '1.1rem', color: 'var(--text-main)', lineHeight: 1.7, marginBottom: '15px', fontWeight: 500 }}>
                    EARIST is envisioned to be a center of excellence in trades, business, arts, science and technology education.
                  </p>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', fontStyle: 'italic', lineHeight: 1.6 }}>
                    May pananaw ang EARIST na maging sentro ng kahusayan sa Pakikipagkalakalan, Negosyo, Sining, Siyensya at Edukasyong Panteknolohiya.
                  </p>
                </div>
                <div>
                  <h4 style={{ fontSize: '1.5rem', color: 'white', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ color: 'var(--primary)' }}>🎯</span> Mission <span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 400 }}>(Misyon)</span>
                  </h4>
                  <p style={{ fontSize: '1.1rem', color: 'var(--text-main)', lineHeight: 1.7, marginBottom: '15px', fontWeight: 500 }}>
                    Turn out vocationally, technically, technologically, and scientifically trained graduates who will be economically productive, self-sufficient, effective, responsible and disciplined citizen of the Philippines.
                  </p>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', fontStyle: 'italic', lineHeight: 1.6 }}>
                    Humuhubog ng mga nagtapos na may kahusayan sa bokasyonal, teknolohikal at maka-agham na produktibo sa larangang pangkabuhayan, may kasapatang kakayanang pansarili, mabisa, responsable, at disiplinadong mamamayan ng Pilipinas.
                  </p>
                </div>
              </div>
            </div>

            {/* CIT Section */}
            <div className="glass-panel" style={{ padding: '50px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '-20px', right: '-20px', opacity: 0.03, fontSize: '15rem', pointerEvents: 'none' }}>⚙️</div>
              <h3 style={{ fontSize: '2rem', color: 'white', marginBottom: '30px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '15px' }}>
                <span style={{ color: 'var(--primary)' }}>CIT</span> Department
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                <div>
                  <h4 style={{ fontSize: '1.5rem', color: 'white', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ color: 'var(--primary)' }}>🎯</span> Mission <span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 400 }}>(Misyon)</span>
                  </h4>
                  <p style={{ fontSize: '1.1rem', color: 'var(--text-main)', lineHeight: 1.7, marginBottom: '15px', fontWeight: 500 }}>
                    To turn out technically and technologically self-sufficient and disciplined graduates capable of contributing to the economic development of the country either as hired workers or entrepreneurs through its programs.
                  </p>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', fontStyle: 'italic', lineHeight: 1.6 }}>
                    Lumikha ng mga magsisipagtapos na disiplinado at may kakayanang teknikal at teknolohikal na makapag-aambag sa pagpapaunlad ng ekonomiya ng bansa bilang mga manggagawa o negosyante sa pamamagitan ng mga inihaing programa.
                  </p>
                </div>
                <div>
                  <h4 style={{ fontSize: '1.5rem', color: 'white', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ color: 'var(--primary)' }}>⭐</span> Goal <span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 400 }}>(Layunin)</span>
                  </h4>
                  <p style={{ fontSize: '1.1rem', color: 'var(--text-main)', lineHeight: 1.7, marginBottom: '15px', fontWeight: 500 }}>
                    Provide appropriate professional, technical and technological instruction and training in Industrial and Computer Technology and promote research, extension, production and entrepreneurship.
                  </p>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', fontStyle: 'italic', lineHeight: 1.6 }}>
                    Makapagbigay ng naaangkop na propesyunal, teknikal at teknolohikal na instruksyon at pagsasanay sa Teknolohiyang pang-Industriya at teknolohiyang pang-Kompyuter at itaguyod ang pananaliksik at pagnenegosyo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PORTRAIT SECTION / WHY CHOOSE US */}
        <div className="section-padding reveal-on-scroll" style={{ paddingTop: 0 }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
             <span className="section-badge">Features</span>
             <h2 className="section-title">Why Choose CIT?</h2>
          </div>

          <div className="grid-3">
            {[
              { icon: '🎓', title: 'Quality Technical Programs', desc: 'Specialized vocational and technical programs for industry-ready graduates.' },
              { icon: '👨‍🏫', title: 'Faculty Development', desc: 'Continuously trained educators ensuring modern and quality instruction.' },
              { icon: '🏭', title: 'Practical Facilities', desc: 'Hands-on laboratories for real-world technical training experience.' },
              { icon: '🌟', title: 'Competitive Graduates', desc: 'Producing skilled professionals ready for industry demands.' },
              { icon: '🔬', title: 'Research & Development', desc: 'Encouraging innovation and academic advancement.' },
              { icon: '🚀', title: 'Excellence', desc: 'Committed to becoming a center of excellence in technology education.' }
            ].map((item, i) => (
              <div key={i} className="glass-card reveal-on-scroll" style={{ padding: '40px 30px', textAlign: 'center', animationDelay: `${i * 0.1}s` }}>
                <div style={{ fontSize: '3.5rem', marginBottom: '20px', textShadow: '0 0 20px rgba(255,192,0,0.3)' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '16px', color: 'white' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FACILITIES PREVIEW */}
        <div id="facilities" className="section-padding reveal-on-scroll" style={{ paddingTop: 0 }}>
           <div className="glass-card" style={{ display: 'flex', flexWrap: 'wrap', overflow: 'hidden' }}>
              <div style={{ flex: '1 1 400px', minHeight: '400px', position: 'relative' }}>
                 <img src="/asset/facilities/automotive.jpg" alt="Modern Facilities" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
              </div>
              <div style={{ flex: '1 1 400px', padding: '60px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                 <span className="section-badge" style={{ alignSelf: 'flex-start' }}>Campus</span>
                 <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: 'white' }}>Explore Our Facilities</h2>
                 <p style={{ color: 'var(--text-muted)', marginBottom: '40px', fontSize: '1.1rem', lineHeight: 1.8 }}>
                   State-of-the-art laboratories and workshops designed to give you hands-on experience with industry-standard equipment across all our programs.
                 </p>
                 <button onClick={() => navigate("/facilities")} className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>View All Facilities</button>
              </div>
           </div>
        </div>

        {/* COURSES */}
        <div id="courses" className="section-padding reveal-on-scroll" style={{ paddingTop: 0 }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
             <span className="section-badge">Academics</span>
             <h2 className="section-title">Our Programs</h2>
          </div>

          <div className="grid-3">
            {courses.map((course, index) => (
              <Link key={index} to={`/course/${encodeURIComponent(course.name)}`} className="glass-card reveal-on-scroll" style={{ padding: '35px', textDecoration: 'none', display: 'flex', flexDirection: 'column', height: '100%', animationDelay: `${index * 0.1}s` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '25px' }}>
                  <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: 'rgba(14, 165, 233, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', color: 'var(--primary)', border: '1px solid rgba(14, 165, 233, 0.2)' }}>
                     {['💻','🔌','🔧','🍳','👗'][index % 5]} 
                  </div>
                  <h3 style={{ color: 'white', fontSize: '1.25rem', margin: 0, flex: 1, lineHeight: 1.4 }}>{course.name}</h3>
                </div>
                <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', color: 'var(--primary)', fontWeight: 600, fontSize: '0.95rem' }}>
                  View Program Details <span style={{ marginLeft: '10px', fontSize: '1.2rem' }}>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;