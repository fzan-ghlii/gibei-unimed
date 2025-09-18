import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'GIBEI UNIMED - Galeri Investasi Bursa Efek Indonesia',
  description: 'Website profil resmi GIBEI UNIMED.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#e6d9c6] text-[#333333] flex flex-col min-h-screen`}>
        <Navbar />
        {/* Padding top ditambahkan untuk memberi ruang bagi Navbar yang 'fixed' */}
        <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 flex-grow pt-24 sm:pt-28">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

