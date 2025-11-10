export function Skeleton({ className }: { className?: string }) {
  return <div className={`shimmer rounded-md bg-white/5 ${className || ""}`} />;
}
