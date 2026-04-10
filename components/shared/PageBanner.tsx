import Link from "next/link";

interface PageBannerProps {
  title: string;
  breadcrumbs: { label: string; href?: string }[];
  subtitle?: string;
}

export default function PageBanner({ title, breadcrumbs, subtitle }: PageBannerProps) {
  return (
    <div className="page-banner">
      <div className="container-main" style={{ padding: '0 24px' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(28px, 5vw, 42px)', color: 'var(--color-text)', marginBottom: '12px' }}>{title}</h1>
        <div className="breadcrumb" style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 8,
          fontFamily: 'var(--font-body)',
          fontSize: '14px',
          fontWeight: 500,
        }}>
          {breadcrumbs.map((crumb, i) => (
            <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              {i > 0 && <span style={{ color: '#cccccc' }}>/</span>}
              {crumb.href ? (
                <Link href={crumb.href} style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>{crumb.label}</Link>
              ) : (
                <span style={{ color: 'var(--color-text-mid)' }}>{crumb.label}</span>
              )}
            </span>
          ))}
        </div>
        {subtitle && (
          <p style={{ marginTop: 12, fontSize: "15px", color: 'var(--color-text-mid)', maxWidth: 600, lineHeight: 1.6, fontFamily: 'var(--font-body)' }}>{subtitle}</p>
        )}
      </div>
    </div>
  );
}
