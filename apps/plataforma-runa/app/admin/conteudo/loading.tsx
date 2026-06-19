export default function ConteudoLoading() {
  const cols = [240, 80, 100, 120, 80, 80, 60];
  return (
    <div className="space-y-6 animate-pulse">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <div className="h-7 w-36 bg-surface-1 border border-border rounded" />
          <div className="h-4 w-52 bg-surface-1 border border-border rounded" />
        </div>
        <div className="h-9 w-32 bg-surface-1 border border-border rounded-lg" />
      </div>
      <div className="bg-surface-1 border border-border rounded-lg overflow-hidden">
        <div className="border-b border-border px-6 py-3 flex gap-4">
          {cols.map((w, i) => (
            <div
              key={i}
              className="h-3 bg-surface-2 border border-border rounded"
              style={{ width: w }}
            />
          ))}
        </div>
        {[0, 1, 2, 3, 4].map((row) => (
          <div
            key={row}
            className="border-b border-border last:border-0 px-6 py-4 flex gap-4 items-center"
          >
            {cols.map((w, i) => (
              <div
                key={i}
                className="h-4 bg-surface-2 border border-border rounded"
                style={{ width: w * 0.75 }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
