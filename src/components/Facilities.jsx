import { facilityLabsData } from "../data/facilityLabsData";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up");
            entry.target.style.opacity = 1;
            observer.unobserve(entry.target);
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

function Facilities() {
    const navigate = useNavigate();
    const [activeFilter, setActiveFilter] = useState("All");
    useScrollReveal();

    const facilityDescriptions = {
        "Automotive Technology Laboratory": "Learn automotive systems, diagnostics, and repair with industry-standard equipment.",
        "Mechanical Engineering Laboratory": "Master mechanical design, manufacturing, and precision tooling techniques.",
        "Electrical Laboratory": "Study electrical systems, circuits, and power distribution in industrial settings.",
        "Electronics Laboratory": "Develop skills in electronic circuits, microcontrollers, and digital systems.",
        "Drafting and Design Studio": "Create technical drawings and 3D designs using professional CAD software.",
        "Computer Laboratory": "Learn programming, networking, and IT systems in a professional environment."
    };

    const categories = ["All", ...new Set(facilityLabsData.map(f => f.course))];

    const filteredFacilities = activeFilter === "All" 
        ? facilityLabsData 
        : facilityLabsData.filter(f => f.course === activeFilter);

    return (
        <div style={{ paddingBottom: '100px' }}>
            {/* PAGE HEADER */}
            <div className="page-header" style={{ 
                background: 'linear-gradient(rgba(26, 5, 5, 0.8), rgba(15, 23, 42, 1)), url("/asset/building.jpg") center/cover no-repeat',
                marginBottom: '60px'
            }}>
                <div className="container animate-fade-in">
                    <span className="section-badge">Campus Infrastructure</span>
                    <h1 className="heading-gradient" style={{ fontSize: '4rem', marginBottom: '20px' }}>Our Facilities</h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', lineHeight: 1.8 }}>
                        State-of-the-art learning spaces equipped with modern technology and practical tools to develop your industrial skills.
                    </p>
                </div>
            </div>

            <div className="container">
                {/* FILTERS */}
                <div className="reveal-on-scroll" style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '50px' }}>
                    {categories.map((cat, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveFilter(cat)}
                            className={activeFilter === cat ? "btn btn-primary" : "btn btn-ghost"}
                            style={{ padding: '8px 20px', fontSize: '0.95rem' }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* GRID */}
                <div className="grid-3">
                    {filteredFacilities.map((facility, index) => (
                        <div
                            key={facility.id}
                            className="glass-card reveal-on-scroll"
                            onClick={() => navigate(`/facilities/${facility.path.split('/').pop()}`)}
                            style={{ 
                                cursor: 'pointer', 
                                display: 'flex', 
                                flexDirection: 'column', 
                                animationDelay: `${index * 0.1}s`,
                                borderBottom: `4px solid var(--primary)`
                            }}
                        >
                            <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
                                <img 
                                    src={facility.image} 
                                    alt={facility.name} 
                                    style={{ 
                                        width: '100%', 
                                        height: '100%', 
                                        objectFit: 'cover',
                                        transition: 'transform 0.5s'
                                    }} 
                                    onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'}
                                    onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                                />
                                <div style={{ 
                                    position: 'absolute', 
                                    top: '15px', 
                                    right: '15px', 
                                    background: 'rgba(0,0,0,0.7)', 
                                    backdropFilter: 'blur(5px)',
                                    padding: '5px 12px',
                                    borderRadius: '20px',
                                    color: 'var(--primary)',
                                    fontSize: '0.8rem',
                                    fontWeight: 600
                                }}>
                                    {facility.course}
                                </div>
                            </div>
                            <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '15px', color: 'white', lineHeight: 1.4 }}>{facility.name}</h3>
                                <p style={{
                                    fontSize: '0.95rem',
                                    color: 'var(--text-muted)',
                                    lineHeight: '1.6',
                                    margin: 0,
                                    flex: 1
                                }}>
                                    {facilityDescriptions[facility.name] || facility.description}
                                </p>
                                <div style={{ marginTop: '20px', color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem', display: 'flex', alignItems: 'center' }}>
                                    View Details <span style={{ marginLeft: '8px' }}>→</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Facilities;