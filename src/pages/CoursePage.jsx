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
                    <div style={{ flex: '1 1 700px' }} className="animate-slide-up">
                        {/* Overview */}
                        <div className="glass-panel" style={{ padding: '40px', marginBottom: '30px', borderLeft: '4px solid var(--secondary)' }}>
                            <h3 style={{ fontSize: '1.6rem', color: 'var(--secondary)', marginBottom: '15px', fontFamily: 'Outfit', fontWeight: 800 }}>Program Overview</h3>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.8, margin: 0 }}>
                                {course.description || "This program provides comprehensive theoretical knowledge and practical skills required to excel in the industry."}
                            </p>
                        </div>

                        {/* Quick Facts Card */}
                        <div className="glass-panel" style={{ padding: '40px', marginBottom: '30px', borderLeft: '4px solid var(--primary)' }}>
                            <h3 style={{ fontSize: '1.6rem', color: 'white', marginBottom: '25px', fontFamily: 'Outfit', fontWeight: 800 }}>Academic Facts</h3>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                                <div className="dashboard-card" style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '20px' }}>
                                    <span style={{ fontSize: '2rem' }}>🎓</span>
                                    <div>
                                        <h5 style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 4px 0' }}>Degree Conferred</h5>
                                        <p style={{ margin: 0, fontWeight: 700, fontSize: '0.95rem', color: 'white' }}>{course.degree || "Bachelor of Industrial Technology"}</p>
                                    </div>
                                </div>
                                <div className="dashboard-card" style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '20px' }}>
                                    <span style={{ fontSize: '2rem' }}>📅</span>
                                    <div>
                                        <h5 style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 4px 0' }}>Duration & Format</h5>
                                        <p style={{ margin: 0, fontWeight: 700, fontSize: '0.95rem', color: 'white' }}>{course.duration || "4 Years"}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Curriculum Highlights & Skills Acquired Grid */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '30px' }}>
                            {/* Curriculum */}
                            {course.curriculum && (
                                <div className="glass-panel" style={{ padding: '35px', borderLeft: '4px solid var(--tertiary)' }}>
                                    <h3 style={{ fontSize: '1.4rem', color: 'white', marginBottom: '20px', fontFamily: 'Outfit', fontWeight: 800 }}>Core Modules</h3>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                        {course.curriculum.map((item, i) => (
                                            <li key={i} style={{ display: 'flex', gap: '12px', marginBottom: '14px', fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                                                <span style={{ color: 'var(--tertiary)', fontWeight: 'bold' }}>⚡</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Skills Acquired */}
                            {course.skillsAcquired && (
                                <div className="glass-panel" style={{ padding: '35px', borderLeft: '4px solid var(--secondary)' }}>
                                    <h3 style={{ fontSize: '1.4rem', color: 'white', marginBottom: '20px', fontFamily: 'Outfit', fontWeight: 800 }}>Competencies</h3>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                        {course.skillsAcquired.map((item, i) => (
                                            <li key={i} style={{ display: 'flex', gap: '12px', marginBottom: '14px', fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                                                <span style={{ color: 'var(--secondary)', fontWeight: 'bold' }}>✓</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Career Opportunities */}
                        {course.careers && (
                            <div className="glass-panel" style={{ padding: '40px', marginBottom: '40px', borderLeft: '4px solid var(--primary)' }}>
                                <h3 style={{ fontSize: '1.6rem', color: 'white', marginBottom: '25px', fontFamily: 'Outfit', fontWeight: 800 }}>Career Opportunities</h3>
                                <p style={{ color: 'var(--text-muted)', marginBottom: '20px', fontSize: '0.95rem' }}>
                                    Graduates of the {course.name} program are highly sought after in the following fields and industrial settings:
                                </p>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                                    {course.careers.map((career, i) => (
                                        <div key={i} className="glass-card" style={{ padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '90px', borderTop: '2px solid var(--border-hover)' }}>
                                            <h4 style={{ margin: 0, color: 'white', fontSize: '1.02rem', fontWeight: 700, fontFamily: 'Outfit' }}>{career}</h4>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Department Head */}
                        <div className="glass-card" style={{ padding: '30px', display: 'flex', alignItems: 'center', gap: '25px', borderLeft: '4px solid var(--primary)' }}>
                            <div className="avatar-circle" style={{ width: '60px', height: '60px', fontSize: '1.5rem', border: '2px solid var(--secondary)', background: 'rgba(6, 15, 26, 0.8)' }}>
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
                        <div className="glass-panel" style={{ padding: '30px', display: 'flex', flexDirection: 'column', height: '500px' }}>
                            <h2 style={{ fontSize: '1.5rem', color: 'white', marginBottom: '25px', borderBottom: '1px solid var(--glass-border)', paddingBottom: '15px', fontFamily: 'Outfit', fontWeight: 700, flexShrink: 0 }}>
                                Key Instructors
                            </h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', overflowY: 'auto', paddingRight: '8px', flex: 1 }}>
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