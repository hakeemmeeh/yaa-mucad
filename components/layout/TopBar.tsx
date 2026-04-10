export default function TopBar() {
  return (
    <div style={{ background: 'var(--color-primary-dk)', color: 'white', fontSize: 13, fontFamily: 'var(--font-body)' }}>
      <div className="container-main" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 24px', flexWrap: 'wrap', gap: 8 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
          <span>📧 exports@yaamucaad.com</span>
          <span>📍 Nairobi, Kenya</span>
        </div>
        <div style={{ opacity: 0.85 }}>
          🕐 Mon–Fri 08:00–17:00 EAT (UTC+3)
        </div>
      </div>
    </div>
  );
}
