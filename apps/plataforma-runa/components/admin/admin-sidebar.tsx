"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/mentorados", label: "Mentorados" },
  { href: "/admin/conteudo", label: "Conteúdo" },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-56 bg-surface-1 border-r border-border min-h-screen p-6 flex flex-col gap-1">
      <div className="mb-8">
        <p className="text-text font-semibold text-sm">RUNA OS</p>
        <p className="text-muted text-xs">Admin</p>
      </div>
      {NAV_ITEMS.map((item) => {
        const isActive =
          item.href === "/admin"
            ? pathname === "/admin"
            : pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={
              isActive
                ? "text-text bg-surface-2 text-sm px-3 py-2 rounded transition-colors"
                : "text-muted hover:text-text text-sm px-3 py-2 rounded transition-colors hover:bg-surface-2"
            }
          >
            {item.label}
          </Link>
        );
      })}
    </aside>
  );
}
