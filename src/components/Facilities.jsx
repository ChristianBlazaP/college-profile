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

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const facilityDescriptions = {
        "Automotive Technology Laboratory": "Learn automotive systems, diagnostics, and repair with industry-standard equipment and digital tooling.",
        "Mechanical Engineering Laboratory": "Master mechanical design, manufacturing, and precision tool handling procedures.",
        "Electrical Laboratory": "Study electrical systems, circuits, and advanced power distribution in industrial setups.",
        "Electronics Laboratory": "Develop skills in electronic circuits, microcontrollers, and IoT hardware engineering.",
        "Drafting and Design Studio": "Create modern technical drawings and 3D industrial blueprints using CAD suites.",
        "Computer Laboratory": "Master coding languages, systems administration, and IT networking in advanced settings."
    };

    const categories = ["All", ...new Set(facilityLabsData.map(f => f.course))];

    const filteredFacilities = activeFilter === "All" 
        ? facilityLabsData 
        : facilityLabsData.filter(f => f.course === activeFilter);

    return (
        <div style={{ paddingBottom: '100px' }}>
            {/* PAGE HEADER */}
            <div className="page-header" style={{ 
                background: 'linear-gradient(185deg, var(--primary) 0%, var(--dark) 100%)',
                marginBottom: '60px'
            }}>
                <div className="container animate-fade-in">
                    <span className="section-badge">Infrastructure</span>
                    <h1 className="heading-gradient" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '20px', fontFamily: 'Outfit', fontWeight: 900 }}>Our Facilities</h1>
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
                            style={{ padding: '8px 22px', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* GRID */}
                <div className="grid-3">
                    {filteredFacilities.map((facility, index) => {
                        const borderColors = ['var(--primary)', 'var(--secondary)', 'var(--tertiary)'];
                        const currentBorder = borderColors[index % 3];
                        return (
                            <div
                                key={facility.id}
                                className="glass-card reveal-on-scroll"
                                onClick={() => navigate(`/facilities/${facility.path.split('/').pop()}`)}
                                style={{ 
                                    cursor: 'pointer', 
                                    display: 'flex', 
                                    flexDirection: 'column', 
                                    animationDelay: `${index * 0.1}s`,
                                    borderBottom: `4px solid ${currentBorder}`
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
                                        onMouseOver={e => e.currentTarget.style.transform = 'scale(1.08)'}
                                        onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                                    />
                                    <div style={{ 
                                        position: 'absolute', 
                                        top: '15px', 
                                        right: '15px', 
                                        background: 'rgba(25, 23, 22, 0.85)', 
                                        backdropFilter: 'blur(5px)',
                                        border: '1px solid rgba(251,251,242,0.1)',
                                        padding: '6px 14px',
                                        borderRadius: '20px',
                                        color: 'var(--secondary)',
                                        fontSize: '0.78rem',
                                        fontWeight: 700,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.5px'
                                    }}>
                                        {facility.course}
                                    </div>
                                </div>
                                <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '15px', color: 'white', lineHeight: 1.4, fontFamily: 'Outfit', fontWeight: 700 }}>{facility.name}</h3>
                                    <p style={{
                                        fontSize: '0.95rem',
                                        color: 'var(--text-muted)',
                                        lineHeight: '1.7',
                                        margin: 0,
                                        flex: 1
                                    }}>
                                        {facilityDescriptions[facility.name] || facility.description}
                                    </p>
                                    <div style={{ marginTop: '20px', color: 'var(--secondary)', fontWeight: 700, fontSize: '0.92rem', display: 'flex', alignItems: 'center', letterSpacing: '0.5px' }}>
                                        View Details <span style={{ marginLeft: '8px' }}>→</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Facilities;