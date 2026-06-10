import { Link } from "react-router-dom";
import citLogo from "../assets/citLOGO.png";
import eLogo from "../assets/Elogo.png";
import { useEffect, useState } from "react";

function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer>
      <div className="container" style={{ paddingTop: '60px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '50px', marginBottom: '60px', alignItems: 'flex-start' }}>
          
          {/* About Section */}
          <div style={{ flex: '2 1 320px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '28px' }}>
              <div style={{ display: 'flex', gap: '10px' }}>
                <img src={eLogo} alt="EARIST Logo" style={{ width: '55px', height: '55px', objectFit: 'contain', borderRadius: '8px' }} />
                <img src={citLogo} alt="CIT Logo" style={{ width: '55px', height: '55px', objectFit: 'contain', borderRadius: '8px' }} />
              </div>
              <div>
                <h4 style={{ color: 'var(--text-main)', fontSize: '1.1rem', margin: 0, marginBottom: '4px', fontFamily: 'Outfit', fontWeight: 900, letterSpacing: '-0.3px' }}>College of Industrial Technology</h4>
                <p style={{ color: 'var(--secondary)', fontSize: '0.75rem', margin: 0, fontWeight: 800, letterSpacing: '1.2px', textTransform: 'uppercase' }}>EARIST</p>
              </div>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.8, maxWidth: '420px', fontWeight: 500, letterSpacing: '0.15px', marginBottom: '24px' }}>
              Committed to excellence in technical education, producing highly skilled and competitive professionals.
            </p>
            <div style={{ marginTop: '0' }}>
              <p style={{ color: 'var(--secondary)', fontSize: '0.75rem', margin: '0 0 10px 0', fontWeight: 800, letterSpacing: '1.2px', textTransform: 'uppercase' }}>📞 Phone</p>
              <a href="tel:+6328243946" style={{ color: 'var(--text-muted)', fontSize: '0.95rem', textDecoration: 'none', transition: 'var(--transition)', border: 'none', fontWeight: 600, letterSpacing: '0.15px' }} className="footer-link" onMouseEnter={(e) => e.target.style.color = 'var(--secondary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'} >(028) 243-9467</a>
            </div>
          </div>

          {/* Social Links */}
          <div style={{ flex: '1 1 200px' }}>
            <h4 style={{ color: 'var(--text-main)', fontSize: '1.2rem', marginBottom: '28px', fontFamily: 'Outfit', fontWeight: 900, letterSpacing: '-0.5px' }}>Follow Us</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <a href="https://web.facebook.com/EARISTOfficial" target="_blank" rel="noopener noreferrer" style={{ width: '42px', height: '42px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: 'var(--secondary)', transition: 'var(--transition)', fontSize: '1.2rem', fontWeight: 'bold', border: '1.5px solid var(--secondary)' }} className="social-btn" onMouseEnter={(e) => {e.target.style.color = 'var(--dark)';}} onMouseLeave={(e) => {e.target.style.color = 'var(--secondary)';}}>f</a>
                <div>
                  <p style={{ color: 'var(--secondary)', fontSize: '0.9rem', margin: '0 0 6px 0', fontWeight: 900, letterSpacing: '1px', textTransform: 'uppercase' }}>Facebook</p>
                  <a href="https://web.facebook.com/EARISTOfficial" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', fontSize: '0.95rem', textDecoration: 'none', transition: 'var(--transition)', border: 'none', fontWeight: 600 }} className="footer-link" onMouseEnter={(e) => e.target.style.color = 'var(--secondary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>EARISTOfficial</a>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <a href="https://www.instagram.com/earistofficial/" target="_blank" rel="noopener noreferrer" style={{ width: '42px', height: '42px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: 'var(--secondary)', transition: 'var(--transition)', fontSize: '1.2rem', border: '1.5px solid var(--secondary)' }} className="social-btn" onMouseEnter={(e) => {e.target.style.color = 'var(--dark)';}} onMouseLeave={(e) => {e.target.style.color = 'var(--secondary)';}}>📷</a>
                <div>
                  <p style={{ color: 'var(--secondary)', fontSize: '0.9rem', margin: '0 0 6px 0', fontWeight: 900, letterSpacing: '1px', textTransform: 'uppercase' }}>Instagram</p>
                  <a href="https://www.instagram.com/earistofficial/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', fontSize: '0.95rem', textDecoration: 'none', transition: 'var(--transition)', border: 'none', fontWeight: 600 }} className="footer-link" onMouseEnter={(e) => e.target.style.color = 'var(--secondary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>@earistofficial</a>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <a href="https://mail.google.com/mail/u/0/#search/earistofficial1945%40gmail.com?compose=new" target="_blank" rel="noopener noreferrer" style={{ width: '42px', height: '42px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: 'var(--secondary)', transition: 'var(--transition)', fontSize: '1.2rem', border: '1.5px solid var(--secondary)' }} className="social-btn" onMouseEnter={(e) => {e.target.style.color = 'var(--dark)';}} onMouseLeave={(e) => {e.target.style.color = 'var(--secondary)';}}>✉️</a>
                <div>
                  <p style={{ color: 'var(--secondary)', fontSize: '0.9rem', margin: '0 0 6px 0', fontWeight: 900, letterSpacing: '1px', textTransform: 'uppercase' }}>Email</p>
                  <a href="https://mail.google.com/mail/u/0/#search/earistofficial1945%40gmail.com?compose=new" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', fontSize: '0.95rem', textDecoration: 'none', wordBreak: 'break-all', transition: 'var(--transition)', border: 'none', fontWeight: 600 }} className="footer-link" onMouseEnter={(e) => e.target.style.color = 'var(--secondary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>earistofficial1945@gmail.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div style={{ flex: '1 1 180px' }}>
            <h4 style={{ color: 'var(--text-main)', fontSize: '1.2rem', marginBottom: '28px', fontFamily: 'Outfit', fontWeight: 900, letterSpacing: '-0.5px' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <li><Link to="/" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'var(--transition)', border: 'none', fontWeight: 600, fontSize: '0.95rem' }} className="footer-link" onMouseEnter={(e) => e.target.style.color = 'var(--secondary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>Home</Link></li>
              <li><Link to="/facilities" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'var(--transition)', border: 'none', fontWeight: 600, fontSize: '0.95rem' }} className="footer-link" onMouseEnter={(e) => e.target.style.color = 'var(--secondary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>Facilities</Link></li>
              <li><Link to="/faculty" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'var(--transition)', border: 'none', fontWeight: 600, fontSize: '0.95rem' }} className="footer-link" onMouseEnter={(e) => e.target.style.color = 'var(--secondary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>Faculty</Link></li>
              <li><Link to="/blog" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'var(--transition)', border: 'none', fontWeight: 600, fontSize: '0.95rem' }} className="footer-link" onMouseEnter={(e) => e.target.style.color = 'var(--secondary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>News & Updates</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div style={{ flex: '1 1 220px' }}>
            <h4 style={{ color: 'var(--text-main)', fontSize: '1.2rem', marginBottom: '28px', fontFamily: 'Outfit', fontWeight: 900, letterSpacing: '-0.5px' }}>Top Programs</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <li><Link to="/course/Automotive%20Technology" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'var(--transition)', border: 'none', fontWeight: 600, fontSize: '0.95rem' }} className="footer-link" onMouseEnter={(e) => e.target.style.color = 'var(--secondary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>Automotive Technology</Link></li>
              <li><Link to="/course/Mechanical%20Technology" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'var(--transition)', border: 'none', fontWeight: 600, fontSize: '0.95rem' }} className="footer-link" onMouseEnter={(e) => e.target.style.color = 'var(--secondary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>Mechanical Technology</Link></li>
              <li><Link to="/course/Electrical%20Technology" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'var(--transition)', border: 'none', fontWeight: 600, fontSize: '0.95rem' }} className="footer-link" onMouseEnter={(e) => e.target.style.color = 'var(--secondary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>Electrical Technology</Link></li>
              <li><Link to="/course/Electronics%20Technology" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'var(--transition)', border: 'none', fontWeight: 600, fontSize: '0.95rem' }} className="footer-link" onMouseEnter={(e) => e.target.style.color = 'var(--secondary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>Electronics Technology</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div style={{ 
            borderTop: '1px solid var(--border-color)', 
            padding: '40px 0 30px 0', 
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
          {/* Copyright Section - Centered */}
          <div style={{ textAlign: 'center', width: '100%', maxWidth: '800px' }}>
            <p style={{ color: 'rgba(251, 251, 242, 0.65)', margin: 0, fontSize: '0.95rem', fontWeight: 600, letterSpacing: '0.2px', lineHeight: 1.6 }}>&copy; 2026 EULOGIO "AMANG" RODRIGUEZ INSTITUTE OF SCIENCE AND TECHNOLOGY</p>
          </div>
          <p style={{ color: 'rgba(251, 251, 242, 0.45)', margin: 0, fontSize: '0.85rem', fontWeight: 500, letterSpacing: '0.15px' }}>College of Industrial Technology</p>
        </div>
      </div>

      {/* Scroll to Top */}
      <button 
        onClick={scrollToTop}
        style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            width: '45px',
            height: '45px',
            borderRadius: '50%',
            background: 'var(--secondary)',
            color: 'var(--dark)',
            border: 'none',
            fontSize: '1.2rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 15px rgba(247, 182, 56, 0.4)',
            opacity: showScrollTop ? 1 : 0,
            visibility: showScrollTop ? 'visible' : 'hidden',
            transform: showScrollTop ? 'translateY(0)' : 'translateY(20px)',
            transition: 'var(--transition)',
            zIndex: 99
        }}
      >
        ↑
      </button>

      <style>{`
        .footer-link {
          transition: var(--transition);
        }
        .footer-link:hover { 
          color: var(--secondary) !important; 
          padding-left: 5px; 
        }
        .social-btn {
          transition: var(--transition);
        }
        .social-btn:hover { 
          background: var(--secondary) !important; 
          color: var(--dark) !important; 
          transform: translateY(-3px); 
        }
      `}</style>
    </footer>
  );
}

export default Footer;
