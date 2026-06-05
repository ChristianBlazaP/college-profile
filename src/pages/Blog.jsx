import { useEffect } from "react";
import { Link } from "react-router-dom";

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up");
            entry.target.style.opacity = 1;
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal-on-scroll").forEach((el) => {
      el.style.opacity = 0;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}

function Blog() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  useScrollReveal();

  const blogPosts = [
    {
      id: 1,
      title: "Excellence in Technical Education",
      date: "May 2026",
      category: "Academic News",
      icon: "🎓",
      content: "CIT continues to lead in providing world-class technical education programs that prepare students for modern industry demands."
    },
    {
      id: 2,
      title: "State-of-the-Art Facilities Upgraded",
      date: "April 2026",
      category: "Campus Update",
      icon: "🏭",
      content: "Our newly upgraded laboratories and drafting studios feature cutting-edge industrial equipment for active practical instruction."
    },
    {
      id: 3,
      title: "Career Success & Alumni Spotlights",
      date: "March 2026",
      category: "Alumni Spotlight",
      icon: "🚀",
      content: "Meet our alumni who have successfully become distinguished industry leaders and software innovators in their technical sectors."
    }
  ];

  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  const handleGoogleMapsClick = () => {
    const mapsUrl = "https://www.google.com/maps/search/EARIST+CIT+Building+Valencia+Street+Caloocan+City";
    window.open(mapsUrl, "_blank");
  };

  return (
    <div style={{ paddingBottom: '100px' }}>
      {/* PAGE HEADER */}
      <div className="page-header" style={{ 
          background: 'linear-gradient(185deg, var(--primary) 0%, var(--dark) 100%)',
          marginBottom: '60px'
      }}>
          <div className="container animate-fade-in" style={{ position: 'relative' }}>
              <span className="section-badge">Updates</span>
              <h1 className="heading-gradient" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '20px', fontFamily: 'Outfit', fontWeight: 900 }}>CIT News & Updates</h1>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', lineHeight: 1.8 }}>
                  Stay informed about the latest developmental achievements and milestones at the College of Industrial Technology.
              </p>
          </div>
      </div>

      <div className="container">
        
        {/* FEATURED POST */}
        <Link to="/blog/academic-news" style={{ textDecoration: 'none' }}>
          <div className="glass-panel reveal-on-scroll" style={{ padding: '0', marginBottom: '60px', overflow: 'hidden', display: 'flex', flexWrap: 'wrap', cursor: 'pointer', borderLeft: '4px solid var(--secondary)' }}>
              <div style={{ flex: '1 1 50%', minHeight: '350px', background: 'linear-gradient(135deg, var(--primary), var(--dark-alt))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '6rem' }}>
                  {featuredPost.icon}
              </div>
              <div style={{ flex: '1 1 50%', padding: '50px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                      <span style={{ background: 'var(--secondary)', color: 'var(--dark)', padding: '6px 14px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{featuredPost.category}</span>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 500 }}>{featuredPost.date}</span>
                  </div>
                  <h2 style={{ fontSize: '2.2rem', color: 'white', marginBottom: '20px', fontFamily: 'Outfit', fontWeight: 800 }}>{featuredPost.title}</h2>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '30px' }}>{featuredPost.content}</p>
                  <button className="btn btn-ghost" style={{ alignSelf: 'flex-start' }}>Read Full Story</button>
              </div>
          </div>
        </Link>

        {/* REGULAR POSTS */}
        <div className="grid-3" style={{ marginBottom: '100px' }}>
          {regularPosts.map((post, i) => {
            let postLink = "/blog";
            if (post.id === 1) postLink = "/blog/academic-news";
            else if (post.id === 2) postLink = "/blog/campus-update";
            else if (post.id === 3) postLink = "/blog/alumni-spotlight";
            
            return (
              <Link key={post.id} to={postLink} style={{ textDecoration: 'none' }}>
                <div className="glass-card reveal-on-scroll" style={{ display: 'flex', flexDirection: 'column', animationDelay: `${i*0.1}s`, cursor: 'pointer', transition: 'var(--transition)', height: '100%', borderTop: `4px solid ${i === 0 ? 'var(--secondary)' : 'var(--tertiary)'}` }}>
                  <div style={{ height: '200px', background: 'linear-gradient(135deg, rgba(15, 44, 89, 0.08), rgba(212, 175, 55, 0.08))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', borderBottom: '1px solid var(--border-color-slate)' }}>
                    {post.icon}
                  </div>
                  <div style={{ padding: '30px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                        <span style={{ color: 'var(--secondary)', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{post.category}</span>
                        <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{post.date}</span>
                    </div>
                    <h3 style={{ color: 'white', fontSize: '1.3rem', marginBottom: '15px', lineHeight: 1.4, fontFamily: 'Outfit', fontWeight: 700 }}>{post.title}</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '25px', flex: 1 }}>{post.content}</p>
                    <div style={{ color: 'var(--secondary)', fontWeight: 700, fontSize: '0.92rem', display: 'flex', alignItems: 'center', cursor: 'pointer', letterSpacing: '0.5px' }}>
                      Read More <span style={{ marginLeft: '8px' }}>→</span>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* LOCATION SECTION */}
        <div className="reveal-on-scroll" style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '80px' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <span className="section-badge" style={{ background: 'rgba(56, 102, 65, 0.15)', borderColor: 'var(--tertiary)' }}>Visit Us</span>
                <h2 className="section-title">Find Our Campus</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Located at the heart of Valencia, Manila, Philippines</p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
                <div style={{ flex: '1 1 500px' }} className="glass-panel">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.3068525932354!2d121.00208792343055!3d14.599266303854146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9e5a859344b%3A0xb8e671373655926b!2sEARIST%20College%20Of%20Industrial%20Technology!5e0!3m2!1sen!2sph!4v1715329200000"
                        width="100%"
                        height="400"
                        style={{ border: 0, borderRadius: 'var(--radius-md)' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="EARIST CIT Building Location - Valencia Street, Manila"
                    ></iframe>
                </div>

                <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div className="glass-card" style={{ padding: '30px', marginBottom: '20px', borderLeft: '4px solid var(--secondary)' }}>
                        {[
                            { icon: '📍', title: 'Address', desc: 'EARIST CIT Building, Valencia Street, Santa Mesa, Manila, 1008 Philippines' },
                            { icon: '📞', title: 'Phone', desc: '(028) 243-9467' },
                            { icon: '✉️', title: 'Email', desc: 'earistofficial1945@gmail.com' },
                            { icon: '🌐', title: 'Website', desc: 'www.earist.edu.ph' }
                        ].map((item, i) => (
                            <div key={i} style={{ display: 'flex', gap: '15px', marginBottom: i===3?0:'20px' }}>
                                <div style={{ fontSize: '1.5rem' }}>{item.icon}</div>
                                <div>
                                    <h4 style={{ color: 'white', margin: '0 0 5px 0', fontSize: '1rem', fontFamily: 'Outfit', fontWeight: 700 }}>{item.title}</h4>
                                    <p style={{ color: 'var(--text-muted)', margin: 0, fontSize: '0.95rem', lineHeight: 1.5 }}>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="btn btn-primary" onClick={handleGoogleMapsClick} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                        Open in Google Maps →
                    </button>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}

export default Blog;
