import Link from "next/link";

const NAV_ITEMS = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/mentorados", label: "Mentorados" },
  { href: "/admin/conteudo", label: "Conteúdo" },
];

export function AdminSidebar() {
  return (
    <aside className="w-56 bg-surface1 border-r border-border min-h-screen p-6 flex flex-col gap-1">
      <div className="mb-8">
        <p className="text-textPrimary font-semibold text-sm">RUNA OS</p>
        <p className="text-textMuted text-xs">Admin</p>
      </div>
      {NAV_ITEMS.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-textMuted hover:text-textPrimary text-sm px-3 py-2 rounded transition-colors hover:bg-surface2"
        >
          {item.label}
        </Link>
      ))}
    </aside>
  );
}
