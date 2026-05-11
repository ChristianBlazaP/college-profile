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
          <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: 'var(--gold)' }}>Facility Not Found</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>The facility you are looking for does not exist or has been moved.</p>
          <button className="btn btn-primary" onClick={() => navigate('/facilities')}>
            Return to Facilities
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ paddingBottom: '100px' }}>
      {/* PAGE HEADER / HERO */}
      <div style={{ 
          position: 'relative',
          paddingTop: '180px',
          paddingBottom: '80px',
          background: `linear-gradient(rgba(26, 5, 5, 0.7), rgba(26, 5, 5, 1)), url(${facility.image}) center/cover no-repeat`,
          marginBottom: '60px'
      }}>
          <div className="container animate-fade-in" style={{ position: 'relative', zIndex: 1 }}>
              <button 
                  className="btn btn-ghost" 
                  onClick={() => navigate('/facilities')}
                  style={{ marginBottom: '30px', padding: '8px 20px', fontSize: '0.9rem' }}
              >
                  ← Back to Facilities
              </button>
              <span className="section-badge" style={{ display: 'block', width: 'fit-content' }}>{facility.course}</span>
              <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white', marginBottom: '20px', textShadow: '0 4px 20px rgba(0,0,0,0.8)' }}>
                  {facility.name}
              </h1>
          </div>
      </div>

      <div className="container">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
          {/* MAIN CONTENT */}
          <div style={{ flex: '1 1 600px' }} className="animate-slide-up">
            <div className="glass-panel" style={{ padding: '50px' }}>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--gold)', marginBottom: '20px' }}>About This Facility</h3>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '40px' }}>
                {facility.description || 
                  `This is our state-of-the-art ${facility.name} equipped with modern technology and industrial-standard tools. Students gain practical hands-on experience in a professional learning environment designed to prepare them for real-world industrial applications.`}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginTop: '40px', paddingTop: '40px', borderTop: '1px solid var(--glass-border)' }}>
                <div>
                    <h4 style={{ color: 'white', marginBottom: '10px', fontSize: '1.2rem' }}>Capacity</h4>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-muted)' }}>
                        <span style={{ fontSize: '1.5rem' }}>👥</span> 30-40 Students
                    </div>
                </div>
                <div>
                    <h4 style={{ color: 'white', marginBottom: '10px', fontSize: '1.2rem' }}>Status</h4>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#10b981' }}>
                        <span style={{ fontSize: '1.5rem' }}>✓</span> Fully Operational
                    </div>
                </div>
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <div style={{ flex: '1 1 300px' }} className="animate-fade-in">
            <div className="glass-card" style={{ padding: '30px', borderTop: '4px solid var(--gold)' }}>
              <h3 style={{ fontSize: '1.4rem', color: 'white', marginBottom: '20px' }}>Learning Outcomes</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  "Mastery of industry-standard equipment and tools",
                  "Practical application of theoretical concepts",
                  "Development of technical expertise",
                  "Safety protocols and best practices"
                ].map((item, i) => (
                  <li key={i} style={{ 
                      display: 'flex', 
                      gap: '15px', 
                      marginBottom: '15px', 
                      color: 'var(--text-muted)',
                      lineHeight: 1.6
                  }}>
                    <span style={{ color: 'var(--gold)' }}>✦</span>
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