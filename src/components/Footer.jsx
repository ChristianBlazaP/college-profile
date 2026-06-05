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
        background: 'linear-gradient(to bottom, transparent, rgba(11, 26, 48, 0.45))',
        borderTop: '1px solid var(--border-color)',
        paddingTop: '60px',
        position: 'relative'
    }}>
      <div className="container">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', marginBottom: '60px' }}>
          
          {/* About Section */}
          <div style={{ flex: '2 1 300px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
              <img src={eLogo} alt="EARIST Logo" style={{ width: '60px', height: '60px', objectFit: 'contain', borderRadius: '50%', backgroundColor: 'transparent' }} />
              <img src={citLogo} alt="CIT Logo" style={{ width: '60px', height: '60px', objectFit: 'contain', borderRadius: '50%', backgroundColor: 'transparent' }} />
              <div>
                <h4 style={{ color: 'white', fontSize: '1.2rem', margin: 0, fontFamily: 'Outfit' }}>College of Industrial Technology</h4>
                <p style={{ color: 'var(--secondary)', fontSize: '0.85rem', margin: 0, fontWeight: 700, letterSpacing: '1px' }}>EARIST</p>
              </div>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, maxWidth: '400px' }}>
              Committed to excellence in technical education, producing highly skilled and competitive professionals.
            </p>
            <div style={{ marginTop: '15px' }}>
              <p style={{ color: 'var(--secondary)', fontSize: '0.85rem', margin: '5px 0', fontWeight: 600 }}>📞 PHONE</p>
              <a href="tel:+6328243946" style={{ color: 'var(--text-muted)', fontSize: '0.95rem', textDecoration: 'none', transition: 'var(--transition)' }} className="footer-link">(028) 243-9467</a>
            </div>
          </div>

          {/* Social Links */}
          <div style={{ flex: '1 1 180px' }}>
            <h4 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '20px', fontFamily: 'Outfit' }}>Follow Us</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <a href="https://web.facebook.com/EARISTOfficial" target="_blank" rel="noopener noreferrer" style={{ width: '35px', height: '35px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: 'white', transition: 'var(--transition)', fontSize: '1.2rem', fontWeight: 'bold' }} className="social-btn">f</a>
                <div>
                  <p style={{ color: 'var(--secondary)', fontSize: '0.8rem', margin: '0 0 2px 0', fontWeight: 600 }}>FACEBOOK</p>
                  <a href="https://web.facebook.com/EARISTOfficial" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', fontSize: '0.75rem', textDecoration: 'none', transition: 'var(--transition)' }} className="footer-link">EARISTOfficial</a>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <a href="https://www.instagram.com/earistofficial/" target="_blank" rel="noopener noreferrer" style={{ width: '35px', height: '35px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: 'white', transition: 'var(--transition)', fontSize: '1rem' }} className="social-btn">📷</a>
                <div>
                  <p style={{ color: 'var(--secondary)', fontSize: '0.8rem', margin: '0 0 2px 0', fontWeight: 600 }}>INSTAGRAM</p>
                  <a href="https://www.instagram.com/earistofficial/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', fontSize: '0.75rem', textDecoration: 'none', transition: 'var(--transition)' }} className="footer-link">@earistofficial</a>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <a href="https://mail.google.com/mail/u/0/#search/earistofficial1945%40gmail.com?compose=new" target="_blank" rel="noopener noreferrer" style={{ width: '35px', height: '35px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: 'white', transition: 'var(--transition)', fontSize: '1.2rem' }} className="social-btn">✉️</a>
                <div>
                  <p style={{ color: 'var(--secondary)', fontSize: '0.8rem', margin: '0 0 2px 0', fontWeight: 600 }}>EMAIL</p>
                  <a href="https://mail.google.com/mail/u/0/#search/earistofficial1945%40gmail.com?compose=new" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', fontSize: '0.75rem', textDecoration: 'none', wordBreak: 'break-all', transition: 'var(--transition)' }} className="footer-link">earistofficial1945@gmail.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div style={{ flex: '1 1 150px' }}>
            <h4 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '20px', fontFamily: 'Outfit' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><Link to="/" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'var(--transition)' }} className="footer-link">Home</Link></li>
              <li><Link to="/facilities" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'var(--transition)' }} className="footer-link">Facilities</Link></li>
              <li><Link to="/faculty" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'var(--transition)' }} className="footer-link">Faculty</Link></li>
              <li><Link to="/blog" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'var(--transition)' }} className="footer-link">News & Updates</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div style={{ flex: '1 1 200px' }}>
            <h4 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '20px', fontFamily: 'Outfit' }}>Top Programs</h4>
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
          <p style={{ color: 'rgba(251, 251, 242, 0.6)', margin: 0, fontSize: '0.85rem' }}>&copy; 2026 EULOGIO "AMANG" RODRIGUEZ INSTITUTE OF SCIENCE AND TECHNOLOGY</p>
          <p style={{ color: 'rgba(251, 251, 242, 0.4)', margin: 0, fontSize: '0.8rem' }}>College of Industrial Technology</p>
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
