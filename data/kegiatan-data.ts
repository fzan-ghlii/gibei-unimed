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
      { judul: 'STOCK MASTER QUIZ', imageUrl: '/images/kegiatan/stockmaster.jpg' },
      { judul: 'INVESTICAST', imageUrl: '/images/kegiatan/investicast.jpg' },
    ],
  },
  {
    nama: 'Investasi',
    kegiatan: [
      { judul: 'WISE', imageUrl: '/images/kegiatan/wise.jpg' },
      { judul: 'ELITE', imageUrl: '/images/kegiatan/elite.jpg' },
    ],
  },
   {
    nama: 'Galeri',
    kegiatan: [
      { judul: 'Piket Galeri', imageUrl: '/images/kegiatan/piket.jpg' },
      { judul: 'Bersih-Bersih Galeri', imageUrl: '/images/kegiatan/bersihgaleri.jpg' },
    ],
  },
  {
    nama: 'HRD',
    kegiatan: [
      { judul: 'LIKRAB X GNJ', imageUrl: '/images/kegiatan/likrab.jpg' },
      { judul: 'GITY', imageUrl: '/images/kegiatan/gity.jpg' },
    ],
  },
];

