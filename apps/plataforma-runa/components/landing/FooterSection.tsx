import Link from "next/link";

const LINKS = [
  { href: "/planos", label: "Planos" },
  { href: "/entrar", label: "Entrar" },
];

export function FooterSection() {
  return (
    <footer className="bg-surface-2 border-t border-border">
      <div
        className="max-w-[1320px] mx-auto py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        style={{ padding: "2.5rem clamp(1.5rem, 5vw, 4rem)" }}
      >
        <div className="flex flex-col gap-1.5">
          <span
            className="font-outfit font-bold text-text"
            style={{ letterSpacing: "-0.02em" }}
          >
            RUNA OS
          </span>
          <span className="text-muted text-xs">
            Reestruturação Universal Neural Adaptativa
          </span>
        </div>

        <nav className="flex items-center gap-6">
          {LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm text-muted hover:text-text transition-colors"
            >
              {label}
            </Link>
          ))}
          <a
            href="https://instagram.com/arthsystems_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-text transition-colors"
          >
            @arthsystems_
          </a>
        </nav>

        <p className="text-muted text-xs sm:text-right">&copy; 2026 RUNA OS</p>
      </div>
    </footer>
  );
}
