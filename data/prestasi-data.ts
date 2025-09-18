// Tipe data untuk setiap item prestasi
type Achievement = {
  year: string;
  category: string;
  title: string;
  description: string;
};

// Data prestasi diekspor dengan nama 'achievements'
export const achievements: Achievement[] = [
  {
    year: '2024',
    category: 'GI Award SUMUT',
    title: 'Peringkat 3 Kategori Pembukaan Rekening Efek Terbanyak',
    description: 'Meraih peringkat 3 pada GI Award Sumut dalam kategori Pembukaan Rekening Efek Terbanyak, sebagai bentuk komitmen dalam meningkatkan literasi dan inklusi pasar modal di Sumatera Utara.'
  },
];

