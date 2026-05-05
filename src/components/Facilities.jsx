import { facilityLabsData } from "../data/facilityLabsData";
import { useNavigate } from "react-router-dom";

function Facilities() {
    const navigate = useNavigate();

    const facilityDescriptions = {
        "Automotive Technology Laboratory": "Learn automotive systems, diagnostics, and repair with industry-standard equipment.",
        "Mechanical Engineering Laboratory": "Master mechanical design, manufacturing, and precision tooling techniques.",
        "Electrical Laboratory": "Study electrical systems, circuits, and power distribution in industrial settings.",
        "Electronics Laboratory": "Develop skills in electronic circuits, microcontrollers, and digital systems.",
        "Drafting and Design Studio": "Create technical drawings and 3D designs using professional CAD software.",
        "Computer Laboratory": "Learn programming, networking, and IT systems in a professional environment."
    };

    return (
        <div className="facilities-page">
            <div className="container">
                <h1 style={{ 
                    marginTop: '80px', 
                    marginBottom: '20px', 
                    textAlign: 'center',
                    fontSize: '2.5rem',
                    fontWeight: '700'
                }}>
                    Our Facilities
                </h1>

                <p style={{
                    textAlign: 'center',
                    fontSize: '1.1rem',
                    color: 'rgba(255, 255, 255, 0.8)',
                    marginBottom: '50px',
                    maxWidth: '800px',
                    margin: '0 auto 50px'
                }}>
                    State-of-the-art learning spaces equipped with modern technology and practical tools to develop your industrial skills.
                </p>

                <div className="grid">
                    {facilityLabsData.map((facility) => (
                        <div
                            key={facility.id}
                            className="facilities-box"
                            onClick={() => navigate(`/facilities/${facility.path.split('/').pop()}`)}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="facilities-img-wrapper">
                                <img src={facility.image} alt={facility.name} />
                            </div>
                            <div className="facilities-info">
                                <h3>{facility.name}</h3>
                                <p className="facility-course">{facility.course}</p>
                                <p style={{
                                    fontSize: '0.95rem',
                                    color: 'rgba(255, 255, 255, 0.75)',
                                    marginTop: '10px',
                                    lineHeight: '1.5'
                                }}>
                                    {facilityDescriptions[facility.name] || facility.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Facilities;