import { useParams, useNavigate } from "react-router-dom";
import { courses } from "../data/courses";
import FacultyCard from "../components/FacultyCard";

function CoursePage() {
    const { name } = useParams();
    const navigate = useNavigate();

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
                    <button className="back-button" onClick={() => navigate(-1)}>
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
                            <FacultyCard key={index} name={f.name} img={f.img} role={f.role} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default CoursePage;