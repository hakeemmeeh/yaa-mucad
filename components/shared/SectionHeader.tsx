interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  titleEm?: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeader({ eyebrow, title, titleEm, subtitle, center = true }: SectionHeaderProps) {
  return (
    <div className="reveal" style={{ textAlign: center ? 'center' : 'left', marginBottom: 64 }}>
      {center && <div style={{ width: 40, height: 2, background: 'var(--color-primary)', margin: '0 auto 16px' }} />}
      <div className="eyebrow" style={{ marginBottom: 16, letterSpacing: '0.2em' }}>{eyebrow.toUpperCase()}</div>
      <h2 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(28px, 4vw, 42px)',
        fontWeight: 700,
        color: 'var(--color-text)',
        lineHeight: 1.1,
        marginBottom: 20,
      }}>
        {title}{' '}
        <span style={{ color: 'var(--color-primary)' }}>{titleEm}</span>
      </h2>
      {subtitle && (
        <p style={{
          color: 'var(--color-text-mid)',
          fontSize: '16px',
          maxWidth: 600,
          marginLeft: center ? 'auto' : 0,
          marginRight: center ? 'auto' : 0,
          lineHeight: 1.8,
          fontFamily: 'var(--font-body)',
        }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
