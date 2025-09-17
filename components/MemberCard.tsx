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
    // SOLUSI: Menambahkan tabIndex="0" dan outline-none
    <div className="group perspective h-80 w-full outline-none" tabIndex={0}>
      {/* SOLUSI: Menambahkan group-focus untuk memicu flip saat di-tap */}
      <div className="relative preserve-3d group-hover:rotate-y-180 group-focus:rotate-y-180 w-full h-full duration-500">
        {/* Sisi Depan Kartu */}
        <div className="absolute backface-hidden w-full h-full bg-white/60 p-6 rounded-xl shadow-md text-center flex flex-col justify-center items-center">
          <div className="relative w-32 h-32 mx-auto mb-4">
            <Image
              src={imageUrl}
              alt={`Foto ${name}`}
              fill
              unoptimized
              className="rounded-full object-cover shadow-md"
            />
          </div>
          <h3 className="text-xl font-bold text-[#1a4162]">{name}</h3>
          <p className="text-[#333333]">{position}</p>
        </div>
        {/* Sisi Belakang Kartu */}
        <div className="absolute rotate-y-180 backface-hidden w-full h-full bg-[#1a4162] rounded-xl flex flex-col justify-center items-center text-center p-6">
          <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
          <p className="text-[#e6d9c6] mb-4">{position}</p>
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
          </div>
        </div>
      </div>
    </div>
  );
}


