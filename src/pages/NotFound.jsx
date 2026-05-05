import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="not-found-page">
      <div className="not-found-container">
        <h1 className="not-found-title">404</h1>
        <h2>Page Not Found</h2>
        <p>Sorry, the page you're looking for doesn't exist. It might have been moved or deleted.</p>
        
        <div className="not-found-actions">
          <button 
            className="back-btn"
            onClick={() => navigate("/")}
          >
            ← Back to Home
          </button>
          <button 
            className="preview-btn"
            onClick={() => navigate("/facilities")}
          >
            Explore Facilities →
          </button>
        </div>

        <div className="not-found-suggestions">
          <h3>Suggested Pages:</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/facilities">Facilities</a></li>
            <li><a href="/faculty">Faculty</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
