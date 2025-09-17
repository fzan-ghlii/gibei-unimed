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
      { judul: 'GIBEI CONNECT', imageUrl: 'https://placehold.co/500x500/1a4162/e6d9c6?text=GIBEI+Connect' },
      { judul: 'INVESTASYIK', imageUrl: 'https://placehold.co/500x500/1a4162/e6d9c6?text=Investasyik' },
    ],
  },
  {
    nama: 'Media',
    kegiatan: [
      { judul: 'QUIZ MASTER', imageUrl: 'https://placehold.co/500x500/1a4162/e6d9c6?text=Quiz+Master' },
      { judul: 'KONTEN EDUKASI', imageUrl: 'https://placehold.co/500x500/1a4162/e6d9c6?text=Konten' },
    ],
  },
  {
    nama: 'Investasi',
    kegiatan: [
      { judul: 'WISE', imageUrl: 'https://placehold.co/500x500/1a4162/e6d9c6?text=WISE' },
      { judul: 'ELITE', imageUrl: 'https://placehold.co/500x500/1a4162/e6d9c6?text=ELITE' },
    ],
  },
   {
    nama: 'Galeri',
    kegiatan: [
      { judul: 'Piket Galeri', imageUrl: 'https://placehold.co/500x500/1a4162/e6d9c6?text=Piket' },
      { judul: 'Bersih-Bersih Galeri', imageUrl: 'https://placehold.co/500x500/1a4162/e6d9c6?text=Bersih-Bersih' },
    ],
  },
  {
    nama: 'HRD',
    kegiatan: [
      { judul: 'LIKRAB X GNJ', imageUrl: 'https://placehold.co/500x500/1a4162/e6d9c6?text=LIKRAB' },
      { judul: 'GITY', imageUrl: 'https://placehold.co/500x500/1a4162/e6d9c6?text=GITY' },
    ],
  },
];

