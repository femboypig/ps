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
      <body className="font-mono text-base leading-relaxed bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-100 antialiased">
        <div className="max-w-2xl mx-auto px-6 py-16">
          {children}
        </div>
      </body>
    </html>
  );
}
