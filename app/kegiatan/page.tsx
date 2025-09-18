'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { kegiatanDivisi, type KegiatanDivisi, type Kegiatan } from '@/data/kegiatan-data';
import PageHeader from '@/components/PageHeader';

export default function KegiatanPage() {
  return (
    <div>
      <PageHeader
        title="Kegiatan Unggulan Divisi"
        subtitle="Melihat lebih dekat program kerja inovatif dari setiap divisi di GIBEI UNIMED."
      />

      <div className="space-y-12 sm:space-y-16">
        {kegiatanDivisi.map((divisi: KegiatanDivisi) => (
          <motion.section 
            key={divisi.nama}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a4162] mb-8 border-b-4 border-[#1a4162] pb-2">
              Divisi {divisi.nama}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {divisi.kegiatan.map((kegiatan: Kegiatan, index) => (
                <div key={index} className="group perspective h-64 sm:h-72 outline-none" tabIndex={0}>
                  <div className="relative preserve-3d group-hover:rotate-y-180 group-focus:rotate-y-180 w-full h-full duration-500 rounded-xl shadow-lg">
                    {/* Sisi Depan Kartu */}
                    <div className="absolute backface-hidden w-full h-full">
                      <Image
                        src={kegiatan.imageUrl}
                        alt={kegiatan.judul}
                        width={500}
                        height={500}
                        unoptimized={true}
                        className="w-full h-full object-cover rounded-xl"
                      />
                       <div className="absolute bottom-0 left-0 w-full p-3 sm:p-4 bg-black/50 backdrop-blur-sm rounded-b-xl">
                        <h3 className="text-white font-bold text-base sm:text-lg">{kegiatan.judul}</h3>
                       </div>
                    </div>
                    {/* Sisi Belakang Kartu */}
                    <div className="absolute rotate-y-180 backface-hidden w-full h-full bg-[#1a4162] rounded-xl flex flex-col items-center justify-center text-center p-4 sm:p-6">
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{kegiatan.judul}</h3>
                      <p className="text-sm sm:text-base text-[#e6d9c6]">Diselenggarakan oleh Divisi {divisi.nama}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  );
}

