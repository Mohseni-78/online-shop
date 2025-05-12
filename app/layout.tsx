import './globals.css';
import { Header } from '@/shared/components/Header';
import Providers from '@/app/providers';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa">
      <body className="font-sans">
        <Providers>
          <Header />
          <main className="min-h-screen">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
