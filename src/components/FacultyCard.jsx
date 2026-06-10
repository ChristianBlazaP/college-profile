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
        background: 'rgba(212, 175, 55, 0.08)',
        border: '1px solid rgba(212, 175, 55, 0.25)',
        color: 'var(--secondary)'
      };
    }
    if (roleName === "Department Head") {
      return {
        background: 'rgba(96, 165, 250, 0.08)',
        border: '1px solid rgba(96, 165, 250, 0.25)',
        color: '#60a5fa'
      };
    }
    return {
      background: 'rgba(255, 255, 255, 0.03)',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      color: 'var(--text-muted)'
    };
  };

  const badgeStyles = getBadgeStyles(role);

  return (
    <div className="glass-card faculty-card-item" style={{ 
      padding: compact ? '28px 20px' : '40px 30px', 
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '16px',
      minHeight: compact ? '340px' : '420px',
      justifyContent: 'center',
      position: 'relative'
    }}>
      <div className="avatar-circle" style={{ 
        width: compact ? '80px' : '110px', 
        height: compact ? '80px' : '110px',
        fontSize: compact ? '1.5rem' : '2.2rem',
        marginBottom: '10px',
        background: 'linear-gradient(135deg, rgba(8, 18, 34, 0.95) 0%, rgba(22, 54, 99, 0.6) 100%)',
        color: 'var(--text-main)',
        fontFamily: 'Outfit',
        fontWeight: 800,
        border: role.includes('Dean') ? '2px solid var(--secondary)' : '1px solid rgba(255, 255, 255, 0.12)',
        boxShadow: role.includes('Dean') ? '0 0 20px rgba(212, 175, 55, 0.2)' : '0 8px 16px rgba(0,0,0,0.4)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
        {img && img !== "/asset/faculty/default.jpg" ? (
          <img 
            src={img} 
            alt={name} 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              transition: 'transform 0.4s ease'
            }} 
            className="faculty-avatar-img"
          />
        ) : initials}
      </div>
      
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        <h3 style={{ fontSize: compact ? '1.1rem' : '1.5rem', color: 'white', margin: '0 0 12px 0', lineHeight: 1.3, fontFamily: 'Outfit', fontWeight: 900, letterSpacing: '-0.5px', textTransform: 'capitalize' }}>{name}</h3>
        {role && (
          <span style={{ 
            display: 'inline-block',
            padding: '8px 20px',
            background: badgeStyles.background,
            border: badgeStyles.border,
            color: badgeStyles.color,
            borderRadius: '20px',
            fontSize: '0.75rem',
            fontWeight: 900,
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
            marginBottom: '14px',
            fontFamily: 'Outfit'
          }}>
            {role}
          </span>
        )}
        {department && <p style={{ margin: 0, fontSize: compact ? '0.85rem' : '0.95rem', color: 'var(--text-muted)', fontWeight: 600, letterSpacing: '0.3px', textAlign: 'center', lineHeight: 1.5 }}>{department}</p>}
      </div>
    </div>
  );
}

export default FacultyCard;