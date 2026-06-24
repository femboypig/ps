import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'femboypig',
  description: 'web, desktop, rust development',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[var(--color-page)] text-[var(--color-ink)] antialiased lg:overflow-hidden">
        <div className="min-h-screen px-5 pt-0 pb-4 sm:px-8 sm:pt-0 sm:pb-6 lg:h-screen lg:py-5">
          <div className="mx-auto h-full max-w-6xl">
          {children}
          </div>
        </div>
      </body>
    </html>
  );
}
