'use client'; 

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiUsers, FiAward, FiInstagram } from 'react-icons/fi';
import { FaTiktok } from 'react-icons/fa';
import HeroCarousel from '@/components/HeroCarousel';

export default function HomePage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const features = [
    {
      icon: <FiTrendingUp className="h-10 w-10 text-[#e6d9c6]" />,
      title: 'Edukasi Pasar Modal',
      description: 'Belajar investasi saham dan instrumen pasar modal lainnya dari dasar hingga mahir bersama para ahli.',
    },
    {
      icon: <FiUsers className="h-10 w-10 text-[#e6d9c6]" />,
      title: 'Relasi & Jaringan Luas',
      description: 'Terhubung dengan sesama mahasiswa, akademisi, dan praktisi di industri jasa keuangan.',
    },
    {
      icon: <FiAward className="h-10 w-10 text-[#e6d9c6]" />,
      title: 'Pengalaman Profesional',
      description: 'Asah soft skills dan hard skills melalui berbagai program kerja dan kegiatan organisasi yang nyata.',
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* Hero Section Statis */}
      <motion.section
        className="text-center py-8 sm:py-10"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#1a4162] mb-4">
          Gerbang Anda ke Dunia Pasar Modal
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-[#333333] max-w-3xl mx-auto mb-8">
          Galeri Investasi Bursa Efek Indonesia UNIMED adalah wadah bagi mahasiswa untuk belajar, bertumbuh, dan berinovasi di dunia investasi.
        </p>
        <Link 
          href="/tentang"
          className="bg-[#1a4162] text-white font-bold py-3 px-6 sm:px-8 rounded-full hover:bg-opacity-90 transition-transform transform hover:scale-105 duration-300 shadow-lg text-sm sm:text-base"
        >
          Jelajahi Lebih Lanjut
        </Link>
      </motion.section>

      {/* Hero Carousel */}
      <section>
         <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#1a4162] mb-8 sm:mb-12">
          Momen Kegiatan Kami
        </h2>
        <HeroCarousel />
      </section>

      {/* Features Section */}
      <section>
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#1a4162] mb-8 sm:mb-12">
          Mengapa Bergabung dengan GIBEI UNIMED?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group perspective h-80 outline-none"
              tabIndex={0}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="relative preserve-3d group-hover:rotate-y-180 group-focus:rotate-y-180 w-full h-full duration-500">
                <div className="absolute backface-hidden w-full h-full bg-[#1a4162] p-6 sm:p-8 rounded-xl text-center shadow-lg flex flex-col justify-center">
                    <div className="flex justify-center items-center mb-4 bg-white/10 rounded-full w-16 h-16 sm:w-20 sm:h-20 mx-auto">
                        {feature.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-sm sm:text-base text-[#e6d9c6]">{feature.description}</p>
                </div>
                <div className="absolute rotate-y-180 backface-hidden w-full h-full bg-white rounded-xl shadow-lg flex flex-col justify-center items-center text-center p-6">
                    <h3 className="text-2xl font-bold text-[#1a4162] mb-4">Siap Bergabung?</h3>
                    <p className="text-[#333333] mb-6">Jadilah bagian dari kami dan mulailah perjalanan investasimu!</p>
                    <Link href="/kontak" className="bg-[#1a4162] text-white font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition-all duration-300">
                        Hubungi Kami
                    </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Social Media Call to Action */}
      <section className="bg-white/60 p-6 sm:p-10 rounded-xl shadow-md text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1a4162] mb-4">Tetap Terhubung Dengan Kami!</h2>
        <p className="text-[#333333] mb-8 max-w-2xl mx-auto text-sm sm:text-base">
          Ikuti akun media sosial kami untuk mendapatkan informasi terbaru seputar kegiatan, edukasi, dan pendaftaran anggota baru.
        </p>
        <div className="flex justify-center items-center space-x-6">
          <a href="https://instagram.com/gibei_unimed" target="_blank" rel="noopener noreferrer" className="text-[#1a4162] hover:text-[#333333] transition-all duration-300 hover:-translate-y-1">
            <FiInstagram size={32} className="sm:w-10 sm:h-10"/>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#1a4162] hover:text-[#333333] transition-all duration-300 hover:-translate-y-1">
            <FaTiktok size={28} className="sm:w-9 sm:h-9"/>
          </a>
        </div>
      </section>
    </div>
  );
}

