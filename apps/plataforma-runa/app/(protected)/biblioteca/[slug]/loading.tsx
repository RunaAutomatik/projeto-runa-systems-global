export default function Loading() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 animate-pulse">
      {/* Back link skeleton */}
      <div className="h-4 w-24 bg-surface-2 rounded mb-8" />

      {/* Title skeleton */}
      <div className="h-7 w-2/3 bg-surface-2 rounded mb-3" />
      <div className="h-4 w-1/3 bg-surface-2 rounded mb-8" />

      {/* Player skeleton */}
      <div className="w-full aspect-video bg-surface-2 rounded-lg" />
    </div>
  );
}
