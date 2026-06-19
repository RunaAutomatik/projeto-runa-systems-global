export default function EntregaveisLoading() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <div className="max-w-2xl mx-auto px-6 py-12 space-y-8">
        <div className="animate-pulse">
          <div className="h-7 w-32 bg-surface-2 border border-border rounded" />
        </div>

        <div className="animate-pulse space-y-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="bg-surface-1 border border-border rounded-lg p-4 flex items-start gap-4"
            >
              <div className="h-8 w-8 bg-surface-2 border border-border rounded flex-shrink-0" />
              <div className="flex-1 space-y-2">
                <div className="h-4 w-3/4 bg-surface-2 border border-border rounded" />
                <div className="h-3 w-1/2 bg-surface-1 border border-border rounded" />
              </div>
              <div className="h-6 w-16 bg-surface-1 border border-border rounded flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
