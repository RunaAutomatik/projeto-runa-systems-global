"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function navItems(slug: string) {
  return [
    { href: `/${slug}/home`, label: "Home" },
    { href: `/${slug}/sessoes`, label: "Sessões" },
    { href: "/biblioteca", label: "Biblioteca" },
    { href: `/${slug}/progresso`, label: "Progresso" },
    { href: `/${slug}/entregaveis`, label: "Entregáveis" },
    { href: `/${slug}/squad`, label: "Squad" },
  ];
}

const mobileNavItems = (slug: string) => [
  { href: `/${slug}/home`, label: "Home" },
  { href: `/${slug}/sessoes`, label: "Sessões" },
  { href: "/biblioteca", label: "Biblioteca" },
  { href: `/${slug}/progresso`, label: "Progresso" },
];

export function MenteeSidebar({ menteeSlug }: { menteeSlug: string }) {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === `/${menteeSlug}/home`
      ? pathname === href || pathname === `/${menteeSlug}`
      : pathname.startsWith(href);

  return (
    <>
      {/* Desktop sidebar — hidden on mobile */}
      <aside className="hidden md:flex w-56 bg-surface-1 border-r border-border min-h-screen p-6 flex-col gap-1 shrink-0">
        <div className="mb-6">
          <span className="text-xs font-mono text-muted uppercase tracking-widest">
            MENTI
          </span>
        </div>
        <nav className="flex flex-col gap-1">
          {navItems(menteeSlug).map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={
                isActive(href)
                  ? "text-text bg-surface-2 text-sm px-3 py-3 rounded transition-colors"
                  : "text-muted hover:text-text text-sm px-3 py-3 rounded transition-colors hover:bg-surface-2"
              }
            >
              {label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Mobile bottom nav — hidden on desktop */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-surface-1 border-t border-border flex items-center justify-around h-16">
        {mobileNavItems(menteeSlug).map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={
              isActive(href)
                ? "flex flex-col items-center justify-center flex-1 h-full text-text text-xs font-mono"
                : "flex flex-col items-center justify-center flex-1 h-full text-muted text-xs font-mono"
            }
          >
            {label}
          </Link>
        ))}
      </nav>
    </>
  );
}
