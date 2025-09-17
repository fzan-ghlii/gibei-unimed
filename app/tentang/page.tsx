// app/tentang/page.tsx
'use client';
import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';
import { FiEye, FiTarget, FiHeart } from 'react-icons/fi';

export default function TentangPage() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
      },
    }),
  };

  const sections = [
    {
      icon: <FiEye className="h-10 w-10 text-[#1a4162]" />,
      title: "Visi Kami",
      description: "Menjadi pusat unggulan edukasi dan literasi pasar modal yang inovatif dan terpercaya di kalangan mahasiswa Universitas Negeri Medan."
    },
    {
      icon: <FiTarget className="h-10 w-10 text-[#1a4162]" />,
      title: "Misi Kami",
      description: "Menyelenggarakan edukasi pasar modal yang berkualitas, membangun komunitas investor muda yang kompeten, dan menjalin kemitraan strategis untuk kemajuan investasi."
    },
    {
      icon: <FiHeart className="h-10 w-10 text-[#1a4162]" />,
      title: "Nilai-Nilai Kami",
      description: "Kami menjunjung tinggi Integritas, Profesionalisme, Kolaborasi, dan Inovasi dalam setiap kegiatan yang kami laksanakan untuk memberikan dampak positif."
    }
  ];

  return (
    <div>
      <PageHeader
        title="Tentang GIBEI UNIMED"
        subtitle="Mengenal lebih dekat Galeri Investasi Bursa Efek Indonesia di Universitas Negeri Medan."
      />

      <div className="bg-white/70 p-8 md:p-12 rounded-xl shadow-md mb-12">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg text-justify text-[#333333] leading-relaxed"
        >
          Galeri Investasi Bursa Efek Indonesia (GIBEI) UNIMED merupakan sebuah wadah kolaborasi antara Universitas Negeri Medan, Bursa Efek Indonesia (BEI), dan perusahaan sekuritas. Kami hadir untuk memperkenalkan dan mendekatkan dunia pasar modal kepada seluruh sivitas akademika. Melalui GIBEI, mahasiswa tidak hanya mendapatkan teori, tetapi juga pengalaman praktik langsung dalam berinvestasi, menganalisis saham, dan memahami dinamika pasar keuangan. Kami berkomitmen untuk mencetak generasi muda yang cerdas finansial dan siap menjadi investor andal di masa depan.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className="bg-white/70 p-8 rounded-xl shadow-md text-center"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <div className="flex justify-center items-center mb-4">
              {section.icon}
            </div>
            <h3 className="text-2xl font-bold text-[#1a4162] mb-2">{section.title}</h3>
            <p className="text-[#333333]">{section.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
