import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function BlogPostAlumniSpotlight() {
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
              <span className="section-badge">Alumni Spotlight</span>
              <h1 className="heading-gradient" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', marginBottom: '20px', fontFamily: 'Outfit', fontWeight: 900 }}>Career Success Stories</h1>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', lineHeight: 1.8 }}>
                  March 2026
              </p>
          </div>
      </div>

      <div className="container">
        <div className="glass-panel reveal-on-scroll" style={{ padding: '60px', maxWidth: '900px', margin: '0 auto', borderLeft: '4px solid var(--secondary)' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'white', marginBottom: '30px', fontFamily: 'Outfit', fontWeight: 800 }}>Career Success Stories</h2>
            
            <div style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '40px' }}>
              <p style={{ marginBottom: '20px' }}>
                Our alumni have become industry leaders and innovators in their respective technical fields. Their success is a 
                testament to the quality of education and training provided by the College of Industrial Technology. We take pride 
                in seeing our graduates thrive in their careers and make significant contributions to their industries.
              </p>
              <p style={{ marginBottom: '20px', color: 'white', fontWeight: 600 }}>
                Some of our notable alumni include:
              </p>
              <ul style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8, paddingLeft: '20px', marginBottom: '20px' }}>
                <li style={{ marginBottom: '10px' }}><span style={{ color: 'var(--secondary)' }}>✦</span> <strong>Automotive Technology:</strong> Leading diagnostic innovators and service center entrepreneurs.</li>
                <li style={{ marginBottom: '10px' }}><span style={{ color: 'var(--secondary)' }}>✦</span> <strong>Electronics Technology:</strong> Senior engineering roles in IoT and communication industries.</li>
                <li style={{ marginBottom: '10px' }}><span style={{ color: 'var(--secondary)' }}>✦</span> <strong>Mechanical Technology:</strong> Plant operations managers and manufacturing design supervisors.</li>
                <li style={{ marginBottom: '10px' }}><span style={{ color: 'var(--secondary)' }}>✦</span> <strong>Drafting Technology:</strong> Structural CAD draftsmen and architectural studio consultants.</li>
                <li style={{ marginBottom: '10px' }}><span style={{ color: 'var(--secondary)' }}>✦</span> <strong>Computer Technology:</strong> Web/mobile application engineers and IT network security administrators.</li>
              </ul>
              <p style={{ marginBottom: '20px' }}>
                Our alumni network continues to grow, and many of our graduates maintain strong connections with the college, 
                serving as mentors to current students and providing valuable industry insights.
              </p>
              <p style={{ marginBottom: '20px', color: 'white', fontWeight: 600 }}>
                <strong>Key Success Factors:</strong>
              </p>
              <ul style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8, paddingLeft: '20px', marginBottom: '20px' }}>
                <li style={{ marginBottom: '10px' }}><span style={{ color: 'var(--secondary)' }}>✦</span> Comprehensive hands-on technical instruction in modern workshops</li>
                <li style={{ marginBottom: '10px' }}><span style={{ color: 'var(--secondary)' }}>✦</span> Robust industry alliances with verified internship channels</li>
                <li style={{ marginBottom: '10px' }}><span style={{ color: 'var(--secondary)' }}>✦</span> Focused faculty mentoring that stresses ethics and capability</li>
                <li style={{ marginBottom: '10px' }}><span style={{ color: 'var(--secondary)' }}>✦</span> Lifelong professional networks through active alumni channels</li>
              </ul>
              <p>
                The career success of our alumni validates our educational approach and motivates us to continue delivering 
                world-class technical education. We encourage all our graduates to stay connected with the college and contribute 
                to the success of future generations of CIT students.
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

export default BlogPostAlumniSpotlight;
