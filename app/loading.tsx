import Image from 'next/image';

export default function Loading() {
  // UI ini akan otomatis ditampilkan oleh Next.js saat navigasi halaman
  // atau saat data sedang diambil di server.
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#e6d9c6]">
      <div className="flex flex-col items-center justify-center space-y-6">
        {/* Kontainer untuk logo dan spinner */}
        <div className="relative w-24 h-24 flex items-center justify-center">
            {/* Logo di tengah */}
            <Image
              src="/logo.svg" // Pastikan logo.svg ada di folder /public
              alt="GIBEI UNIMED Logo"
              width={72}
              height={72}
              className="bg-white rounded-full p-2 shadow-sm"
            />
            {/* Cincin spinner yang berputar di sekeliling logo */}
            <div className="absolute top-0 left-0 w-24 h-24 border-4 border-t-4 border-gray-200/50 border-t-[#1a4162] rounded-full animate-spin"></div>
        </div>
        <p className="text-[#1a4162] text-lg font-semibold animate-pulse">
          Memuat Halaman...
        </p>
      </div>
    </div>
  );
}

