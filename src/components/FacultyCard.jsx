function FacultyCard({ name, img, role, department, compact }) {
  // Extract initials if no image
  const getInitials = (nameStr) => {
    if (!nameStr) return '?';
    const parts = nameStr.replace(/DR\.|PROF\.|DATU,|SANDOVAL,|DANGILA CRUZ,|TANUECO,|BEDIA,|PERALTA,|SAN JUAN/, '').trim().split(' ');
    if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  const initials = getInitials(name);

  return (
    <div className="glass-card" style={{ 
      padding: compact ? '20px' : '30px', 
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '10px'
    }}>
      <div className="avatar-circle" style={{ 
        width: compact ? '60px' : '90px', 
        height: compact ? '60px' : '90px',
        fontSize: compact ? '1.2rem' : '1.8rem',
        marginBottom: '10px'
      }}>
        {img ? <img src={img} alt={name} style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} /> : initials}
      </div>
      
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h3 style={{ fontSize: compact ? '1.1rem' : '1.25rem', color: 'white', margin: '0 0 10px 0', lineHeight: 1.4 }}>{name}</h3>
        {role && (
          <span style={{ 
            display: 'inline-block',
            padding: '4px 12px',
            background: 'rgba(14, 165, 233, 0.1)',
            border: '1px solid rgba(255, 192, 0, 0.3)',
            color: 'var(--primary)',
            borderRadius: '20px',
            fontSize: '0.85rem',
            fontWeight: 600,
            marginBottom: '8px'
          }}>
            {role}
          </span>
        )}
        {department && <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)' }}>{department}</p>}
      </div>
    </div>
  );
}

export default FacultyCard;