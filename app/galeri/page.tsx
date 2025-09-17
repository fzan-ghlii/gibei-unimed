// app/galeri/page.tsx
'use client';

import PageHeader from '@/components/PageHeader';
import { galleryImages } from '@/data/galeri-data';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function GaleriPage() {
  return (
    <div>
      <PageHeader
        title="Galeri Kegiatan"
        subtitle="Momen-momen berharga yang terekam dalam perjalanan GIBEI UNIMED."
      />

      <div className="columns-2 md:columns-3 gap-4 space-y-4 mt-12">
        {galleryImages.map((image, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg group break-inside-avoid"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={image.src}
              alt={image.description}
              width={600}
              height={400}
              className="w-full h-auto object-cover"
              unoptimized={true}
            />
            {/* Overlay yang muncul saat hover */}
            <div className="absolute inset-0 bg-[#1a4162]/70 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-center text-white font-semibold">{image.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
