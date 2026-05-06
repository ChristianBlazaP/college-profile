function FacultyCard({ name, img, role }) {
  return (
    <div className="faculty-card">
      <img src={img} alt={name} className="card-img" />
      <p className="faculty-card-name">{name}</p>
      {role && <p className="faculty-card-role">{role}</p>}
    </div>
  );
}

export default FacultyCard;