export default function SessoesLoading() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-8">
        <div className="animate-pulse space-y-3">
          <div className="h-5 w-32 bg-surface-2 border border-border rounded" />
          <div className="h-3 w-48 bg-surface-1 border border-border rounded" />
        </div>
        <div className="animate-pulse space-y-3">
          {Array.from({ length: 7 }).map((_, i) => (
            <div
              key={i}
              className="bg-surface-1 border border-border rounded-lg p-5 h-16"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
