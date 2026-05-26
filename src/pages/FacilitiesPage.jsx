import { useParams, useNavigate } from "react-router-dom";
import { facilityLabsData } from "../data/facilityLabsData";
import { useEffect } from "react";

function FacilitiesDetailPage() {
  const { name } = useParams();
  const navigate = useNavigate();

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const facility = facilityLabsData.find(
    (f) => f.path === `/facilities/${name}`
  );

  if (!facility) {
    return (
      <div className="container" style={{ paddingTop: '150px', textAlign: 'center', minHeight: '60vh' }}>
        <div className="glass-panel" style={{ padding: '60px', maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: 'var(--secondary)', fontFamily: 'Outfit' }}>Facility Not Found</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>The facility you are looking for does not exist or has been moved.</p>
          <button className="btn btn-primary" onClick={() => navigate('/facilities')}>
            Return to Facilities
          </button>
        </div>
      </div>
    );
  }

  const facilityDescriptions = {
    "automotive": "Our modern Automotive Technology Laboratory features computer-based engine analyzers, advanced hydraulic diagnostic boards, transmission diagnostics equipment, and physical components representing both modern combustion engines and green electric/hybrid vehicles. It offers students authentic vocational practice aligned with global automotive maintenance benchmarks.",
    "mechanical": "Equipped with manual precision milling machinery, lathe tooling systems, welding chambers, and advanced digital CAD/CAM machining interfaces, the Mechanical Engineering Laboratory provides industrial-grade machining practices, tooling setups, and mechanical assembly procedures.",
    "electrical": "The Electrical Technology Laboratory features comprehensive circuit analyzer boards, commercial transformer modules, motor controllers, industrial electrical panels, and physical installations designed to teach industrial safety wiring, electrical blueprint design, and power distribution diagnostics in residential and commercial grids.",
    "electronics": "Our high-tech Electronics Technology Laboratory features advanced oscilloscope diagnostic stations, circuit design kits, microcontroller program boards, and professional soldering systems. Students design, compile, and troubleshoot embedded systems, digital circuits, and IoT technologies.",
    "drafting": "Featuring ergonomic drafting tables alongside modern graphic compute systems equipped with standard AutoCAD, SolidWorks, and BIM modeling software, the Drafting and Design Studio serves as CIT's primary blueprint engineering, spatial rendering, and architectural documentation workstation.",
    "computer": "Equipped with enterprise-grade server rigs, modern network routers and switchboards, database environments, and professional developer compute hubs, the Computer Technology Laboratory provides industry-modeled environments for network engineering, cloud configuration, and software design."
  };

  const detailedDescription = facilityDescriptions[name] || facility.description || `This is our state-of-the-art ${facility.name} equipped with modern technology and industrial-standard tools. Students gain practical hands-on experience in a professional learning environment designed to prepare them for real-world industrial applications.`;

  return (
    <div style={{ paddingBottom: '100px' }}>
      {/* PAGE HEADER / HERO */}
      <div style={{ 
          position: 'relative',
          paddingTop: '180px',
          paddingBottom: '80px',
          background: `linear-gradient(rgba(25, 23, 22, 0.75), rgba(25, 23, 22, 1)), url(${facility.image}) center/cover no-repeat`,
          marginBottom: '60px'
      }}>
          <div className="container animate-fade-in" style={{ position: 'relative', zIndex: 1 }}>
              <button 
                  className="btn btn-ghost" 
                  onClick={() => navigate('/facilities')}
                  style={{ marginBottom: '30px', padding: '8px 20px', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}
              >
                  ← Back to Facilities
              </button>
              <span className="section-badge" style={{ display: 'block', width: 'fit-content' }}>{facility.course}</span>
              <h1 style={{ fontSize: 'clamp(2.3rem, 5vw, 3.8rem)', color: 'white', marginBottom: '20px', textShadow: '0 4px 20px rgba(0,0,0,0.8)', fontFamily: 'Outfit', fontWeight: 800 }}>
                  {facility.name}
              </h1>
          </div>
      </div>

      <div className="container">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
          {/* MAIN CONTENT */}
          <div style={{ flex: '1 1 600px' }} className="animate-slide-up">
            <div className="glass-panel" style={{ padding: '50px', borderLeft: '4px solid var(--primary)' }}>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--secondary)', marginBottom: '20px', fontFamily: 'Outfit', fontWeight: 800 }}>About This Facility</h3>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '40px' }}>
                {detailedDescription}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginTop: '40px', paddingTop: '40px', borderTop: '1px solid var(--glass-border)' }}>
                <div>
                    <h4 style={{ color: 'white', marginBottom: '10px', fontSize: '1.2rem', fontFamily: 'Outfit' }}>Capacity</h4>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-muted)', fontWeight: 600 }}>
                        <span style={{ fontSize: '1.5rem' }}>👥</span> 30-40 Students
                    </div>
                </div>
                <div>
                    <h4 style={{ color: 'white', marginBottom: '10px', fontSize: '1.2rem', fontFamily: 'Outfit' }}>Status</h4>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#4ade80', fontWeight: 700 }}>
                        <span style={{ fontSize: '1.5rem' }}>✓</span> Fully Operational
                    </div>
                </div>
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <div style={{ flex: '1 1 300px' }} className="animate-fade-in">
            <div className="glass-card" style={{ padding: '30px', borderTop: '4px solid var(--secondary)' }}>
              <h3 style={{ fontSize: '1.4rem', color: 'white', marginBottom: '20px', fontFamily: 'Outfit', fontWeight: 700 }}>Learning Outcomes</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  "Mastery of industry-standard equipment and digital diagnostic tools",
                  "Practical integration of theoretical and structural technology concepts",
                  "Development of advanced technical capabilities and safety practices",
                  "Adherence to industry workplace protocols and safety regulations"
                ].map((item, i) => (
                  <li key={i} style={{ 
                      display: 'flex', 
                      gap: '15px', 
                      marginBottom: '18px', 
                      color: 'var(--text-muted)',
                      lineHeight: 1.6,
                      fontSize: '0.95rem'
                  }}>
                    <span style={{ color: 'var(--secondary)', fontWeight: 'bold' }}>✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FacilitiesDetailPage;