import { useParams, useNavigate } from "react-router-dom";

function CoursePage() {
    const { name } = useParams();
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <div className="course-page">
            <div className="container">
                <div style={{ marginTop: '20px' }}>
                    <button className="back-button" onClick={handleBack}>
                        ← Back
                    </button>
                </div>
                <h1>{name}</h1>

                <p>
                This page shows the instructors and description of {name}.
                </p>

                <div className="card">
                    <h1>Instructors</h1>
                    <p>Faculty members will be listed here.</p>
                </div>
            </div>
        </div>
    );
}

export default CoursePage;