import { useNavigate } from "react-router-dom";

const WorkshopDetailPage = () => {
  const navigate = useNavigate();

  return (
    <div className="facility-detail-container">
      <button className="back-btn" onClick={() => navigate("/facilities")}>
        ← Back to Facilities
      </button>
      
      <div className="facility-detail">
        <h2><i>Industrial Workshop</i></h2>
        <img src="/asset/facilities/automotive.jpg" alt="Workshop" className="detail-img" />
        <p>
          Comprehensive industrial workshop featuring welding stations, machining equipment, and fabrication tools. 
          Perfect for practical training in manufacturing and industrial processes.
        </p>
      </div>
    </div>
  );
};

export default WorkshopDetailPage;
