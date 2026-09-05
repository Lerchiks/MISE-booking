import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'MISE BOOKING',
  description: 'Забронируй свой столик легко!',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${geistSans.variable}antialiased`}>
      <body className="min-h-screen flex flex-col">
        <main className="flex-1">{children}</main>
        <footer>
          <a href="https://github.com/Lerchiks" target="_blank">
            GitHub
          </a>
        </footer>
      </body>
    </html>
  );
}
