interface GoogleLogoProps {
  className?: string;
}

export const GoogleLogo = ({ className = '' }: GoogleLogoProps) => (
  <span className={`font-bold tracking-tight bg-white rounded px-1.5 py-0.5 ${className}`} aria-label="Google">
    <span style={{ color: '#4285F4' }}>G</span>
    <span style={{ color: '#EA4335' }}>o</span>
    <span style={{ color: '#FBBC04' }}>o</span>
    <span style={{ color: '#4285F4' }}>g</span>
    <span style={{ color: '#34A853' }}>l</span>
    <span style={{ color: '#EA4335' }}>e</span>
  </span>
);
