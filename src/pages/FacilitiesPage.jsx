import { useParams, useNavigate } from "react-router-dom";
import { facilityLabsData } from "../data/facilityLabsData";

const FacilitiesDetailPage = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const facility = facilityLabsData.find(
    (f) => f.path === `/facilities/${name}`
  );

  if (!facility) {
    return (
      <div className="facility-detail-container">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Go Back
        </button>
        <div className="facility-detail">
          <h2>Facility not found</h2>
          <p>The facility you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="facility-detail-container">
      <button className="back-btn" onClick={() => navigate('/facilities')}>
        ← Back to Explore Facilities
      </button>

      <div className="facility-detail">
        <h2>{facility.name}</h2>

        <img
          src={facility.image}
          alt={facility.name}
          className="detail-img"
        />

        <div style={{ marginTop: '30px' }}>
          <h3 style={{ color: '#FFC000', marginBottom: '10px' }}>Course</h3>
          <p style={{ fontSize: '1.1rem', marginBottom: '30px' }}>
            {facility.course}
          </p>

          <h3 style={{ color: '#FFC000', marginBottom: '10px' }}>About This Facility</h3>
          <p style={{ lineHeight: '1.8', fontSize: '1rem' }}>
            {facility.description || 
              `This is our state-of-the-art ${facility.name} equipped with modern technology and industrial-standard tools. Students gain practical hands-on experience in a professional learning environment designed to prepare them for real-world industrial applications.`}
          </p>

          <h3 style={{ color: '#FFC000', marginBottom: '10px', marginTop: '30px' }}>Learning Outcomes</h3>
          <ul style={{ lineHeight: '1.8', fontSize: '1rem' }}>
            <li>Mastery of industry-standard equipment and tools</li>
            <li>Practical application of theoretical concepts</li>
            <li>Development of technical expertise</li>
            <li>Safety protocols and best practices</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FacilitiesDetailPage;