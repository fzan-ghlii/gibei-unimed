import Link from 'next/link';
import { FaInstagram, FaTiktok, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const socialLinks = [
    { icon: FaInstagram, href: 'https://instagram.com/gibei_unimed', label: 'Instagram' },
    { icon: FaTiktok, href: '#', label: 'TikTok' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:gibeiunimed@gmail.com', label: 'Email' },
  ];

  return (
    // Menghapus '!' karena sudah tidak diperlukan lagi
    <footer className="bg-[#1a4162] text-[#e6d9c6] py-8">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold mb-4">Hubungi Kami</h3>
        <p className="mb-6">Terhubung dengan kami melalui media sosial untuk informasi terbaru.</p>
        <div className="flex justify-center space-x-6 mb-6">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <Link key={label} href={href} target="_blank" rel="noopener noreferrer"  className="hover:text-white transition-all duration-300 hover:-translate-y-1">
              <Icon size={28} />
              <span className="sr-only">{label}</span>
            </Link>
          ))}
        </div>
        <div className="border-t border-[#e6d9c6]/20 pt-6 mt-6">
          <p>&copy; {new Date().getFullYear()} GIBEI UNIMED. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

