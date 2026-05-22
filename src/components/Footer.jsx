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
    <footer style={{ 
        background: 'linear-gradient(to bottom, transparent, rgba(79, 70, 229, 0.1))',
        borderTop: '1px solid var(--glass-border)',
        paddingTop: '60px',
        position: 'relative'
    }}>
      <div className="container">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', marginBottom: '60px' }}>
          
          {/* About Section */}
          <div style={{ flex: '2 1 300px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
              <img src={eLogo} alt="EARIST Logo" style={{ height: '60px', objectFit: 'contain' }} />
              <img src={citLogo} alt="CIT Logo" style={{ height: '60px', objectFit: 'contain', transform: 'skewY(-5deg)' }} />
              <div>
                <h4 style={{ color: 'white', fontSize: '1.2rem', margin: 0 }}>College of Industrial Technology</h4>
                <p style={{ color: 'var(--primary)', fontSize: '0.85rem', margin: 0 }}>EARIST</p>
              </div>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, maxWidth: '400px' }}>
              Committed to excellence in technical education, producing highly skilled and competitive professionals.
            </p>
            <div style={{ marginTop: '15px' }}>
              <p style={{ color: 'var(--primary)', fontSize: '0.85rem', margin: '5px 0', fontWeight: 600 }}>📞 PHONE</p>
              <a href="tel:+6328243946" style={{ color: 'var(--text-muted)', fontSize: '0.95rem', textDecoration: 'none', transition: 'var(--transition)' }} className="footer-link">(028) 243-9467</a>
            </div>
          </div>

          {/* Social Links */}
          <div style={{ flex: '1 1 180px' }}>
            <h4 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '20px' }}>Follow Us</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <a href="https://web.facebook.com/EARISTOfficial" target="_blank" rel="noopener noreferrer" style={{ width: '35px', height: '35px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: 'white', transition: 'var(--transition)', fontSize: '1.2rem', fontWeight: 'bold' }} className="social-btn">f</a>
                <div>
                  <p style={{ color: 'var(--primary)', fontSize: '0.8rem', margin: '0 0 2px 0', fontWeight: 600 }}>FACEBOOK</p>
                  <a href="https://web.facebook.com/EARISTOfficial" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', fontSize: '0.75rem', textDecoration: 'none', transition: 'var(--transition)' }} className="footer-link">EARISTOfficial</a>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <a href="https://www.instagram.com/earistofficial/" target="_blank" rel="noopener noreferrer" style={{ width: '35px', height: '35px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: 'white', transition: 'var(--transition)', fontSize: '1rem' }} className="social-btn">📷</a>
                <div>
                  <p style={{ color: 'var(--primary)', fontSize: '0.8rem', margin: '0 0 2px 0', fontWeight: 600 }}>INSTAGRAM</p>
                  <a href="https://www.instagram.com/earistofficial/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', fontSize: '0.75rem', textDecoration: 'none', transition: 'var(--transition)' }} className="footer-link">@earistofficial</a>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <a href="mailto:earistofficial1945@gmail.com" style={{ width: '35px', height: '35px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: 'white', transition: 'var(--transition)', fontSize: '1.2rem' }} className="social-btn">✉️</a>
                <div>
                  <p style={{ color: 'var(--primary)', fontSize: '0.8rem', margin: '0 0 2px 0', fontWeight: 600 }}>EMAIL</p>
                  <a href="mailto:earistofficial1945@gmail.com" style={{ color: 'var(--text-muted)', fontSize: '0.75rem', textDecoration: 'none', wordBreak: 'break-all', transition: 'var(--transition)' }} className="footer-link">earistofficial1945@gmail.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div style={{ flex: '1 1 150px' }}>
            <h4 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '20px' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><Link to="/" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'var(--transition)' }} className="footer-link">Home</Link></li>
              <li><Link to="/facilities" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'var(--transition)' }} className="footer-link">Facilities</Link></li>
              <li><Link to="/faculty" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'var(--transition)' }} className="footer-link">Faculty</Link></li>
              <li><Link to="/blog" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'var(--transition)' }} className="footer-link">News & Updates</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div style={{ flex: '1 1 200px' }}>
            <h4 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '20px' }}>Top Programs</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><Link to="/course/Automotive%20Technology" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'var(--transition)' }} className="footer-link">Automotive Technology</Link></li>
              <li><Link to="/course/Mechanical%20Technology" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'var(--transition)' }} className="footer-link">Mechanical Technology</Link></li>
              <li><Link to="/course/Electrical%20Technology" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'var(--transition)' }} className="footer-link">Electrical Technology</Link></li>
              <li><Link to="/course/Electronics%20Technology" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'var(--transition)' }} className="footer-link">Electronics Technology</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div style={{ 
            borderTop: '1px solid var(--glass-border)', 
            padding: '20px 0', 
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            gap: '5px'
        }}>
          <p style={{ color: 'rgba(255,255,255,0.6)', margin: 0, fontSize: '0.85rem' }}>&copy; 2026 EULOGIO "AMANG" RODRIGUEZ INSTITUTE OF SCIENCE AND TECHNOLOGY</p>
          <p style={{ color: 'rgba(255,255,255,0.4)', margin: 0, fontSize: '0.8rem' }}>College of Industrial Technology</p>
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
            background: 'var(--primary)',
            color: 'var(--dark)',
            border: 'none',
            fontSize: '1.2rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 15px rgba(255,192,0,0.4)',
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
        .footer-link:hover { color: var(--primary) !important; padding-left: 5px; }
        .social-btn:hover { background: var(--primary) !important; color: var(--dark) !important; transform: translateY(-3px); }
      `}</style>
    </footer>
  );
}

export default Footer;
