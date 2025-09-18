'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { pembina, presidium, divisions } from '@/data/struktur-data';
import PageHeader from '@/components/PageHeader';
import MemberCard from '@/components/MemberCard';
import type { Member } from '@/data/struktur-data';

export default function StrukturPage() {
  return (
    <div>
      <PageHeader
        title="Struktur Kepengurusan"
        subtitle="Mengenal tim solid di balik kesuksesan GIBEI UNIMED periode 2024-2025."
      />

      <div className="space-y-16 sm:space-y-20">
        {/* Pembina */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#1a4162] mb-8">Pembina Organisasi</h2>
          <div className="max-w-xs mx-auto">
             <div className="bg-white/60 p-6 rounded-xl shadow-md text-center">
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4">
                  <Image
                    src={pembina.imageUrl}
                    alt={`Foto ${pembina.name}`}
                    fill
                    unoptimized
                    className="rounded-full object-cover shadow-md"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#1a4162]">{pembina.name}</h3>
                <p className="text-sm sm:text-base text-[#333333]">{pembina.position}</p>
              </div>
          </div>
        </motion.section>

        {/* Presidium */}
        <motion.section
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#1a4162] mb-12">Presidium</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {presidium.map((member) => (
              <MemberCard
                key={member.name}
                name={member.name}
                position={member.position}
                imageUrl={member.imageUrl}
                socials={member.socials}
              />
            ))}
          </div>
        </motion.section>

        {/* Divisi */}
        <div className="space-y-16">
          {divisions.map((divisi, index) => (
            <motion.section 
              key={divisi.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-center mb-12">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#1a4162]">{divisi.name}</h3>
                <p className="mt-2 max-w-2xl mx-auto text-sm sm:text-base text-[#333333]">{divisi.description}</p>
              </div>

              <div className="flex justify-center gap-8 flex-wrap mb-12">
                  <div className="w-full sm:w-1/3 max-w-xs">
                     <MemberCard {...divisi.ketua} />
                  </div>
                  <div className="w-full sm:w-1/3 max-w-xs">
                    <MemberCard {...divisi.wakil} />
                  </div>
              </div>
              
              <div className="bg-white/60 p-6 sm:p-8 rounded-xl shadow-md">
                 <h4 className="font-bold text-base sm:text-lg text-[#333333] mb-6 text-center">Anggota Divisi</h4>
                 <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-x-4 gap-y-6 sm:gap-x-6 sm:gap-y-8 justify-items-center">
                    {divisi.anggota.map((member: Member) => (
                       <div key={member.name} className="text-center w-full max-w-[7rem]">
                         <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-2 shadow-md rounded-full">
                           <Image
                             src={member.imageUrl}
                             alt={`Foto ${member.name}`}
                             fill
                             unoptimized
                             className="rounded-full object-cover"
                           />
                         </div>
                         <p className="text-xs sm:text-sm font-semibold text-[#1a4162] leading-tight">{member.name}</p>
                       </div>
                    ))}
                 </div>
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
}

