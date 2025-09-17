// app/prestasi/page.tsx
'use client';
import PageHeader from '@/components/PageHeader';
import { achievements } from '@/data/prestasi-data';
import { motion } from 'framer-motion';
import { FaTrophy } from 'react-icons/fa';

export default function PrestasiPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div>
      <PageHeader
        title="Jejak Prestasi"
        subtitle="Berikut adalah beberapa pencapaian membanggakan yang telah diraih oleh GIBEI UNIMED melalui kerja keras dan dedikasi."
      />

      {/* Timeline Section */}
      <div className="relative mt-12">
        {/* Garis vertikal timeline */}
        <div className="absolute left-4 md:left-1/2 -ml-[2px] h-full w-1 bg-[#1a4162]/20"></div>

        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              className="relative"
              variants={itemVariants}
            >
              <div className="flex items-center">
                {/* Lingkaran di timeline */}
                <div className="absolute left-4 md:left-1/2 -ml-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#1a4162]">
                  <FaTrophy className="h-4 w-4 text-white" />
                </div>

                {/* Konten kartu prestasi */}
                <div className={`w-full p-6 ml-12 md:ml-0 rounded-xl shadow-lg ${index % 2 === 0 ? 'md:mr-auto md:pr-[55%]' : 'md:ml-auto md:pl-[55%]' } bg-white/70`}>
                  <p className="text-sm font-semibold text-[#1a4162] mb-1">{item.year} - <span className="font-normal text-[#333333]">{item.category}</span></p>
                  <h3 className="text-xl font-bold text-[#1a4162] mb-2">{item.title}</h3>
                  <p className="text-[#333333]">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
