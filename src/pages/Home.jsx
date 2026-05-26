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
    <div ref={nodeRef} className="stat-card glass-panel" style={{ padding: '35px 20px', textAlign: 'center', borderTop: '4px solid var(--secondary)' }}>
      <h2 className="text-gradient-primary" style={{ fontSize: '3.8rem', margin: '0 0 10px 0', fontWeight: 900 }}>{count}+</h2>
      <p style={{ color: 'var(--text-main)', margin: 0, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem' }}>{label}</p>
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
          background: 'linear-gradient(to bottom, rgba(25, 23, 22, 0.8), rgba(25, 23, 22, 0.98))'
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
          background: 'rgba(25, 23, 22, 0.35)',
          backdropFilter: 'blur(8px)',
          zIndex: 0
        }}></div>
        <div style={{ maxWidth: '950px', zIndex: 1 }} className="animate-fade-in">
          <span className="section-badge" style={{ marginBottom: '24px' }}>Welcome to EARIST</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '24px', fontWeight: 900 }}>
            College of <span className="text-gradient-primary">Industrial Technology</span>
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: 'var(--text-muted)', marginBottom: '40px', maxWidth: '780px', margin: '0 auto 40px', lineHeight: 1.8 }}>
            Produce technologically competitive graduates by providing capability build-up responsive to the needs of industry. Building a better future with academic innovation, trust, and professional excellence.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#courses" className="btn btn-primary" style={{ textDecoration: 'none' }}>Explore Programs</a>
            <Link to="/facilities" className="btn btn-ghost" style={{ textDecoration: 'none' }}>Tour Facilities</Link>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <a href="#stats" style={{ position: 'absolute', bottom: '40px', color: 'var(--secondary)', textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: 0.8, animation: 'float 3s infinite ease-in-out' }}>
          <span style={{ fontSize: '0.8rem', marginBottom: '8px', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 700 }}>Scroll</span>
          <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>↓</span>
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

        {/* PHILOSOPHY / IDENTITY */}
        <div className="glass-panel section-padding reveal-on-scroll" style={{ padding: '60px', marginBottom: '80px', borderLeft: '6px solid var(--secondary)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', right: '-30px', bottom: '-30px', fontSize: '14rem', opacity: 0.02, pointerEvents: 'none' }}>🎓</div>
          <span className="section-badge">Our Identity</span>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '24px', color: 'white', fontWeight: 800 }}>Who are Earistians?</h2>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.8, margin: 0 }}>
            Earistians are proud members and graduates of the College of Industrial Technology at Eulogio "Amang" Rodriguez Institute of Science and Technology (EARIST).
            They are technologically competent professionals committed to excellence in innovation, research, and industry-responsive solutions.
            Earistians embody continuous learning, integrity, and dedication to industrial advancement and computer technology.
          </p>
        </div>

        {/* GUIDING PRINCIPLES (VMG) */}
        <div className="section-padding reveal-on-scroll" style={{ paddingTop: 0, paddingBottom: '80px' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
             <span className="section-badge">Principles</span>
             <h2 className="section-title">Vision, Mission & Goals</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {/* EARIST Section */}
            <div className="glass-panel" style={{ padding: '50px', position: 'relative', overflow: 'hidden', borderLeft: '4px solid var(--primary)' }}>
              <div style={{ position: 'absolute', top: '-20px', right: '-20px', opacity: 0.02, fontSize: '15rem', pointerEvents: 'none' }}>🏛️</div>
              <h3 style={{ fontSize: '2.2rem', color: 'white', marginBottom: '30px', borderBottom: '1px solid var(--glass-border)', paddingBottom: '15px', fontWeight: 800 }}>
                <span style={{ color: 'var(--secondary)' }}>EARIST</span> Institute
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                <div>
                  <h4 style={{ fontSize: '1.5rem', color: 'white', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ color: 'var(--secondary)' }}>👁️</span> Vision <span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 400 }}>(Bisyon)</span>
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
                    <span style={{ color: 'var(--secondary)' }}>🎯</span> Mission <span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 400 }}>(Misyon)</span>
                  </h4>
                  <p style={{ fontSize: '1.1rem', color: 'var(--text-main)', lineHeight: 1.7, marginBottom: '15px', fontWeight: 500 }}>
                    Turn out vocationally, technically, technologically, and scientifically trained graduates who will be economically productive, self-sufficient, effective, responsible and disciplined citizens of the Philippines.
                  </p>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', fontStyle: 'italic', lineHeight: 1.6 }}>
                    Humuhubog ng mga nagtapos na may kahusayan sa bokasyonal, teknolohikal at maka-agham na produktibo sa larangang pangkabuhayan, may kasapatang kakayanang pansarili, mabisa, responsable, at disiplinadong mamamayan ng Pilipinas.
                  </p>
                </div>
              </div>
            </div>

            {/* CIT Section */}
            <div className="glass-panel" style={{ padding: '50px', position: 'relative', overflow: 'hidden', borderLeft: '4px solid var(--tertiary)' }}>
              <div style={{ position: 'absolute', top: '-20px', right: '-20px', opacity: 0.02, fontSize: '15rem', pointerEvents: 'none' }}>⚙️</div>
              <h3 style={{ fontSize: '2.2rem', color: 'white', marginBottom: '30px', borderBottom: '1px solid var(--glass-border)', paddingBottom: '15px', fontWeight: 800 }}>
                <span style={{ color: 'var(--secondary)' }}>CIT</span> Department
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                <div>
                  <h4 style={{ fontSize: '1.5rem', color: 'white', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ color: 'var(--secondary)' }}>🎯</span> Mission <span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 400 }}>(Misyon)</span>
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
                    <span style={{ color: 'var(--secondary)' }}>⭐</span> Goal <span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 400 }}>(Layunin)</span>
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

        {/* INSTITUTIONAL MILESTONES TIMELINE */}
        <div className="section-padding reveal-on-scroll" style={{ paddingTop: 0, paddingBottom: '100px' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
             <span className="section-badge" style={{ background: 'rgba(56, 102, 65, 0.15)', borderColor: 'var(--tertiary)' }}>Heritage</span>
             <h2 className="section-title">Academic Timeline</h2>
             <p style={{ color: 'var(--text-muted)', maxWidth: '650px', margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.8 }}>
               Over eight decades of trade education excellence, progressive technology transformation, and academic trust.
             </p>
          </div>

          <div className="timeline-container" style={{ position: 'relative', padding: '20px 0' }}>
            {/* Center Line */}
            <div style={{ 
              position: 'absolute', 
              left: '50%', 
              top: 0, 
              bottom: 0, 
              width: '4px', 
              background: 'linear-gradient(to bottom, var(--primary), var(--secondary), var(--tertiary))', 
              transform: 'translateX(-50%)',
              opacity: 0.5,
              borderRadius: '2px'
            }} className="timeline-line"></div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
              {[
                { year: "1945", title: "EARIST Founded", desc: "Established as the Eulogio 'Amang' Rodriguez Vocational High School, providing foundational vocational trades training post-WWII." },
                { year: "1982", title: "Chartered State College", desc: "Elevated to full state institution status via Republic Act 6595, expanding programs in technology and applied sciences." },
                { year: "1996", title: "CIT Department Inaugurated", desc: "Created the College of Industrial Technology to focus exclusively on pioneering modern technological education." },
                { year: "2018", title: "National Level Accreditation", desc: "Achieved level-standard professional accreditation across all technical majors and launched wide-scale industrial partnerships." },
                { year: "2026", title: "Advanced Technical Hub", desc: "Completed the construction of state-of-the-art diagnostic, electronics, and IoT computing labs to address global manufacturing and automation needs." }
              ].map((m, i) => (
                <div key={i} className="timeline-item reveal-on-scroll" style={{ 
                  display: 'flex', 
                  justifyContent: i % 2 === 0 ? 'flex-start' : 'flex-end', 
                  position: 'relative',
                  width: '100%' 
                }}>
                  {/* Circle Indicator */}
                  <div style={{ 
                    position: 'absolute', 
                    left: '50%', 
                    top: '25px', 
                    transform: 'translateX(-50%)',
                    width: '24px', 
                    height: '24px', 
                    borderRadius: '50%', 
                    background: i % 3 === 0 ? 'var(--primary)' : i % 3 === 1 ? 'var(--secondary)' : 'var(--tertiary)',
                    border: '4px solid var(--dark)',
                    boxShadow: '0 0 15px rgba(247, 182, 56, 0.5)',
                    zIndex: 2
                  }} className="timeline-circle"></div>

                  <div className="glass-card timeline-card" style={{ 
                    width: '45%', 
                    padding: '30px', 
                    borderTop: `4px solid ${i % 3 === 0 ? 'var(--primary)' : i % 3 === 1 ? 'var(--secondary)' : 'var(--tertiary)'}`,
                    position: 'relative'
                  }}>
                    <span style={{ 
                      fontSize: '1.9rem', 
                      fontWeight: 800, 
                      color: i % 3 === 0 ? '#ff5d7d' : i % 3 === 1 ? 'var(--secondary)' : '#4ade80', 
                      display: 'block', 
                      marginBottom: '8px',
                      fontFamily: 'Outfit'
                    }}>{m.year}</span>
                    <h3 style={{ color: 'white', marginBottom: '10px', fontSize: '1.25rem', fontFamily: 'Outfit', fontWeight: 700 }}>{m.title}</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* WHY CHOOSE CIT */}
        <div className="section-padding reveal-on-scroll" style={{ paddingTop: 0, paddingBottom: '80px' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
             <span className="section-badge" style={{ background: 'rgba(56, 102, 65, 0.15)', borderColor: 'var(--tertiary)' }}>Features</span>
             <h2 className="section-title">Why Choose CIT?</h2>
          </div>

          <div className="grid-3">
            {[
              { icon: '🎓', color: 'var(--primary)', title: 'Quality Technical Programs', desc: 'Accredited vocational and industrial computing programs tailored for active career paths.' },
              { icon: '👨‍🏫', color: 'var(--secondary)', title: 'Experienced Faculty', desc: 'Expert educators continuously trained to maintain high standards of academic guidance.' },
              { icon: '🏭', color: 'var(--tertiary)', title: 'Premium Learning Spaces', desc: 'Fully functional laboratories built to replicate actual work settings and operations.' },
              { icon: '🌟', color: 'var(--secondary)', title: 'Highly Adaptable Graduates', desc: 'Equipping students with in-demand skills recognized by manufacturing and software industries.' },
              { icon: '🔬', color: 'var(--primary)', title: 'Research & Applied Science', desc: 'Promoting innovative project development, safety studies, and entrepreneurship skills.' },
              { icon: '🚀', color: 'var(--tertiary)', title: 'Academic Excellence', desc: 'Dedicated to becoming a distinguished regional center for industrial science education.' }
            ].map((item, i) => (
              <div key={i} className="glass-card reveal-on-scroll" style={{ padding: '40px 30px', textAlign: 'center', borderTop: `3px solid ${item.color}` }}>
                <div style={{ fontSize: '3.5rem', marginBottom: '20px', textShadow: `0 0 20px ${item.color}55` }}>{item.icon}</div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '16px', color: 'white', fontFamily: 'Outfit' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FACILITIES PREVIEW */}
        <div id="facilities" className="section-padding reveal-on-scroll" style={{ paddingTop: 0, paddingBottom: '100px' }}>
           <div className="glass-card" style={{ display: 'flex', flexWrap: 'wrap', overflow: 'hidden', borderLeft: '4px solid var(--secondary)' }}>
              <div style={{ flex: '1 1 400px', minHeight: '400px', position: 'relative' }}>
                 <div style={{
                   position: 'absolute',
                   inset: 0,
                   background: 'linear-gradient(to right, rgba(25, 23, 22, 0.9) 20%, rgba(25, 23, 22, 0.2))',
                   zIndex: 1
                 }}></div>
                 <img src="/asset/facilities/automotive.jpg" alt="Modern Facilities" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0, zIndex: 0 }} />
              </div>
              <div style={{ flex: '1 1 400px', padding: '60px', display: 'flex', flexDirection: 'column', justifyContent: 'center', zIndex: 2 }}>
                 <span className="section-badge" style={{ alignSelf: 'flex-start' }}>Campus tour</span>
                 <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: 'white', fontWeight: 800, fontFamily: 'Outfit' }}>Explore Our Facilities</h2>
                 <p style={{ color: 'var(--text-muted)', marginBottom: '40px', fontSize: '1.1rem', lineHeight: 1.8 }}>
                   Explore advanced learning labs and specialized drafting centers built to provide comprehensive hands-on instruction using professional instruments.
                 </p>
                 <button onClick={() => navigate("/facilities")} className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>View All Facilities</button>
              </div>
           </div>
        </div>

        {/* COURSES SECTION */}
        <div id="courses" className="section-padding reveal-on-scroll" style={{ paddingTop: 0 }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
             <span className="section-badge">Academics</span>
             <h2 className="section-title">Our Programs</h2>
             <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
               Delivering specialized bachelor degrees aimed at professional capability and technical expertise.
             </p>
          </div>

          <div className="grid-3">
            {courses.map((course, index) => {
              const icons = ['💻','🔌','🔧','⚙️','📐','🏫','🍽️','💻','❄️','👗'];
              const borderColors = ['var(--primary)', 'var(--secondary)', 'var(--tertiary)', 'var(--primary)', 'var(--secondary)', 'var(--tertiary)'];
              const currentBorder = borderColors[index % 3];
              return (
                <Link key={index} to={`/course/${encodeURIComponent(course.name)}`} className="glass-card reveal-on-scroll" style={{ padding: '35px', textDecoration: 'none', display: 'flex', flexDirection: 'column', height: '100%', borderTop: `4px solid ${currentBorder}` }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '25px' }}>
                    <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: 'rgba(251, 251, 242, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', color: 'var(--secondary)', border: '1px solid rgba(251, 251, 242, 0.1)' }}>
                       {icons[index] || '⚙️'} 
                    </div>
                    <h3 style={{ color: 'white', fontSize: '1.25rem', margin: 0, flex: 1, lineHeight: 1.4, fontFamily: 'Outfit', fontWeight: 700 }}>{course.name}</h3>
                  </div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '25px' }}>
                    {course.description.substring(0, 100)}...
                  </p>
                  <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', color: 'var(--secondary)', fontWeight: 700, fontSize: '0.95rem', letterSpacing: '0.5px' }}>
                    View Program Details <span style={{ marginLeft: '10px', fontSize: '1.2rem', transition: 'transform 0.3s' }} className="arrow">→</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

      </div>

      <style>{`
        .timeline-container {
          position: relative;
        }
        @media (max-width: 768px) {
          .timeline-line {
            left: 20px !important;
            transform: none !important;
          }
          .timeline-item {
            justify-content: flex-start !important;
            padding-left: 45px !important;
            width: 100% !important;
          }
          .timeline-circle {
            left: 20px !important;
            transform: translateX(-50%) !important;
          }
          .timeline-card {
            width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
}

export default Home;