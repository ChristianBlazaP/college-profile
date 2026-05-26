import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function BlogPostAcademic() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div style={{ paddingBottom: '100px' }}>
      {/* PAGE HEADER */}
      <div className="page-header" style={{ 
          background: 'linear-gradient(185deg, var(--primary) 0%, var(--dark) 100%)',
          marginBottom: '60px'
      }}>
          <div className="container animate-fade-in" style={{ position: 'relative' }}>
              <span className="section-badge">Academic News</span>
              <h1 className="heading-gradient" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', marginBottom: '20px', fontFamily: 'Outfit', fontWeight: 900 }}>Excellence in Technical Education</h1>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', lineHeight: 1.8 }}>
                  May 2026
              </p>
          </div>
      </div>

      <div className="container">
        <div className="glass-panel reveal-on-scroll" style={{ padding: '60px', maxWidth: '900px', margin: '0 auto', borderLeft: '4px solid var(--secondary)' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'white', marginBottom: '30px', fontFamily: 'Outfit', fontWeight: 800 }}>Excellence in Technical Education</h2>
            
            <div style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '40px' }}>
              <p style={{ marginBottom: '20px' }}>
                CIT continues to lead in providing world-class technical education programs that prepare students for industry demands. 
                Our commitment to excellence ensures that graduates are equipped with the latest knowledge and practical skills required 
                in today's competitive job market.
              </p>
              <p style={{ marginBottom: '20px' }}>
                Through our comprehensive curriculum and state-of-the-art facilities, we bridge the gap between academic learning and 
                real-world applications. Our faculty members are industry experts who bring practical experience into the classroom, 
                ensuring that students receive education that is both theoretically sound and practically relevant.
              </p>
              <p style={{ marginBottom: '20px', color: 'white', fontWeight: 600 }}>
                The College of Industrial Technology at EARIST remains committed to:
              </p>
              <ul style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8, paddingLeft: '20px', marginBottom: '20px' }}>
                <li style={{ marginBottom: '10px' }}><span style={{ color: 'var(--secondary)' }}>✦</span> Providing cutting-edge technical education</li>
                <li style={{ marginBottom: '10px' }}><span style={{ color: 'var(--secondary)' }}>✦</span> Developing industry-ready graduates</li>
                <li style={{ marginBottom: '10px' }}><span style={{ color: 'var(--secondary)' }}>✦</span> Fostering innovation and research</li>
                <li style={{ marginBottom: '10px' }}><span style={{ color: 'var(--secondary)' }}>✦</span> Maintaining partnerships with industry leaders</li>
                <li style={{ marginBottom: '10px' }}><span style={{ color: 'var(--secondary)' }}>✦</span> Continuously improving our programs and facilities</li>
              </ul>
              <p>
                We believe that technical education is the cornerstone of national development and economic growth. Our graduates 
                have become leaders and innovators in their respective fields, contributing significantly to the advancement of 
                technology and industry in the Philippines.
              </p>
            </div>

            <button 
              onClick={() => navigate("/blog")}
              className="btn btn-ghost"
              style={{ marginTop: '30px' }}
            >
              ← Back to News
            </button>
        </div>
      </div>
    </div>
  );
}

export default BlogPostAcademic;
