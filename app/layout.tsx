import { Inter } from 'next/font/google';
import 'normalize.css';
import './globals.css';
import './reset.css';
import Header from '@/components/Header/Header';
import TanStackProvider from '@/providers/TanStackProvider/TanStackProvider';
import { Toaster } from 'sonner';

const interSans = Inter({
  variable: '--font-inter-sans',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${interSans.variable} `}>
      <body>
        <TanStackProvider>
          <Header />
          <main>{children}</main>
          <Toaster position="top-right" />
        </TanStackProvider>
      </body>
    </html>
  );
}
