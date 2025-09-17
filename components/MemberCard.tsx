import Image from 'next/image';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

type MemberCardProps = {
  name: string;
  position: string;
  imageUrl: string;
  socials?: {
    instagram?: string;
    linkedin?: string;
  };
};

export default function MemberCard({ name, position, imageUrl, socials }: MemberCardProps) {
  return (
    <div className="group perspective w-full h-64">
      <div className="relative preserve-3d group-hover:rotate-y-180 w-full h-full duration-500 rounded-xl shadow-lg">
        {/* Front Face */}
        <div className="absolute backface-hidden w-full h-full">
          <Image
            src={imageUrl}
            alt={`Foto ${name}`}
            width={400}
            height={400}
            unoptimized={true} // Diperlukan untuk placeholder SVG
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="absolute bottom-0 left-0 w-full p-4 bg-black/50 backdrop-blur-sm rounded-b-xl">
            <h3 className="text-white font-bold text-lg">{name}</h3>
            <p className="text-[#e6d9c6] text-sm">{position}</p>
          </div>
        </div>

        {/* Back Face */}
        <div className="absolute rotate-y-180 backface-hidden w-full h-full bg-[#1a4162] rounded-xl flex flex-col items-center justify-center p-4">
            <h3 className="text-xl font-bold text-white">{name}</h3>
            <p className="text-center text-[#e6d9c6] mb-4">{position}</p>
            <div className="flex space-x-4">
              {socials?.instagram && (
                <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="text-[#e6d9c6] hover:text-white transition-colors">
                  <FaInstagram size={28} />
                </a>
              )}
               {socials?.linkedin && (
                <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#e6d9c6] hover:text-white transition-colors">
                  <FaLinkedin size={28} />
                </a>
              )}
               {!socials && (
                 <p className="text-sm text-[#e6d9c6]/70">Kontak tidak tersedia</p>
               )}
            </div>
        </div>
      </div>
    </div>
  );
}

