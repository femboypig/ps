export default function Footer({ date = '2026-06-13' }: { date?: string }) {
  return (
    <footer className="mt-6 border-t border-[var(--color-line)] pt-4 text-xs text-[var(--color-soft)]">
      <p>Updated {date}</p>
    </footer>
  );
}
