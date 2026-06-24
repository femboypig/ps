import Header from '@/components/Header';
import PgpKey from '@/components/PgpKey';

export default function Home() {
  const projects = [
    {
      name: 'darwincode',
      href: 'https://github.com/femboypig/darwincode',
      description: 'Open source terminal AI coding agent.',
    },
    {
      name: 'Garage',
      href: 'https://github.com/femboypig/Garage',
      description: 'A supercharged GPU-accelerated text editor.',
    },
  ];

  const contactItems = [
    {
      label: 'Email',
      value: 'harimassaa@gmail.com',
      href: 'mailto:harimassaa@gmail.com',
    },
    {
      label: 'GitHub',
      value: 'github.com/femboypig',
      href: 'https://github.com/femboypig',
    },
    {
      label: 'Telegram',
      value: 't.me/zigmonster',
      href: 'https://t.me/zigmonster',
    },
  ];

  return (
    <div className="lg:flex lg:h-full lg:min-h-0 lg:flex-col">
      <Header />

      <main className="grid gap-8 lg:min-h-0 lg:flex-1 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.35fr)] lg:gap-14">
        <section className="hidden lg:block lg:h-full">
          <div className="space-y-6 pt-4">
            <p className="inline-flex rounded-full border border-[var(--color-line)] bg-[var(--color-panel)] px-3 py-1 font-sans text-[11px] font-medium uppercase tracking-[0.08em] text-[var(--color-soft)]">
              Independent engineer
            </p>
            <div className="space-y-5">
              <h2 className="max-w-xl font-serif text-4xl leading-[1.02] font-medium tracking-tight text-[var(--color-ink)] sm:text-5xl lg:text-6xl">
                Independent developer across systems, interfaces, and the machinery underneath.
              </h2>
              <p className="max-w-lg text-base leading-7 text-[var(--color-muted)] sm:text-lg">
                Rust and C++ are the current center, but the real through-line is control: low-level software, high-level architecture, complex integrations, and tools built for speed without bloat.
              </p>
            </div>
          </div>
        </section>

        <div className="flex min-h-0 flex-col">
          <section className="space-y-6 border-b border-[var(--color-line)] pb-8 lg:hidden">
            <p className="inline-flex rounded-full border border-[var(--color-line)] bg-[var(--color-panel)] px-3 py-1 font-sans text-[11px] font-medium uppercase tracking-[0.08em] text-[var(--color-soft)]">
              Independent engineer
            </p>
            <div className="space-y-4">
              <h2 className="max-w-xl font-serif text-4xl leading-[1.02] font-medium tracking-tight text-[var(--color-ink)] sm:text-5xl">
                Independent developer across systems, interfaces, and the machinery underneath.
              </h2>
              <p className="max-w-lg text-base leading-7 text-[var(--color-muted)]">
                Rust and C++ are the current center, but the real through-line is control: low-level software, high-level architecture, complex integrations, and tools built for speed without bloat.
              </p>
            </div>
          </section>

          <div className="space-y-12 pt-4 lg:min-h-0 lg:flex-1 lg:space-y-14 lg:overflow-y-auto lg:pr-3 lg:pt-4 lg:pb-8">
          <section id="about" className="border-b border-[var(--color-line)] pb-10 sm:pb-12">
            <div className="mb-6 flex items-center justify-between gap-4">
              <p className="font-sans text-xs font-medium uppercase tracking-[0.08em] text-[var(--color-accent)]">
                About
              </p>
            </div>
            <div className="max-w-2xl space-y-5 text-[15px] leading-7 text-[var(--color-muted)] sm:text-base">
              <p>
                Hi! I&apos;m an independent developer who refuses to be boxed into a single niche. While my current core weapon of choice is a high-performance stack of <span className="font-medium text-[var(--color-ink)]">Rust and C++</span>, I adapt to and dominate whatever domain I touch. I don&apos;t believe in boundaries, whether it&apos;s low-level systems, high-level architecture, complex integrations, or software and hardware engineering, I master the entire stack. I build with an Open Source philosophy, stripping away bloated frameworks in favor of absolute minimalism, speed, and raw efficiency.
              </p>
              <p>
                Right now, I am simultaneously building <span className="font-medium text-[var(--color-ink)]">darwincode</span>, a lightweight TUI AI coding assistant under the MIT license, and <span className="font-medium text-[var(--color-ink)]">Garage</span>, a supercharged, GPU-accelerated text editor built for extreme speed and performance. I don&apos;t just write code; I fully control my environment, from managing and tailoring my main Arch Linux system to forcing any tech to do exactly what I want.
              </p>
              <p>
                I don&apos;t specialize in just one field, I master the entire system, under the hood and out in the real world.
              </p>
            </div>
          </section>

          <section id="projects" className="border-b border-[var(--color-line)] pb-10 sm:pb-12">
            <div className="mb-8 flex items-center justify-between gap-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-soft)]">
                Selected work
              </p>
            </div>
            <div className="space-y-8">
              {projects.map((project) => (
                <article key={project.name} className="group border-b border-[var(--color-line)] pb-8 last:border-b-0 last:pb-0">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="max-w-xl">
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 border-none font-serif text-2xl font-medium tracking-tight text-[var(--color-ink)] transition-colors hover:text-[var(--color-accent)]"
                      >
                        {project.name}
                        <span className="text-sm transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                          ↗
                        </span>
                      </a>
                      <p className="mt-2 text-[15px] leading-7 text-[var(--color-muted)]">
                        {project.description}
                      </p>
                    </div>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-fit border-none font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--color-soft)] transition-colors hover:text-[var(--color-ink)]"
                    >
                      Source
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="contact" className="pb-2">
            <div className="mb-8 flex items-center justify-between gap-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-soft)]">
                Contact
              </p>
            </div>
            <div className="space-y-4">
              {contactItems.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col gap-1 border-b border-[var(--color-line)] pb-4 sm:flex-row sm:items-baseline sm:justify-between"
                >
                  <span className="text-sm text-[var(--color-muted)]">{item.label}</span>
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="w-fit border-none text-[15px] text-[var(--color-ink)] transition-colors hover:text-[var(--color-accent)]"
                  >
                    {item.value}
                  </a>
                </div>
              ))}
            </div>
            <PgpKey />
          </section>
          </div>
        </div>
      </main>
    </div>
  );
}
