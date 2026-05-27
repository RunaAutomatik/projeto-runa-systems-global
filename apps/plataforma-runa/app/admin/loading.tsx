export default function AdminLoading() {
  return (
    <div className="space-y-8 animate-pulse">
      <div className="space-y-2">
        <div className="h-7 w-32 bg-surface-1 border border-border rounded" />
        <div className="h-4 w-48 bg-surface-1 border border-border rounded" />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="bg-surface-1 border border-border rounded-lg p-6 space-y-3"
          >
            <div className="h-3 w-24 bg-surface-2 border border-border rounded" />
            <div className="h-8 w-16 bg-surface-2 border border-border rounded" />
          </div>
        ))}
      </div>
      <div className="bg-surface-1 border border-border rounded-lg p-6 space-y-4">
        <div className="h-4 w-36 bg-surface-2 border border-border rounded" />
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="flex gap-4 py-2 border-b border-border last:border-0"
          >
            <div className="h-4 w-32 bg-surface-2 border border-border rounded" />
            <div className="h-4 w-24 bg-surface-2 border border-border rounded" />
            <div className="h-4 w-16 bg-surface-2 border border-border rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}
