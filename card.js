export function Card({ children, className }) {
  return <div className={`bg-white shadow-md p-2 rounded-lg ${className}`}>{children}</div>;
}

export function CardContent({ children, className }) {
  return <div className={className}>{children}</div>;
}