import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function BlogPostCampusUpdate() {
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
              <span className="section-badge">Campus Update</span>
              <h1 className="heading-gradient" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', marginBottom: '20px', fontFamily: 'Outfit', fontWeight: 900 }}>State-of-the-Art Facilities</h1>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', lineHeight: 1.8 }}>
                  April 2026
              </p>
          </div>
      </div>

      <div className="container">
        <div className="glass-panel reveal-on-scroll" style={{ padding: '60px', maxWidth: '900px', margin: '0 auto', borderLeft: '4px solid var(--tertiary)' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'white', marginBottom: '30px', fontFamily: 'Outfit', fontWeight: 800 }}>State-of-the-Art Facilities</h2>
            
            <div style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '40px' }}>
              <p style={{ marginBottom: '20px' }}>
                We are excited to announce the completion of our upgraded laboratories and workshops featuring cutting-edge equipment 
                for practical hands-on training. This significant investment in our infrastructure demonstrates our commitment to 
                providing the best learning environment for our students.
              </p>
              <p style={{ marginBottom: '20px', color: 'white', fontWeight: 600 }}>
                Our newly renovated facilities include:
              </p>
              <ul style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8, paddingLeft: '20px', marginBottom: '20px' }}>
                <li style={{ marginBottom: '10px' }}><span style={{ color: 'var(--secondary)' }}>✦</span> Modern Automotive Technology Workshop with latest diagnostic equipment</li>
                <li style={{ marginBottom: '10px' }}><span style={{ color: 'var(--secondary)' }}>✦</span> Advanced Electronics and Microcontroller Laboratory</li>
                <li style={{ marginBottom: '10px' }}><span style={{ color: 'var(--secondary)' }}>✦</span> CAD and Drafting Design Center with 3D modeling capabilities</li>
                <li style={{ marginBottom: '10px' }}><span style={{ color: 'var(--secondary)' }}>✦</span> Industrial HVAC-R Systems Training Center</li>
                <li style={{ marginBottom: '10px' }}><span style={{ color: 'var(--secondary)' }}>✦</span> Food Technology and Culinary Laboratory</li>
                <li style={{ marginBottom: '10px' }}><span style={{ color: 'var(--secondary)' }}>✦</span> Advanced Welding and Metal Fabrication Workshop</li>
              </ul>
              <p style={{ marginBottom: '20px' }}>
                Each facility is equipped with industry-standard tools and equipment, ensuring that students gain practical experience 
                with the same technology they will encounter in their future careers.
              </p>
              <p>
                Our faculty and staff have received comprehensive training in the operation and maintenance of all new equipment. 
                This ensures that students receive the highest quality of instruction and support during their hands-on training sessions.
                The expansion and modernization of our facilities reflect our dedication to maintaining excellence in technical education 
                and preparing our graduates for successful careers in their respective industries.
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

export default BlogPostCampusUpdate;
