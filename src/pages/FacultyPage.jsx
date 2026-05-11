import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { courses } from "../data/courses";
import FacultyCard from "../components/FacultyCard";

const facultyBoard = [
  { name: "DR. ERWIN P. ORDOVEZ", role: "College Dean", department: "Administration" },
  { name: "PROF. EVELYN A. GABAS", role: "Associate Dean", department: "Administration" },

  { name: "DATU, JORDAN A.", role: "Department Head", department: "Automotive Technology" },
  { name: "SANDOVAL, ALLAN A.", role: "Department Head", department: "Electronics Technology" },
  { name: "DANGILA CRUZ, ROLE", role: "Department Head", department: "Electrical Technology" },
  { name: "TANUECO, JOSEPH", role: "Department Head", department: "Computer Technology" },
  { name: "BEDIA, DESIREE JOYCE L.", role: "Department Head", department: "Apparel & Fashion Technology" },
  { name: "PERALTA, DERICK O.", role: "Department Head", department: "General Education" },
  { name: "SAN JUAN RHYCA MAE C.", role: "Department Head", department: "Food Trades" },
];

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up");
            entry.target.style.opacity = 1;
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal-on-scroll").forEach((el) => {
      el.style.opacity = 0;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}

function FacultyPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("admin");
  useScrollReveal();

  const administration = facultyBoard.filter(f => f.department === "Administration");
  const departmentHeads = facultyBoard.filter(f => f.role === "Department Head");

  return (
    <div style={{ paddingBottom: '100px' }}>
      
      {/* PAGE HEADER */}
      <div className="page-header" style={{ 
          background: 'linear-gradient(rgba(26, 5, 5, 0.8), rgba(26, 5, 5, 1)), url("/asset/building.jpg") center/cover no-repeat',
          marginBottom: '60px'
      }}>
          <div className="container animate-fade-in" style={{ position: 'relative' }}>
              <span className="section-badge">Leadership</span>
              <h1 className="heading-gradient" style={{ fontSize: '4rem', marginBottom: '20px' }}>Faculty Directory</h1>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', lineHeight: 1.8 }}>
                  Meet the dedicated leaders and educators of the College of Industrial Technology.
                  These professionals guide students toward excellence, innovation, and industry readiness.
              </p>
          </div>
      </div>

      <div className="container">

        {/* TABS */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '60px', flexWrap: 'wrap' }}>
            <button 
                onClick={() => setActiveTab('admin')}
                className={activeTab === 'admin' ? "btn btn-primary" : "btn btn-ghost"}
            >
                Administration & Heads
            </button>
            <button 
                onClick={() => setActiveTab('departments')}
                className={activeTab === 'departments' ? "btn btn-primary" : "btn btn-ghost"}
            >
                By Department
            </button>
        </div>

        {/* TAB CONTENT: ADMIN & HEADS */}
        {activeTab === 'admin' && (
            <div className="animate-fade-in">
                {/* Administration */}
                <div style={{ marginBottom: '80px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <h2 className="section-title" style={{ fontSize: '2.5rem' }}>College Administration</h2>
                    </div>
                    <div className="grid-3" style={{ maxWidth: '900px', margin: '0 auto' }}>
                        {administration.map((f, index) => (
                            <FacultyCard key={index} name={f.name} role={f.role} department={f.department} />
                        ))}
                    </div>
                </div>

                {/* Department Heads */}
                <div>
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <h2 className="section-title" style={{ fontSize: '2.5rem' }}>Department Heads</h2>
                    </div>
                    <div className="grid-4">
                        {departmentHeads.map((f, index) => (
                            <div className="reveal-on-scroll" key={index} style={{ animationDelay: `${(index % 4) * 0.1}s` }}>
                                <FacultyCard name={f.name} role={f.role} department={f.department} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )}

        {/* TAB CONTENT: DEPARTMENTS */}
        {activeTab === 'departments' && (
            <div className="animate-fade-in">
                {courses.map((course, index) => (
                    <div key={index} className="glass-panel reveal-on-scroll" style={{ padding: '40px', marginBottom: '40px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--glass-border)', paddingBottom: '20px', marginBottom: '30px', flexWrap: 'wrap', gap: '20px' }}>
                            <h2 style={{ color: 'white', margin: 0, fontSize: '1.8rem' }}>
                                {course.name}
                            </h2>
                            <Link to={`/course/${encodeURIComponent(course.name)}`} className="btn btn-ghost" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>
                                View Program
                            </Link>
                        </div>
                        
                        <div className="grid-4">
                            {course.faculty.map((f, fi) => (
                                <FacultyCard key={fi} name={f.name} img={f.img} role={f.role || "Instructor"} compact={true} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        )}

      </div>
    </div>
  );
}

export default FacultyPage;