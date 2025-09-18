// Definisikan tipe untuk setiap kegiatan
export type Kegiatan = {
  judul: string;
  imageUrl: string;
};

// Definisikan tipe untuk setiap objek divisi dalam array
export type KegiatanDivisi = {
  nama: string;
  kegiatan: Kegiatan[];
};

// Pastikan untuk EXPORT konstanta ini
export const kegiatanDivisi: KegiatanDivisi[] = [
  {
    nama: 'Kegiatan',
    kegiatan: [
      { judul: 'GIBEI CONNECT', imageUrl: '/images/kegiatan/gibeiconnect.jpg' },
      { judul: 'INVESTASYIK', imageUrl: '/images/kegiatan/investasyik.jpg' },
    ],
  },
  {
    nama: 'Media',
    kegiatan: [
      { judul: 'QUIZ MASTER', imageUrl: '/images/kegiatan/Quiz+Master' },
      { judul: 'KONTEN EDUKASI', imageUrl: '/images/kegiatan/Konten' },
    ],
  },
  {
    nama: 'Investasi',
    kegiatan: [
      { judul: 'WISE', imageUrl: '/images/kegiatan/WISE' },
      { judul: 'ELITE', imageUrl: '/images/kegiatan/ELITE' },
    ],
  },
   {
    nama: 'Galeri',
    kegiatan: [
      { judul: 'Piket Galeri', imageUrl: '/images/kegiatan/Piket' },
      { judul: 'Bersih-Bersih Galeri', imageUrl: '/images/kegiatan/Bersih-Bersih' },
    ],
  },
  {
    nama: 'HRD',
    kegiatan: [
      { judul: 'LIKRAB X GNJ', imageUrl: '/images/kegiatan/LIKRAB' },
      { judul: 'GITY', imageUrl: '/images/kegiatan/GITY' },
    ],
  },
];

