import { useState, useEffect } from 'react';
import citLogo from "../assets/citLOGO.png";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileMenuOpen(false);
    window.dispatchEvent(new CustomEvent('trigger-industrial-slot'));
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/#courses' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Faculty', path: '/faculty' },
    { name: 'Blog', path: '/blog' }
  ];

  const isActive = (path) => {
    if (path === '/#courses') return location.hash === '#courses';
    if (path === '/') return location.pathname === '/' && location.hash === '';
    return location.pathname.startsWith(path) && path !== '/';
  };

  return (
    <>
      <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <Link to="/" className="nav-logo" onClick={handleHomeClick}>
            <img src={citLogo} alt="CIT Logo" />
            <h2>COLLEGE OF INDUSTRIAL TECHNOLOGY</h2>
          </Link>

          <nav>
            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item.name}>
                  {item.path.startsWith('/#') ? (
                     <Link 
                       to="/" 
                       className={isActive(item.path) ? 'active' : ''}
                       onClick={(e) => {
                         setTimeout(() => {
                           document.getElementById(item.path.substring(2))?.scrollIntoView({ behavior: "smooth" });
                         }, 100);
                       }}
                     >
                       {item.name}
                     </Link>
                  ) : (
                    <Link 
                      to={item.path}
                      className={item.name === 'Home' ? '' : (isActive(item.path) ? 'active' : '')}
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        if (item.name === 'Home') {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                          window.dispatchEvent(new CustomEvent('trigger-industrial-slot'));
                        }
                      }}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        style={{
          position: 'fixed', 
          top: isScrolled ? '73px' : '88px', 
          left: 0, 
          width: '100%', 
          height: '100vh',
          background: 'rgba(6, 15, 26, 0.98)', 
          backdropFilter: 'blur(15px)',
          zIndex: 998, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          paddingTop: '60px', 
          gap: '30px',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          opacity: isMobileMenuOpen ? 1 : 0,
          visibility: isMobileMenuOpen ? 'visible' : 'hidden',
          transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(-20px)',
          borderTop: '1px solid var(--border-color)'
        }}
      >
         {navItems.map((item) => (
            item.path.startsWith('/#') ? (
               <Link 
                 key={item.name}
                 to="/" 
                 style={{ 
                   color: isActive(item.path) ? 'var(--secondary)' : 'var(--text-main)', 
                   textDecoration: 'none', 
                   fontSize: '1.8rem', 
                   fontWeight: 700,
                   transition: 'color 0.3s'
                 }}
                 onClick={(e) => {
                   setIsMobileMenuOpen(false);
                   setTimeout(() => {
                     document.getElementById(item.path.substring(2))?.scrollIntoView({ behavior: "smooth" });
                   }, 100);
                 }}
               >
                 {item.name}
               </Link>
            ) : (
              <Link 
                key={item.name}
                to={item.path}
                style={{ 
                  color: item.name !== 'Home' && isActive(item.path) ? 'var(--secondary)' : 'var(--text-main)', 
                  textDecoration: 'none', 
                  fontSize: '1.8rem', 
                  fontWeight: 700,
                  transition: 'color 0.3s'
                }}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  if (item.name === 'Home') {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    window.dispatchEvent(new CustomEvent('trigger-industrial-slot'));
                  }
                }}
              >
                {item.name}
              </Link>
            )
         ))}
      </div>
    </>
  );
}

export default Navbar;