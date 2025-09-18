import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GIBEI UNIMED - Galeri Investasi Bursa Efek Indonesia',
  description: 'Website profil resmi GIBEI UNIMED.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* SOLUSI: Kita terapkan warna background dan text di sini.
        Ini cara yang benar agar tidak menimpa elemen lain.
      */}
      <body className={`${inter.className} bg-[#e6d9c6] text-[#333333] flex flex-col min-h-screen`}>
        <Navbar />
        <main className="container mx-auto px-6 py-12 flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

