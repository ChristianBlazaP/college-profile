import { useParams, useNavigate } from "react-router-dom";
import { facilityLabsData } from "../data/facilityLabsData";
import { useEffect, useState } from "react";
import { filterValidImages, hasValidImages } from "../utils/imageValidator";

function FacilitiesDetailPage() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
    setCurrentImageIndex(0);
  }, [name]);

  const facility = facilityLabsData.find(
    (f) => f.path === `/facilities/${name}`
  );

  // Get valid images for the facility
  const validImages = facility ? filterValidImages(facility.images) : [];

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? validImages.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === validImages.length - 1 ? 0 : prev + 1));
  };

  if (!facility) {
    return (
      <div className="container" style={{ paddingTop: '150px', textAlign: 'center', minHeight: '60vh' }}>
        <div className="glass-panel" style={{ padding: '60px', maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: 'var(--secondary)', fontFamily: 'Outfit' }}>Facility Not Found</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>The facility you are looking for does not exist or has been moved.</p>
          <button className="btn btn-primary" onClick={() => navigate('/facilities')}>
            Return to Facilities
          </button>
        </div>
      </div>
    );
  }

  const facilityDescriptions = {
    "automotive": "Our Automotive Technology Laboratory features computer-based engine analyzers, advanced hydraulic diagnostic boards, transmission diagnostics equipment, and physical components representing both modern combustion engines and green electric/hybrid vehicles. Students practice with engine management systems, electrical troubleshooting, suspension and brake systems maintenance, and modern emission control technologies.",
    "mechanical": "The Mechanical Technology Laboratory is equipped with manual precision milling machinery, lathe tooling systems, welding chambers with safety equipment, and advanced digital CAD/CAM interfaces. Students develop skills in CNC operations, metal fabrication, tool design, welding procedures, and mechanical assembly techniques following industrial standards.",
    "electrical": "The Electrical Technology Laboratory provides comprehensive training with circuit analyzer boards, commercial transformer modules, motor controllers, industrial electrical panels, and real-world installations. Students master electrical safety, wiring design, blueprint interpretation, power distribution diagnostics, grounding systems, and compliance with Philippine electrical codes.",
    "electronics": "Our Electronics Technology Laboratory features advanced oscilloscope diagnostic stations, circuit design kits, microcontroller programming boards, and professional soldering systems. Students design embedded systems, compile digital circuits, work with signal processing, IoT hardware platforms, and troubleshoot complex electronic assemblies.",
    "drafting": "The Drafting Technology Laboratory combines ergonomic drafting tables with modern graphic compute systems equipped with industry-standard AutoCAD, SolidWorks, and BIM modeling software. Students create technical drawings, 3D renderings, architectural documentation, and mechanical blueprints for real-world industrial applications.",
    "computer": "The Computer Technology Laboratory provides enterprise-grade infrastructure including server systems, network routers and switchboards, database environments, and professional developer workstations. Students gain hands-on experience in programming languages, network administration, cloud configuration, cybersecurity fundamentals, and software development.",
    "chemistry": "The Industrial Chemistry Laboratory is equipped with professional-grade reactors, chemical synthesis apparatus, fume hoods, organic reagents, and advanced spectrometers. Students acquire hands-on competencies in chemical synthesis, quality control procedures, analytical biochemistry, safety protocols, and industrial chemical process applications.",
    "apparel-fashion": "The Apparel and Fashion Technology Laboratory provides advanced equipment for clothing design and production, including pattern-making tools, industrial sewing stations, pressing equipment, and specialized design software. Students learn pattern drafting, garment construction, fabric analysis, quality control, and fashion industry production standards.",
    "hvac": "The HVAC-R Laboratory features complete heating, ventilation, air conditioning, and refrigeration systems for hands-on technical training. Students gain expertise in system installation, maintenance procedures, diagnostic troubleshooting, refrigerant handling, system design calculations, and environmental compliance regulations.",
    "food": "The Food Trades Laboratory is equipped with professional-grade kitchen facilities and commercial food production equipment. Students develop culinary techniques, food safety protocols, kitchen management skills, menu planning capabilities, portion control, food service operations, and catering management in an industry-standard environment."
  };

  const detailedDescription = facilityDescriptions[name] || facility.description || `This is our state-of-the-art ${facility.name} equipped with modern technology and industrial-standard tools. Students gain practical hands-on experience in a professional learning environment designed to prepare them for real-world industrial applications.`;

  return (
    <div style={{ 
      paddingBottom: '100px',
      position: 'relative',
      background: `linear-gradient(135deg, rgba(6, 15, 26, 0.85), rgba(6, 15, 26, 0.9)), url(${validImages.length > 0 ? validImages[currentImageIndex] : facility.images[0]}) center/cover fixed no-repeat`,
      minHeight: '100vh',
      transition: 'background-image 0.8s ease-in-out'
    }}>
      {/* PAGE HEADER / HERO */}
      <div style={{ 
          position: 'relative',
          paddingTop: '180px',
          paddingBottom: '80px',
          background: 'transparent',
          marginBottom: '60px'
      }}>
          <div className="container animate-fade-in" style={{ position: 'relative', zIndex: 1 }}>
              <button 
                  className="btn btn-ghost" 
                  onClick={() => navigate('/facilities')}
                  style={{ marginBottom: '30px', padding: '8px 20px', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}
              >
                  ← Back to Facilities
              </button>
              <span className="section-badge" style={{ display: 'block', width: 'fit-content' }}>{facility.course}</span>
              <h1 style={{ fontSize: 'clamp(2.3rem, 5vw, 3.8rem)', color: 'white', marginBottom: '20px', textShadow: '0 4px 20px rgba(0,0,0,0.8)', fontFamily: 'Outfit', fontWeight: 800 }}>
                  {facility.name}
              </h1>
          </div>
      </div>

      <div className="container">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
          {/* MAIN CONTENT */}
          <div style={{ flex: '1 1 600px' }} className="animate-slide-up">
            <div className="glass-panel" style={{ padding: '50px', backgroundColor: 'rgba(255, 255, 255, 0.08)' }}>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--secondary)', marginBottom: '20px', fontFamily: 'Outfit', fontWeight: 800 }}>About This Facility</h3>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '40px' }}>
                {detailedDescription}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginTop: '40px', paddingTop: '40px', borderTop: '1px solid var(--glass-border)' }}>
                <div>
                    <h4 style={{ color: 'white', marginBottom: '10px', fontSize: '1.2rem', fontFamily: 'Outfit' }}>Capacity</h4>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-muted)', fontWeight: 600 }}>
                        <span style={{ fontSize: '1.5rem' }}>👥</span> 30-40 Students
                    </div>
                </div>
                <div>
                    <h4 style={{ color: 'white', marginBottom: '10px', fontSize: '1.2rem', fontFamily: 'Outfit' }}>Status</h4>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#4ade80', fontWeight: 700 }}>
                        <span style={{ fontSize: '1.5rem' }}>✓</span> Fully Operational
                    </div>
                </div>
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <div style={{ flex: '1 1 300px' }} className="animate-fade-in">
            {/* FACILITY IMAGE WITH GALLERY CONTROLS */}
            <div style={{ marginBottom: '30px', borderRadius: '12px', overflow: 'hidden' }}>
              <div style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
                {hasValidImages(facility.images) ? (
                  <>
                    <img 
                      src={validImages[currentImageIndex]} 
                      alt={`${facility.name} - Image ${currentImageIndex + 1}`}
                      onClick={() => setLightboxOpen(true)}
                      style={{ 
                        width: '100%',
                        height: 'auto',
                        display: 'block',
                        borderRadius: '8px',
                        boxShadow: '0 8px 32px rgba(255, 178, 72, 0.15)',
                        cursor: 'pointer',
                        transition: 'transform 0.3s ease, opacity 0.6s ease',
                        opacity: 1,
                      }}
                      onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                      onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                    />
                    
                    {/* Image Counter */}
                    <div style={{
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      backgroundColor: 'rgba(0, 0, 0, 0.7)',
                      color: 'var(--secondary)',
                      padding: '8px 12px',
                      borderRadius: '6px',
                      fontSize: '0.9rem',
                      fontWeight: 'bold',
                      display: validImages.length > 1 ? 'block' : 'none'
                    }}>
                      {currentImageIndex + 1} / {validImages.length}
                    </div>

                    {/* Navigation Buttons */}
                    {validImages.length > 1 && (
                      <>
                        <button 
                          onClick={handlePrevImage}
                          style={{
                            position: 'absolute',
                            left: '10px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            backgroundColor: 'rgba(0, 0, 0, 0.7)',
                            color: 'white',
                            border: 'none',
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            cursor: 'pointer',
                            fontSize: '1.2rem',
                            transition: 'all 0.3s ease',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                          onMouseOver={(e) => e.target.style.backgroundColor = 'rgba(76, 175, 255, 0.8)'}
                          onMouseOut={(e) => e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'}
                        >
                          ❮
                        </button>

                        <button 
                          onClick={handleNextImage}
                          style={{
                            position: 'absolute',
                            right: '10px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            backgroundColor: 'rgba(0, 0, 0, 0.7)',
                            color: 'white',
                            border: 'none',
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            cursor: 'pointer',
                            fontSize: '1.2rem',
                            transition: 'all 0.3s ease',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                          onMouseOver={(e) => e.target.style.backgroundColor = 'rgba(76, 175, 255, 0.8)'}
                          onMouseOut={(e) => e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'}
                        >
                          ❯
                        </button>
                      </>
                    )}
                  </>
                ) : (
                  <div style={{
                    width: '100%',
                    height: '300px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(76, 175, 255, 0.1)',
                    borderRadius: '8px',
                    color: 'var(--text-muted)',
                    fontSize: '1rem',
                    textAlign: 'center'
                  }}>
                    No images available for this facility
                  </div>
                )}
                </div>
            </div>

            <div className="glass-card" style={{ padding: '30px', backgroundColor: 'rgba(255, 255, 255, 0.08)' }}>
              <h3 style={{ fontSize: '1.4rem', color: 'white', marginBottom: '20px', fontFamily: 'Outfit', fontWeight: 700 }}>Learning Outcomes</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  "Mastery of industry-standard equipment and digital diagnostic tools",
                  "Practical integration of theoretical and structural technology concepts",
                  "Development of advanced technical capabilities and safety practices",
                  "Adherence to industry workplace protocols and safety regulations"
                ].map((item, i) => (
                  <li key={i} style={{ 
                      display: 'flex', 
                      gap: '15px', 
                      marginBottom: '18px', 
                      color: 'var(--text-muted)',
                      lineHeight: 1.6,
                      fontSize: '0.95rem'
                  }}>
                    <span style={{ color: 'var(--secondary)', fontWeight: 'bold' }}>✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      {lightboxOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            cursor: 'pointer'
          }}
          onClick={() => setLightboxOpen(false)}
        >
          {/* Close Button */}
          <button
            onClick={() => setLightboxOpen(false)}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              backgroundColor: 'var(--primary)',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              fontSize: '24px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              zIndex: 10000
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = 'var(--secondary)';
              e.target.style.transform = 'scale(1.1)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'var(--primary)';
              e.target.style.transform = 'scale(1)';
            }}
          >
            ✕
          </button>

          {/* Lightbox Content */}
          <div
            style={{
              position: 'relative',
              maxWidth: '90vw',
              maxHeight: '90vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Enlarged Image */}
            <img
              src={facility.images[currentImageIndex]}
              alt={`${facility.name} - Image ${currentImageIndex + 1}`}
              style={{
                maxWidth: '90vw',
                maxHeight: '80vh',
                objectFit: 'contain',
                borderRadius: '8px',
                marginBottom: '20px'
              }}
            />

            {/* Lightbox Controls */}
            <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
              <button
                onClick={handlePrevImage}
                style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: 'var(--primary)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  fontFamily: 'Outfit',
                  fontSize: '1.8rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = 'var(--secondary)';
                  e.target.style.transform = 'scale(1.15)';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'var(--primary)';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                &lt;
              </button>

              <div style={{
                color: 'white',
                fontSize: '1.1rem',
                fontFamily: 'Outfit',
                fontWeight: 'bold',
                minWidth: '100px',
                textAlign: 'center'
              }}>
                {currentImageIndex + 1} / {facility.images.length}
              </div>

              <button
                onClick={handleNextImage}
                style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: 'var(--primary)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  fontFamily: 'Outfit',
                  fontSize: '1.8rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = 'var(--secondary)';
                  e.target.style.transform = 'scale(1.15)';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'var(--primary)';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FacilitiesDetailPage;