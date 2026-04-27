import { useNavigate } from "react-router-dom";

const AutomotiveDetailPage = () => {
  const navigate = useNavigate();

  return (
    <div className="facility-detail-container">
      <button className="back-btn" onClick={() => navigate("/facilities")}>
        ← Back to Facilities
      </button>
      
      <div className="facility-detail">
        <h2><i>Automotive Technology Laboratory</i></h2>
        <img src="/asset/facilities/automotive.jpg" alt="Automotive Lab" className="detail-img" />
        <p>
          State-of-the-art automotive technology laboratory equipped with the latest diagnostic tools and equipment. 
          Students learn hands-on experience in vehicle maintenance, repair, and diagnostics.
        </p>
      </div>
    </div>
  );
};

export default AutomotiveDetailPage;
