import type { MilestoneId } from "@/lib/milestones";

interface Milestone {
  id: MilestoneId;
  label: string;
}

interface Props {
  milestones: readonly Milestone[];
  completed: Set<MilestoneId>;
}

export function MilestoneChecklist({ milestones, completed }: Props) {
  return (
    <ul className="space-y-2">
      {milestones.map((m) => {
        const done = completed.has(m.id);
        return (
          <li key={m.id} className="flex items-center gap-2.5">
            <span
              className={`w-4 h-4 rounded-full border flex-shrink-0 flex items-center justify-center ${
                done
                  ? "bg-accent border-accent"
                  : "border-border bg-transparent"
              }`}
            >
              {done && (
                <svg
                  viewBox="0 0 8 8"
                  className="w-2.5 h-2.5 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <polyline points="1,4 3,6 7,2" />
                </svg>
              )}
            </span>
            <span
              className={`text-sm ${done ? "text-textPrimary" : "text-textMuted"}`}
            >
              {m.label}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
