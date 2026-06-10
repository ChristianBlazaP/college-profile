import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: '20px',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, rgba(11, 26, 48, 0.8), rgba(8, 18, 34, 0.8))'
    }}>
      
      {/* Animated Background Elements */}
      <div style={{ position: 'absolute', top: '10%', right: '5%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(212, 175, 55, 0.15), transparent)', borderRadius: '50%', animation: 'float 6s infinite ease-in-out' }}></div>
      <div style={{ position: 'absolute', bottom: '10%', left: '5%', width: '250px', height: '250px', background: 'radial-gradient(circle, rgba(22, 54, 99, 0.15), transparent)', borderRadius: '50%', animation: 'float 8s infinite ease-in-out 1s' }}></div>

      {/* Main Content */}
      <div className="glass-panel animate-slide-up" style={{ padding: '60px 50px', maxWidth: '750px', width: '100%', textAlign: 'center', position: 'relative', zIndex: 1, borderTop: '4px solid var(--secondary)', overflow: 'hidden' }}>
        
        {/* Decorative Elements */}
        <div style={{ position: 'absolute', top: '-50px', right: '-50px', fontSize: '20rem', opacity: 0.02, fontWeight: 900, pointerEvents: 'none', userSelect: 'none' }}>404</div>
        
        {/* Academic Icon */}
        <div style={{ fontSize: '5rem', marginBottom: '30px', animation: 'bounce 2s infinite' }}>🎓</div>

        {/* Error Code */}
        <h1 style={{ 
            fontSize: '5rem', 
            margin: '0 0 20px 0', 
            background: 'linear-gradient(135deg, var(--primary-light), var(--secondary))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            lineHeight: 1,
            fontWeight: 900,
            fontFamily: 'Outfit',
            letterSpacing: '-2px'
        }}>
            404
        </h1>

        {/* Error Title */}
        <h2 style={{ color: 'white', fontSize: '2.2rem', marginBottom: '20px', fontFamily: 'Outfit', fontWeight: 800, letterSpacing: '-0.5px' }}>
          Page Not Found
        </h2>

        {/* Error Description */}
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '15px', lineHeight: 1.8, fontWeight: 500 }}>
          We couldn't find the page you're looking for. It may have been moved, archived, or the link might be broken.
        </p>

        {/* Additional Info */}
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '40px', lineHeight: 1.7, opacity: 0.8 }}>
          This might be an outdated link or you may have mistyped the URL. Let's get you back on track!
        </p>

        {/* Primary Action */}
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '50px' }}>
          <button className="btn btn-primary" onClick={() => navigate("/")} style={{ cursor: 'pointer', textDecoration: 'none' }}>
            ← Back to Home
          </button>
          <button className="btn btn-ghost" onClick={() => navigate("/facilities")} style={{ cursor: 'pointer', textDecoration: 'none' }}>
            Explore Facilities
          </button>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '40px' }}>
          <h3 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '25px', textAlign: 'center', fontFamily: 'Outfit', fontWeight: 700, letterSpacing: '-0.3px' }}>
            Suggested Navigation
          </h3>

          {/* Suggested Links Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '15px' }}>
            <button 
              onClick={() => navigate("/")} 
              className="glass-card" 
              style={{ 
                padding: '25px 20px', 
                textAlign: 'center', 
                border: 'none', 
                background: 'rgba(251, 251, 242, 0.03)', 
                cursor: 'pointer', 
                color: 'var(--text-muted)', 
                transition: 'var(--transition)',
                borderTop: '2px solid transparent'
              }} 
              onMouseEnter={(e) => { 
                e.currentTarget.style.color = 'var(--secondary)'; 
                e.currentTarget.style.transform = 'translateY(-4px)'; 
                e.currentTarget.style.borderTopColor = 'var(--secondary)';
                e.currentTarget.style.background = 'rgba(251, 251, 242, 0.05)';
              }} 
              onMouseLeave={(e) => { 
                e.currentTarget.style.color = 'var(--text-muted)'; 
                e.currentTarget.style.transform = 'translateY(0)'; 
                e.currentTarget.style.borderTopColor = 'transparent';
                e.currentTarget.style.background = 'rgba(251, 251, 242, 0.03)';
              }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🏠</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 600 }}>Home</div>
            </button>

            <button 
              onClick={() => navigate("/faculty")} 
              className="glass-card" 
              style={{ 
                padding: '25px 20px', 
                textAlign: 'center', 
                border: 'none', 
                background: 'rgba(251, 251, 242, 0.03)', 
                cursor: 'pointer', 
                color: 'var(--text-muted)', 
                transition: 'var(--transition)',
                borderTop: '2px solid transparent'
              }} 
              onMouseEnter={(e) => { 
                e.currentTarget.style.color = 'var(--secondary)'; 
                e.currentTarget.style.transform = 'translateY(-4px)'; 
                e.currentTarget.style.borderTopColor = 'var(--secondary)';
                e.currentTarget.style.background = 'rgba(251, 251, 242, 0.05)';
              }} 
              onMouseLeave={(e) => { 
                e.currentTarget.style.color = 'var(--text-muted)'; 
                e.currentTarget.style.transform = 'translateY(0)'; 
                e.currentTarget.style.borderTopColor = 'transparent';
                e.currentTarget.style.background = 'rgba(251, 251, 242, 0.03)';
              }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '10px' }}>👨‍🏫</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 600 }}>Faculty</div>
            </button>

            <button 
              onClick={() => navigate("/blog")} 
              className="glass-card" 
              style={{ 
                padding: '25px 20px', 
                textAlign: 'center', 
                border: 'none', 
                background: 'rgba(251, 251, 242, 0.03)', 
                cursor: 'pointer', 
                color: 'var(--text-muted)', 
                transition: 'var(--transition)',
                borderTop: '2px solid transparent'
              }} 
              onMouseEnter={(e) => { 
                e.currentTarget.style.color = 'var(--secondary)'; 
                e.currentTarget.style.transform = 'translateY(-4px)'; 
                e.currentTarget.style.borderTopColor = 'var(--secondary)';
                e.currentTarget.style.background = 'rgba(251, 251, 242, 0.05)';
              }} 
              onMouseLeave={(e) => { 
                e.currentTarget.style.color = 'var(--text-muted)'; 
                e.currentTarget.style.transform = 'translateY(0)'; 
                e.currentTarget.style.borderTopColor = 'transparent';
                e.currentTarget.style.background = 'rgba(251, 251, 242, 0.03)';
              }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '10px' }}>📰</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 600 }}>News</div>
            </button>

            <button 
              onClick={() => navigate("/facilities")} 
              className="glass-card" 
              style={{ 
                padding: '25px 20px', 
                textAlign: 'center', 
                border: 'none', 
                background: 'rgba(251, 251, 242, 0.03)', 
                cursor: 'pointer', 
                color: 'var(--text-muted)', 
                transition: 'var(--transition)',
                borderTop: '2px solid transparent'
              }} 
              onMouseEnter={(e) => { 
                e.currentTarget.style.color = 'var(--secondary)'; 
                e.currentTarget.style.transform = 'translateY(-4px)'; 
                e.currentTarget.style.borderTopColor = 'var(--secondary)';
                e.currentTarget.style.background = 'rgba(251, 251, 242, 0.05)';
              }} 
              onMouseLeave={(e) => { 
                e.currentTarget.style.color = 'var(--text-muted)'; 
                e.currentTarget.style.transform = 'translateY(0)'; 
                e.currentTarget.style.borderTopColor = 'transparent';
                e.currentTarget.style.background = 'rgba(251, 251, 242, 0.03)';
              }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🏗️</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 600 }}>Facilities</div>
            </button>
          </div>
        </div>

        {/* Quick Help Text */}
        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '40px', opacity: 0.7 }}>
          Error Code: 404 | <span style={{ color: 'var(--secondary)' }}>EARIST College of Industrial Technology</span>
        </p>
      </div>

      {/* Floating Animation */}
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
}

export default NotFound;
