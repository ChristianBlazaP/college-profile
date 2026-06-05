import { facilityLabsData } from "../data/facilityLabsData";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { filterValidImages, hasValidImages } from "../utils/imageValidator";

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
        "Automotive Technology Laboratory": "Modern automotive systems, diagnostics, and repair facility with engine analyzers, hydraulic diagnostic boards, and hands-on equipment for combustion and electric vehicle maintenance.",
        "Mechanical Technology Laboratory": "Industrial machining center with precision milling machinery, lathe systems, welding chambers, and CAD/CAM interfaces for fabrication and mechanical assembly.",
        "Electrical Technology Laboratory": "Comprehensive electrical facility featuring circuit analyzers, transformer modules, motor controllers, and industrial panels for wiring, design, and power distribution training.",
        "Electronics Laboratory": "High-tech facility with oscilloscope stations, circuit design kits, microcontroller boards, and soldering systems for embedded systems and IoT development.",
        "Drafting Technology Laboratory": "Modern design studio with ergonomic drafting tables and advanced CAD systems including AutoCAD, SolidWorks, and BIM software for technical documentation.",
        "Computer Technology Laboratory": "Enterprise-grade facility with server systems, network equipment, databases, and developer workstations for programming, networking, and IT management.",
        "Industrial Chemistry Laboratory": "Advanced chemical analysis facility with modern reactors, organic synthesis hoods, analytical instruments, and safety devices for experimental chemistry training.",
        "Apparel and Fashion Technology Laboratory": "Complete apparel production facility with pattern-making equipment, sewing stations, textile analysis tools, and design systems for garment manufacturing.",
        "HVAC-R Laboratory": "Specialized climate control facility with complete heating, ventilation, air conditioning, and refrigeration systems for installation, maintenance, and troubleshooting training.",
        "Food Trades Laboratory": "Professional-grade culinary facility with industrial kitchen equipment, food production systems, and workstations for cooking, food safety, and catering operations."
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
                        return (
                            <div
                                key={facility.id}
                                className="glass-card reveal-on-scroll facility-card"
                                onClick={() => navigate(`/facilities/${facility.path.split('/').pop()}`)}
                                style={{ 
                                    cursor: 'pointer', 
                                    display: 'flex', 
                                    flexDirection: 'column', 
                                    animationDelay: `${index * 0.1}s`,
                                    position: 'relative',
                                    overflow: 'hidden',
                                    transition: 'all 0.4s ease',
                                    minHeight: '500px'
                                }}
                            >
                                <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
                                    {hasValidImages(facility.images) ? (
                                        <img 
                                            src={filterValidImages(facility.images)[0]} 
                                            alt={facility.name} 
                                            style={{ 
                                                width: '100%', 
                                                height: '100%', 
                                                objectFit: 'cover',
                                                transition: 'transform 0.5s, filter 0.5s'
                                            }} 
                                            className="facility-image"
                                            onMouseOver={e => {
                                                e.currentTarget.style.transform = 'scale(1.08)';
                                                e.currentTarget.style.filter = 'blur(2px) brightness(0.7)';
                                            }}
                                            onMouseOut={e => {
                                                e.currentTarget.style.transform = 'scale(1)';
                                                e.currentTarget.style.filter = 'blur(0px) brightness(1)';
                                            }}
                                        />
                                    ) : (
                                        <div style={{ 
                                            width: '100%', 
                                            height: '100%', 
                                            display: 'flex', 
                                            alignItems: 'center', 
                                            justifyContent: 'center',
                                            background: 'linear-gradient(135deg, rgba(76, 175, 255, 0.1), rgba(255, 107, 107, 0.1))',
                                            color: 'var(--text-muted)',
                                            fontSize: '0.9rem'
                                        }}>
                                            No images available
                                        </div>
                                    )}
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
                                    <div style={{ marginTop: '20px', color: 'var(--secondary)', fontWeight: 700, fontSize: '0.92rem', display: 'flex', alignItems: 'center', letterSpacing: '0.5px', transition: 'transform 0.3s ease' }} className="facility-view-btn">
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