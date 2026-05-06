import { useEffect } from "react";

function Blog() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "Excellence in Technical Education",
      date: "May 2026",
      icon: "🎓",
      content: "CIT continues to lead in providing world-class technical education programs that prepare students for industry demands."
    },
    {
      id: 2,
      title: "State-of-the-Art Facilities",
      date: "April 2026",
      icon: "🏭",
      content: "Our newly upgraded laboratories and workshops feature cutting-edge equipment for practical hands-on training."
    },
    {
      id: 3,
      title: "Career Success Stories",
      date: "March 2026",
      icon: "🚀",
      content: "Meet our alumni who have become industry leaders and innovators in their respective technical fields."
    }
  ];

  const handleGoogleMapsClick = () => {
    const mapsUrl = "https://www.google.com/maps/search/EARIST+Nagtahan+Street+Manila";
    window.open(mapsUrl, "_blank");
  };

  return (
    <div className="blog-page">
      {/* Blog Section */}
      <div className="blog-section">
        <div className="blog-header">
          <h1>CIT News & Updates</h1>
          <p>Stay informed about the latest developments at the College of Industrial Technology</p>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-card">
              <div className="blog-card-img">{post.icon}</div>
              <div className="blog-card-content">
                <h3>{post.title}</h3>
                <p className="blog-date">{post.date}</p>
                <p>{post.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Location Section */}
      <div className="location-section">
        <div className="location-header">
          <h2>📍 Find Us</h2>
          <p>Visit our campus located in the heart of Manila, Philippines</p>
        </div>

        <div className="location-container">
          {/* Map */}
          <div className="map-frame">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.567521566849!2d120.98165131530706!3d14.599689589741688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b7a5c8e5e5e1%3A0x5c8e5e1e5c8e5e1e!2sEURIST%20-%20Nagtahan%20Campus!5e0!3m2!1sen!2sph!4v1234567890"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="EARIST Location Map"
            ></iframe>
          </div>

          {/* Location Details */}
          <div className="location-info">
            <h3>College of Industrial Technology</h3>
            <div className="location-details">
              <div className="location-item">
                <div className="location-icon">📍</div>
                <div className="location-text">
                  <h4>Address</h4>
                  <p>Nagtahan Street, Sampaloc<br />Manila, 1008 Philippines</p>
                </div>
              </div>

              <div className="location-item">
                <div className="location-icon">📞</div>
                <div className="location-text">
                  <h4>Phone</h4>
                  <p>(02) 8243-9467</p>
                </div>
              </div>

              <div className="location-item">
                <div className="location-icon">✉️</div>
                <div className="location-text">
                  <h4>Email</h4>
                  <p>earistofficial1945@gmail.com</p>
                </div>
              </div>

              <div className="location-item">
                <div className="location-icon">🌐</div>
                <div className="location-text">
                  <h4>Website</h4>
                  <p>www.earist.edu.ph</p>
                </div>
              </div>
            </div>

            <button className="google-maps-btn" onClick={handleGoogleMapsClick}>
              Open in Google Maps →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
