import Link from 'next/link';

export default function Header() {
  return (
    <header className="mb-12 pb-6 border-b border-neutral-200 dark:border-neutral-800">
      <h1 className="text-xl font-bold tracking-tight">
        <Link href="/" className="border-none hover:border-none transition-colors hover:text-pink-500 dark:hover:text-pink-400">
          archlinux:<span className="text-pink-500 dark:text-pink-400">femboypig</span>$
        </Link>
      </h1>
    </header>
  );
}
