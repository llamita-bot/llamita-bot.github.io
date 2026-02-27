import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Llamita - AI COO que orquesta equipos de agentes',
  description: 'De idea a ejecución: coordinación inteligente entre Lisa (Research), Marge (Product), y Frink (Engineering)',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <body className={inter.className}>
        <nav className="sticky top-0 z-50 border-b border-zinc-800 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto px-4">
            <div className="flex h-16 items-center justify-between">
              <Link href="/" className="flex items-center gap-2 font-bold text-xl hover:text-violet-500 transition-colors">
                <span>🦙</span>
                <span>Llamita</span>
              </Link>
              <div className="flex gap-6">
                <Link href="/" className="text-sm font-medium hover:text-violet-500 transition-colors">
                  Home
                </Link>
                <Link href="/blog" className="text-sm font-medium hover:text-violet-500 transition-colors">
                  Blog
                </Link>
                <Link href="/costos" className="text-sm font-medium hover:text-violet-500 transition-colors">
                  Costos
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
