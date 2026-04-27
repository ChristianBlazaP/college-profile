import { useParams, useNavigate } from "react-router-dom";
import { courses } from "../data/courses";

function CoursePage() {
    const { name } = useParams();
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    const course = courses.find(
        (c) => c.name === decodeURIComponent(name)
    );

    if (!course) {
        return <h2>Course not found</h2>;
    }

    return (
        <div className="course-page">
            <div className="container">

                <div style={{ marginTop: '20px' }}>
                    <button className="back-button" onClick={handleBack}>
                        ← Back
                    </button>
                </div>

                <h1>{course.name}</h1>

                <h3 style={{ color: '#FFC000', fontStyle: 'italic' }}>Department Head</h3>
                <p>{course.head}</p>

                <h3>Description</h3>
                <p>{course.description}</p>

                <div className="card">
                    <h2>INSTRUCTORS</h2>

                    <div className="grid">
                        {course.faculty.map((f, index) => (
                            <div key={index} className="instructors-box">
                                <img src={f.img} alt={f.name} />
                                <p>{f.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default CoursePage;