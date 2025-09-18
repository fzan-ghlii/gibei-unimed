// app/kontak/page.tsx
'use client';

import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';
import { FaInstagram, FaTiktok, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';

export default function KontakPage() {
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="w-6 h-6 text-[#1a4162]" />,
      title: 'Alamat Sekretariat',
      content: 'Gedung Fakultas Ekonomi, Universitas Negeri Medan, Jl. Willem Iskandar / Ps. V, Medan, Sumatera Utara',
    },
    {
      icon: <FaEnvelope className="w-6 h-6 text-[#1a4162]" />,
      title: 'Email Resmi',
      content: 'gibeiunimed@gmail.com',
      href: 'mailto:gibeiunimed@gmail.com',
    },
    {
      icon: <FaInstagram className="w-6 h-6 text-[#1a4162]" />,
      title: 'Instagram',
      content: '@gibei_unimed',
      href: 'https://instagram.com/gibei_unimed',
    },
    {
      icon: <FaTiktok className="w-6 h-6 text-[#1a4162]" />,
      title: 'TikTok',
      content: '@gibei_unimed',
      href: '#', // Ganti dengan URL TikTok Anda
    },
    {
      icon: <FaLinkedin className="w-6 h-6 text-[#1a4162]" />,
      title: 'LinkedIn',
      content: 'GIBEI UNIMED',
      href: '#', // Ganti dengan URL LinkedIn Anda
    },
  ];

  return (
    <div>
      <PageHeader
        title="Hubungi Kami"
        subtitle="Kami senang bisa terhubung dengan Anda. Silakan hubungi kami melalui salah satu saluran di bawah ini."
      />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Kolom Informasi Kontak */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-[#1a4162] mb-6">Detail Kontak</h2>
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-[#1a4162]">{item.title}</h3>
                  {item.href ? (
                    <Link href={item.href} target="_blank" rel="noopener noreferrer" className="text-[#333333] hover:text-[#1a4162] transition-colors break-words">
                      {item.content}
                    </Link>
                  ) : (
                    <p className="text-[#333333] break-words">{item.content}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Kolom Peta */}
        <motion.div
          className="overflow-hidden rounded-xl shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.913224266593!2d98.7192460747853!3d3.6073341963667818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3031316e57f2416b%3A0xd703ff9a0d615325!2sFakultas%20Ekonomi%20(FE)%20-%20Unimed!5e0!3m2!1sid!2sid!4v1758170316516!5m2!1sid!2sid"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi GIBEI UNIMED"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
}
