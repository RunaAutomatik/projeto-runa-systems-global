interface ProfileCardProps {
  profile: {
    full_name: string | null;
    email: string;
    mentee_slug: string | null;
  };
}

export function ProfileCard({ profile }: ProfileCardProps) {
  const initial = profile.full_name?.[0]?.toUpperCase() ?? "?";

  return (
    <div className="bg-surface1 border border-border rounded-lg p-6 flex items-start gap-4">
      <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-textPrimary font-semibold text-lg flex-shrink-0">
        {initial}
      </div>
      <div className="space-y-1">
        <h1 className="text-textPrimary font-semibold text-xl">
          {profile.full_name ?? "Mentorado"}
        </h1>
        <p className="text-textMuted text-sm">{profile.email}</p>
        <p className="text-textMuted text-xs">
          Mentor: <span className="text-textPrimary">Arthur Runa</span>
        </p>
      </div>
    </div>
  );
}
