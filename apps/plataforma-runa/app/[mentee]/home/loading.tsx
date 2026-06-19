export default function Loading() {
  return (
    <div className="min-h-screen bg-bg">
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-12 animate-pulse">
        <div className="h-24 bg-surface-1 border border-border rounded-lg" />
        <div className="h-32 bg-surface-1 border border-border rounded-lg" />
        <div className="h-32 bg-surface-1 border border-border rounded-lg" />
        <div className="h-32 bg-surface-1 border border-border rounded-lg" />
      </div>
    </div>
  );
}
