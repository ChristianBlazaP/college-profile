import { useNavigate } from "react-router-dom";

const LabDetailPage = () => {
  const navigate = useNavigate();

  return (
    <div className="facility-detail-container">
      <button className="back-btn" onClick={() => navigate("/facilities")}>
        ← Back to Facilities
      </button>
      
      <div className="facility-detail">
        <h2><i>Electronics & Computer Laboratory</i></h2>
        <img src="/asset/facilities/automotive.jpg" alt="Lab" className="detail-img" />
        <p>
          Modern electronics and computer laboratory with advanced testing equipment and computing stations. 
          Ideal for learning circuit design, programming, and digital systems development.
        </p>
      </div>
    </div>
  );
};

export default LabDetailPage;
