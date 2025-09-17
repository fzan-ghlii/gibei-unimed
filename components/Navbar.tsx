'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // <-- Impor komponen Image
import { usePathname } from 'next/navigation'; // <-- Impor hook untuk active link
import { HiMenu, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname(); // <-- Dapatkan path halaman saat ini

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/tentang', label: 'Tentang GIBEI' },
    { href: '/struktur', label: 'Struktur Organisasi' },
    { href: '/kegiatan', label: 'Kegiatan Divisi' },
    { href: '/prestasi', label: 'Prestasi' },
    { href: '/galeri', label: 'Galeri' },
    { href: '/kontak', label: 'Kontak' },
  ];

  return (
    <nav className={`bg-[#1a4162] sticky top-0 z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-lg' : 'shadow-md'}`}>
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo dan Nama Organisasi */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.svg" // PASTIKAN Anda memiliki logo.svg di folder /public
            alt="GIBEI UNIMED Logo"
            width={40}
            height={40}
            className="bg-white rounded-full p-1" // Hapus bg-white jika logo Anda sudah terang
          />
          <span className="text-xl font-bold text-white hidden sm:block">
            GIBEI UNIMED
          </span>
        </Link>

        {/* Menu Desktop */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
             <Link key={link.href} href={link.href} className={`transition-colors duration-300 ${
                pathname === link.href
                  ? 'text-white font-semibold border-b-2 border-white' // Style untuk link aktif
                  : 'text-[#e6d9c6] hover:text-white' // Style normal
              }`}>
              {link.label}
            </Link>
          ))}
        </div>
        
        {/* Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-[#e6d9c6] focus:outline-none">
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-[#1a4162]/95 absolute top-full left-0 w-full backdrop-blur-sm"
          >
            <div className="flex flex-col items-center space-y-6 py-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-lg transition-colors duration-300 ${
                    pathname === link.href
                      ? 'text-white font-bold'
                      : 'text-[#e6d9c6] hover:text-white'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

