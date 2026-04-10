interface CertBadgeProps {
  label: string;
}

export default function CertBadge({ label }: CertBadgeProps) {
  return <span className="cert-badge">✓ {label}</span>;
}
