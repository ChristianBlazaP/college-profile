function FacultyCard({ name, img, role, department, compact }) {
  // Extract initials if no image
  const getInitials = (nameStr) => {
    if (!nameStr) return '?';
    const parts = nameStr.replace(/DR\.|PROF\.|DATU,|SANDOVAL,|DANGILA CRUZ,|TANUECO,|BEDIA,|PERALTA,|SAN JUAN/, '').trim().split(' ');
    if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  const initials = getInitials(name);

  const getBadgeStyles = (roleName) => {
    if (roleName === "College Dean" || roleName === "Associate Dean") {
      return {
        background: 'rgba(120, 1, 21, 0.25)',
        border: '1px solid #ff4d6d',
        color: '#ff4d6d'
      };
    }
    if (roleName === "Department Head") {
      return {
        background: 'rgba(247, 182, 56, 0.12)',
        border: '1px solid var(--secondary)',
        color: 'var(--secondary)'
      };
    }
    return {
      background: 'rgba(56, 102, 65, 0.15)',
      border: '1px solid #4ade80',
      color: '#4ade80'
    };
  };

  const badgeStyles = getBadgeStyles(role);

  return (
    <div className="glass-card" style={{ 
      padding: compact ? '24px 20px' : '35px 30px', 
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '12px',
      borderTop: `4px solid ${role === "College Dean" || role === "Associate Dean" ? 'var(--primary)' : role === "Department Head" ? 'var(--secondary)' : 'var(--tertiary)'}`
    }}>
      <div className="avatar-circle" style={{ 
        width: compact ? '70px' : '100px', 
        height: compact ? '70px' : '100px',
        fontSize: compact ? '1.3rem' : '2rem',
        marginBottom: '10px',
        border: `3px solid ${role === "Department Head" ? 'var(--secondary)' : role === "College Dean" || role === "Associate Dean" ? 'var(--primary)' : 'var(--tertiary)'}`,
        background: 'rgba(25, 23, 22, 0.8)',
        color: 'var(--text-main)',
        fontFamily: 'Outfit',
        fontWeight: 800
      }}>
        {img && img !== "/asset/faculty/default.jpg" ? <img src={img} alt={name} style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} /> : initials}
      </div>
      
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        <h3 style={{ fontSize: compact ? '1.1rem' : '1.25rem', color: 'white', margin: '0 0 10px 0', lineHeight: 1.4, fontFamily: 'Outfit', fontWeight: 700 }}>{name}</h3>
        {role && (
          <span style={{ 
            display: 'inline-block',
            padding: '4px 14px',
            background: badgeStyles.background,
            border: badgeStyles.border,
            color: badgeStyles.color,
            borderRadius: '20px',
            fontSize: '0.8rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '10px'
          }}>
            {role}
          </span>
        )}
        {department && <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--text-muted)', fontWeight: 500, letterSpacing: '0.5px' }}>{department}</p>}
      </div>
    </div>
  );
}

export default FacultyCard;