export default function ProgressoLoading() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <div className="max-w-2xl mx-auto px-6 py-12 space-y-10">
        <div className="animate-pulse space-y-2">
          <div className="h-7 w-28 bg-surface-2 border border-border rounded" />
          <div className="h-4 w-40 bg-surface-1 border border-border rounded" />
        </div>

        <div className="animate-pulse space-y-4">
          {["V1", "V2", "V3"].map((stage) => (
            <div
              key={stage}
              className="bg-surface-1 border border-border rounded-lg p-5 space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="h-4 w-8 bg-surface-2 border border-border rounded" />
                <div className="h-4 w-20 bg-surface-1 border border-border rounded" />
              </div>
              <div className="space-y-2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-3 bg-surface-1 border border-border rounded"
                    style={{ width: `${70 + (i % 3) * 10}%` }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="animate-pulse space-y-3">
          <div className="h-4 w-24 bg-surface-2 border border-border rounded" />
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="bg-surface-1 border border-border rounded-lg p-4 h-14"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
