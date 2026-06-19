import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg">
      <div
        className="max-w-[1320px] mx-auto h-16 flex items-center justify-between"
        style={{ padding: "0 clamp(1.5rem, 5vw, 4rem)" }}
      >
        <Link
          href="/"
          className="font-outfit font-bold text-text text-lg"
          style={{ letterSpacing: "-0.02em" }}
        >
          RUNA OS
        </Link>

        <div className="flex items-center gap-3 sm:gap-5">
          <ThemeToggle />
          <Link
            href="/entrar"
            className="hidden sm:block text-sm text-muted hover:text-text transition-colors"
          >
            Entrar
          </Link>
          <Link
            href="/planos"
            className="text-sm font-bold px-4 py-2 bg-accent text-[#1A2219] rounded-lg hover:brightness-95 transition-all font-outfit"
          >
            Ver planos
          </Link>
        </div>
      </div>
    </header>
  );
}
