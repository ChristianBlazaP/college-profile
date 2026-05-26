import { useParams, useNavigate } from "react-router-dom";
import { courses } from "../data/courses";
import FacultyCard from "../components/FacultyCard";
import { useEffect } from "react";

function CoursePage() {
    const { name } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [name]);

    const course = courses.find(
        (c) => c.name === decodeURIComponent(name)
    );

    if (!course) {
        return (
            <div className="container" style={{ paddingTop: '150px', textAlign: 'center', minHeight: '60vh' }}>
                <div className="glass-panel" style={{ padding: '60px', maxWidth: '600px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: 'var(--secondary)', fontFamily: 'Outfit' }}>Program Not Found</h2>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>The program you are looking for does not exist in our curriculum.</p>
                    <button className="btn btn-primary" onClick={() => navigate('/')}>
                        Go Back
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div style={{ paddingBottom: '100px' }}>
            {/* HERO SECTION */}
            <div className="page-header" style={{ 
                background: 'linear-gradient(185deg, var(--primary) 0%, var(--dark) 100%)',
                marginBottom: '60px'
            }}>
                <div className="container animate-fade-in" style={{ position: 'relative' }}>
                    <button 
                        className="btn btn-ghost" 
                        onClick={() => navigate('/')}
                        style={{ position: 'absolute', left: '24px', top: '-60px', padding: '8px 20px', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}
                    >
                        ← Back
                    </button>
                    <span className="section-badge">Academic Program</span>
                    <h1 className="heading-gradient" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '20px', maxWidth: '900px', margin: '0 auto', fontFamily: 'Outfit', fontWeight: 800 }}>
                        {course.name}
                    </h1>
                </div>
            </div>

            <div className="container">
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
                    
                    {/* MAIN INFO */}
                    <div style={{ flex: '1 1 600px' }} className="animate-slide-up">
                        <div className="glass-panel" style={{ padding: '40px', marginBottom: '40px', borderLeft: '4px solid var(--secondary)' }}>
                            <h3 style={{ fontSize: '1.5rem', color: 'var(--secondary)', marginBottom: '15px', fontFamily: 'Outfit', fontWeight: 700 }}>Program Overview</h3>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.8, margin: 0 }}>
                                {course.description || "This program provides comprehensive theoretical knowledge and practical skills required to excel in the industry. Students will engage in hands-on activities, projects, and research to prepare them for professional challenges."}
                            </p>
                        </div>

                        <div className="glass-card" style={{ padding: '30px', display: 'flex', alignItems: 'center', gap: '25px', borderLeft: '4px solid var(--primary)' }}>
                            <div className="avatar-circle" style={{ width: '60px', height: '60px', fontSize: '1.5rem', border: '2px solid var(--secondary)', background: 'rgba(25, 23, 22, 0.8)' }}>
                                👨‍🏫
                            </div>
                            <div>
                                <h4 style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '5px', fontWeight: 700 }}>Department Head</h4>
                                <h3 style={{ color: 'white', fontSize: '1.3rem', margin: 0, fontFamily: 'Outfit', fontWeight: 700 }}>{course.head}</h3>
                            </div>
                        </div>
                    </div>

                    {/* SIDEBAR / FACULTY */}
                    <div style={{ flex: '1 1 350px' }} className="animate-fade-in">
                        <div className="glass-panel" style={{ padding: '30px' }}>
                            <h2 style={{ fontSize: '1.5rem', color: 'white', marginBottom: '25px', borderBottom: '1px solid var(--glass-border)', paddingBottom: '15px', fontFamily: 'Outfit', fontWeight: 700 }}>
                                Key Instructors
                            </h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                {course.faculty && course.faculty.length > 0 ? (
                                    course.faculty.map((f, index) => (
                                        <FacultyCard key={index} name={f.name} img={f.img} role={f.role || "Instructor"} department={course.name} compact={true} />
                                    ))
                                ) : (
                                    <p style={{ color: 'var(--text-muted)' }}>No instructors listed currently.</p>
                                )}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default CoursePage;