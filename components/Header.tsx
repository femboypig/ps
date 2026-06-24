import Link from 'next/link';

export default function Header() {
  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-20 mb-6 border-b border-[var(--color-line)] bg-[color:color-mix(in_srgb,var(--color-page)_88%,white)]/95 backdrop-blur supports-[backdrop-filter]:bg-[color:color-mix(in_srgb,var(--color-page)_80%,white)] sm:mb-8">
      <div className="flex min-h-14 items-center justify-between gap-4 sm:min-h-15">
        <h1 className="text-lg font-medium tracking-tight text-[var(--color-ink)] sm:text-xl">
          <Link href="/" className="border-none transition-colors hover:text-[var(--color-accent)]">
            femboypig<span className="text-[var(--color-accent)]">.</span>
          </Link>
        </h1>

        <nav className="flex items-center gap-5 text-sm text-[var(--color-muted)]">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="border-none transition-colors hover:text-[var(--color-ink)]"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
