import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: 'olive' | 'outline' | 'ghost';
  className?: string;
  style?: React.CSSProperties;
}

export default function Button({ href, onClick, children, variant = 'olive', className = "", style }: ButtonProps) {
  const baseClass = variant === 'olive' ? 'btn-olive' : variant === 'outline' ? 'btn-outline' : 'nav-link';
  
  if (href) {
    return (
      <Link href={href} className={`${baseClass} ${className}`} style={style}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${baseClass} ${className}`} style={style}>
      {children}
    </button>
  );
}
