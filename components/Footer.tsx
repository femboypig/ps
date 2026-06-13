export default function Footer({ date = '2026-06-13' }: { date?: string }) {
  return (
    <footer className="mt-16 pt-6 border-t border-neutral-200 dark:border-neutral-800 text-xs text-neutral-400 dark:text-neutral-500">
      <p>Last updated: {date}</p>
    </footer>
  );
}
