import Header from '@/components/Header';
import Footer from '@/components/Footer';
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

  return (
    <>
      <Header />

      <main className="flex flex-col gap-12">
        {/* Bio */}
        <section className="space-y-5">
          <p className="leading-[1.8] text-neutral-600 dark:text-neutral-400 text-sm sm:text-base">
            Hi! I’m an independent developer who refuses to be boxed into a single niche. While my current core weapon of choice is a high-performance stack of <span className="text-neutral-800 dark:text-neutral-200 font-bold">Rust and C++</span>, I adapt to and dominate whatever domain I touch. I don't believe in boundaries—whether it's low-level systems, high-level architecture, complex integrations, or software and hardware engineering, I master the entire stack. I build with an Open Source philosophy, stripping away bloated frameworks in favor of absolute minimalism, speed, and raw efficiency.
          </p>
          <p className="leading-[1.8] text-neutral-600 dark:text-neutral-400 text-sm sm:text-base">
            Right now, I am simultaneously building <span className="text-neutral-800 dark:text-neutral-200 font-bold">darwincode</span>, a lightweight TUI AI coding assistant under the MIT license, and <span className="text-neutral-800 dark:text-neutral-200 font-bold">Garage</span>, a supercharged, GPU-accelerated text editor built for extreme speed and performance. I don't just write code; I fully control my environment, from managing and tailoring my main Arch Linux system to forcing any tech to do exactly what I want.
          </p>
          <p className="leading-[1.8] text-neutral-600 dark:text-neutral-400 text-sm sm:text-base">
            I don’t specialize in just one field—I master the entire system, under the hood and out in the real world.
          </p>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-lg font-bold mb-4 flex items-center text-neutral-800 dark:text-neutral-100">
            <span className="text-pink-500 dark:text-pink-400 mr-2">❯</span>
            projects
          </h2>
          <div className="divide-y divide-neutral-200 dark:divide-neutral-800/80">
            {projects.map((p) => (
              <div
                key={p.name}
                className="group py-5 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 transition-all duration-300"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1.5">
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-base font-bold text-neutral-900 dark:text-neutral-100 border-none hover:text-pink-500 dark:hover:text-pink-400 transition-colors duration-300"
                    >
                      {p.name}
                    </a>
                    <span className="text-[10px] text-neutral-400 dark:text-neutral-600 font-mono select-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      ↗
                    </span>
                  </div>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-xl">
                    {p.description}
                  </p>
                </div>
                <div className="shrink-0 text-xs text-neutral-400 dark:text-neutral-500 font-mono select-none group-hover:text-pink-500/70 transition-colors duration-300 sm:pt-1">
                  github.com ↗
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-lg font-bold mb-6 flex items-center text-neutral-800 dark:text-neutral-100">
            <span className="text-pink-500 dark:text-pink-400 mr-2">❯</span>
            contact
          </h2>
          <div className="text-sm text-neutral-500 dark:text-neutral-400 mb-6 flex flex-col gap-3 font-mono">
            <div className="flex items-baseline">
              <span className="w-20 font-bold text-neutral-800 dark:text-neutral-200 shrink-0">email:</span>
              <a href="mailto:harimassaa@gmail.com" className="border-b border-neutral-300 dark:border-neutral-700 hover:border-pink-500 dark:hover:border-pink-400 transition-colors">
                harimassaa@gmail.com
              </a>
            </div>
            <div className="flex items-baseline">
              <span className="w-20 font-bold text-neutral-800 dark:text-neutral-200 shrink-0">github:</span>
              <a href="https://github.com/femboypig" target="_blank" rel="noopener noreferrer" className="border-b border-neutral-300 dark:border-neutral-700 hover:border-pink-500 dark:hover:border-pink-400 transition-colors">
                github.com/femboypig
              </a>
            </div>
            <div className="flex items-baseline">
              <span className="w-20 font-bold text-neutral-800 dark:text-neutral-200 shrink-0">telegram:</span>
              <a href="https://t.me/zigmonster" target="_blank" rel="noopener noreferrer" className="border-b border-neutral-300 dark:border-neutral-700 hover:border-pink-500 dark:hover:border-pink-400 transition-colors">
                t.me/zigmonster
              </a>
            </div>
            <div className="flex items-start">
              <span className="w-20 font-bold text-neutral-800 dark:text-neutral-200 shrink-0">pgp:</span>
              <span className="break-all text-neutral-600 dark:text-neutral-300 select-all selection:bg-pink-500 selection:text-white">
                3899694CD2EE5C4AC0521D2776E8D9D181117FE0
              </span>
            </div>
          </div>
          <PgpKey />
        </section>
      </main>

      <Footer date="2026-06-13" />
    </>
  );
}
