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
        overflow: 'hidden'
    }}>
      
      {/* Background decoration */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '30vw', fontWeight: 900, color: 'rgba(255,255,255,0.02)', zIndex: 0, whiteSpace: 'nowrap', userSelect: 'none' }}>
        404
      </div>

      <div className="glass-panel animate-slide-up" style={{ padding: '60px', maxWidth: '700px', width: '100%', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <h1 style={{ 
            fontSize: '6rem', 
            margin: '0 0 10px 0', 
            background: 'linear-gradient(135deg, var(--gold), #ff6b6b)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: 1
        }}>
            404
        </h1>
        <h2 style={{ color: 'white', fontSize: '2rem', marginBottom: '20px' }}>Page Not Found</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '40px', lineHeight: 1.6 }}>
            Sorry, the page you're looking for doesn't exist. It might have been moved, deleted, or never existed in the first place.
        </p>
        
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '50px' }}>
          <button className="btn btn-primary" onClick={() => navigate("/")}>
            ← Back to Home
          </button>
          <button className="btn btn-ghost" onClick={() => navigate("/facilities")}>
            Explore Facilities
          </button>
        </div>

        <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '40px', textAlign: 'left' }}>
          <h3 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '20px', textAlign: 'center' }}>Suggested Destinations</h3>
          <div className="grid-3" style={{ gap: '15px' }}>
            <button onClick={() => navigate("/faculty")} className="glass-card" style={{ padding: '20px', textAlign: 'center', border: 'none', background: 'rgba(255,255,255,0.02)', cursor: 'pointer', color: 'var(--text-muted)' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '10px' }}>👨‍🏫</div>
                Faculty
            </button>
            <button onClick={() => navigate("/blog")} className="glass-card" style={{ padding: '20px', textAlign: 'center', border: 'none', background: 'rgba(255,255,255,0.02)', cursor: 'pointer', color: 'var(--text-muted)' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '10px' }}>📰</div>
                News & Updates
            </button>
            <button onClick={() => navigate("/")} className="glass-card" style={{ padding: '20px', textAlign: 'center', border: 'none', background: 'rgba(255,255,255,0.02)', cursor: 'pointer', color: 'var(--text-muted)' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '10px' }}>🎓</div>
                Programs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
