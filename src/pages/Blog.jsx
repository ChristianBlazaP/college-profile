import { useEffect } from "react";

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
      content: "CIT continues to lead in providing world-class technical education programs that prepare students for industry demands."
    },
    {
      id: 2,
      title: "State-of-the-Art Facilities",
      date: "April 2026",
      category: "Campus Update",
      icon: "🏭",
      content: "Our newly upgraded laboratories and workshops feature cutting-edge equipment for practical hands-on training."
    },
    {
      id: 3,
      title: "Career Success Stories",
      date: "March 2026",
      category: "Alumni Spotlight",
      icon: "🚀",
      content: "Meet our alumni who have become industry leaders and innovators in their respective technical fields."
    }
  ];

  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  const handleGoogleMapsClick = () => {
    const mapsUrl = "https://www.google.com/maps/search/EARIST+Nagtahan+Street+Manila";
    window.open(mapsUrl, "_blank");
  };

  return (
    <div style={{ paddingBottom: '100px' }}>
      {/* PAGE HEADER */}
      <div className="page-header" style={{ 
          background: 'linear-gradient(rgba(26, 5, 5, 0.8), rgba(26, 5, 5, 1)), url("/asset/building.jpg") center/cover no-repeat',
          marginBottom: '60px'
      }}>
          <div className="container animate-fade-in" style={{ position: 'relative' }}>
              <span className="section-badge">Updates</span>
              <h1 className="heading-gradient" style={{ fontSize: '4rem', marginBottom: '20px' }}>CIT News & Updates</h1>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', lineHeight: 1.8 }}>
                  Stay informed about the latest developments at the College of Industrial Technology.
              </p>
          </div>
      </div>

      <div className="container">
        
        {/* FEATURED POST */}
        <div className="glass-panel reveal-on-scroll" style={{ padding: '0', marginBottom: '60px', overflow: 'hidden', display: 'flex', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 50%', minHeight: '350px', background: 'linear-gradient(135deg, var(--crimson-dark), var(--dark))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '6rem' }}>
                {featuredPost.icon}
            </div>
            <div style={{ flex: '1 1 50%', padding: '50px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                    <span style={{ background: 'var(--gold)', color: 'var(--dark)', padding: '4px 12px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 600 }}>{featuredPost.category}</span>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{featuredPost.date}</span>
                </div>
                <h2 style={{ fontSize: '2.2rem', color: 'white', marginBottom: '20px' }}>{featuredPost.title}</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '30px' }}>{featuredPost.content}</p>
                <button className="btn btn-ghost" style={{ alignSelf: 'flex-start' }}>Read Full Story</button>
            </div>
        </div>

        {/* REGULAR POSTS */}
        <div className="grid-3" style={{ marginBottom: '100px' }}>
          {regularPosts.map((post, i) => (
            <div key={post.id} className="glass-card reveal-on-scroll" style={{ display: 'flex', flexDirection: 'column', animationDelay: `${i*0.1}s` }}>
              <div style={{ height: '200px', background: 'linear-gradient(135deg, rgba(255,192,0,0.05), rgba(71,0,0,0.1))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', borderBottom: '1px solid var(--glass-border)' }}>
                {post.icon}
              </div>
              <div style={{ padding: '30px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                    <span style={{ color: 'var(--gold)', fontSize: '0.85rem', fontWeight: 600 }}>{post.category}</span>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{post.date}</span>
                </div>
                <h3 style={{ color: 'white', fontSize: '1.3rem', marginBottom: '15px', lineHeight: 1.4 }}>{post.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '25px', flex: 1 }}>{post.content}</p>
                <div style={{ color: 'var(--gold)', fontWeight: 600, fontSize: '0.9rem', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                  Read More <span style={{ marginLeft: '8px' }}>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* LOCATION SECTION */}
        <div className="reveal-on-scroll" style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '80px' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <span className="section-badge">Visit Us</span>
                <h2 className="section-title">Find Our Campus</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Located in the heart of Manila, Philippines</p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
                <div style={{ flex: '1 1 500px' }} className="glass-panel">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.567521566849!2d120.98165131530706!3d14.599689589741688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b7a5c8e5e5e1%3A0x5c8e5e1e5c8e5e1e!2sEURIST%20-%20Nagtahan%20Campus!5e0!3m2!1sen!2sph!4v1234567890"
                        width="100%"
                        height="400"
                        style={{ border: 0, borderRadius: 'var(--radius-md)' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="EARIST Location Map"
                    ></iframe>
                </div>

                <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div className="glass-card" style={{ padding: '30px', marginBottom: '20px' }}>
                        {[
                            { icon: '📍', title: 'Address', desc: 'Nagtahan Street, Sampaloc, Manila, 1008 Philippines' },
                            { icon: '📞', title: 'Phone', desc: '(02) 8243-9467' },
                            { icon: '✉️', title: 'Email', desc: 'earistofficial1945@gmail.com' },
                            { icon: '🌐', title: 'Website', desc: 'www.earist.edu.ph' }
                        ].map((item, i) => (
                            <div key={i} style={{ display: 'flex', gap: '15px', marginBottom: i===3?0:'20px' }}>
                                <div style={{ fontSize: '1.5rem' }}>{item.icon}</div>
                                <div>
                                    <h4 style={{ color: 'white', margin: '0 0 5px 0', fontSize: '1rem' }}>{item.title}</h4>
                                    <p style={{ color: 'var(--text-muted)', margin: 0, fontSize: '0.95rem' }}>{item.desc}</p>
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
