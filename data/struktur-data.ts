// @/data/struktur-data.ts

/*
================================================================================
PANDUAN MENGUNGGAH FOTO PENGURUS
================================================================================
1.  Siapkan semua foto pengurus dengan format persegi (rasio 1:1) agar terlihat rapi.
2.  Letakkan semua file foto tersebut di dalam folder `public/images/pengurus`.
    Jika folder belum ada, silakan buat terlebih dahulu.
    Contoh: /public/images/pengurus/andrian.jpg
3.  Pada setiap objek pengurus di bawah, ganti nilai `imageUrl` dari placeholder
    menjadi path foto yang sesuai.
    Contoh: `imageUrl: '/images/pengurus/andrian.jpg',`

    PENTING: Path harus diawali dengan tanda '/'
================================================================================
*/


// Tipe data untuk setiap anggota
// SOLUSI: Menambahkan 'export' agar tipe ini bisa diimpor oleh file lain.
export type Member = {
  name: string;
  position: string;
  imageUrl: string;
  socials?: { // Properti baru untuk media sosial
    instagram?: string;
    linkedin?: string;
  };
};

// Tipe data untuk setiap divisi
type Division = {
  name: string;
  description: string; // Deskripsi ditambahkan kembali
  ketua: Member;
  wakil: Member;
  anggota: Member[];
};


// Data Pembina
export const pembina = {
  name: 'Nama Pembina',
  position: 'Pembina GIBEI UNIMED',
  imageUrl: 'https://placehold.co/400x400/1a4162/e6d9c6?text=Pembina',
};

// Data Presidium
export const presidium: Member[] = [
  { name: 'Andrian', position: 'Presiden Direktur', imageUrl: 'https://placehold.co/400x400/1a4162/e6d9c6?text=Andrian' },
  { name: 'Noubel Nainggolan', position: 'Wakil Presiden Direktur', imageUrl: 'https://placehold.co/400x400/1a4162/e6d9c6?text=Noubel' },
  { name: 'Suci Ramadani', position: 'Sekretaris Jendral', imageUrl: 'https://placehold.co/400x400/1a4162/e6d9c6?text=Suci' },
  { name: 'Valentina Rentauli', position: 'Bendahara Umum', imageUrl: 'https://placehold.co/400x400/1a4162/e6d9c6?text=Valentina' },
];

// Data Divisi
export const divisions: Division[] = [
  {
    name: 'Divisi Kegiatan',
    description: 'Bertanggung jawab atas perencanaan dan pelaksanaan semua acara, memastikan kelancaran dan kesuksesan setiap kegiatan yang diselenggarakan.',
    ketua: { name: 'Artika Wulandari', position: 'Ketua Divisi', imageUrl: 'https://placehold.co/400x400/1a4162/e6d9c6?text=Artika' },
    wakil: { name: 'Vailimlim Simamora', position: 'Wakil Ketua Divisi', imageUrl: 'https://placehold.co/400x400/1a4162/e6d9c6?text=Vailimlim' },
    anggota: [
      { name: 'Sutria Evi Fania', position: 'Anggota Divisi', imageUrl: 'https://placehold.co/400x400/1a4162/e6d9c6?text=Sutria' },
      { name: 'Saniah Lidiya Hawani', position: 'Anggota Divisi', imageUrl: 'https://placehold.co/400x400/1a4162/e6d9c6?text=Saniah' },
      { name: 'Ruwina Rahmanda', position: 'Anggota Divisi', imageUrl: 'https://placehold.co/400x400/1a4162/e6d9c6?text=Ruwina' },
      { name: 'Muhammad Ariel', position: 'Anggota Divisi', imageUrl: 'https://placehold.co/400x400/1a4162/e6d9c6?text=Ariel' },
      { name: 'Peter Nov Barus', position: 'Anggota Divisi', imageUrl: 'https://placehold.co/400x400/1a4162/e6d9c6?text=Peter' },
    ],
  },
  {
    name: 'Divisi Media',
    description: 'Mengelola semua penyebaran informasi melalui platform sosial media organisasi, menciptakan konten yang menarik dan informatif.',
    ketua: { name: 'Joice Harefa', position: 'Ketua Divisi', imageUrl: 'https://placehold.co/400x400/1a4162/e6d9c6?text=Joice' },
    wakil: { name: 'Fihrna Karin BR. Pinem', position: 'Wakil Ketua Divisi', imageUrl: 'https://placehold.co/400x400/1a4162/e6d9c6?text=Fihrna' },
    anggota: [
        { name: 'Maya Martiza Sari', position: 'Anggota Divisi', imageUrl: 'https://placehold.co/400x400/1a4162/e6d9c6?text=Maya' },
        { name: 'Joanna Brigitta', position: 'Anggota Divisi', imageUrl: 'https://placehold.co/400x400/1a4162/e6d9c6?text=Joanna' },
        { name: 'Mismauli Nainggolan', position: 'Anggota Divisi', imageUrl: 'https://placehold.co/400x400/1a4162/e6d9c6?text=Mismauli' },
        { name: 'Annisa Handayani', position: 'Anggota Divisi', imageUrl: 'https://placehold.co/400x400/1a4162/e6d9c6?text=Annisa' },
        { name: 'Ribka Intan Sitorus', position: 'Anggota Divisi', imageUrl: 'https://placehold.co/400x400/1a4162/e6d9c6?text=Ribka' },
        { name: 'Mhd. Rheza', position: 'Anggota Divisi', imageUrl: 'https://placehold.co/400x400/1a4162/e6d9c6?text=Rheza' },
    ],
  },
  {
    name: 'Divisi Investasi',
    description: 'Bertanggung jawab atas pengelolaan dan pengembangan kegiatan serta pengetahuan seputar investasi di pasar modal, termasuk analisis teknikal dan fundamental.',
    ketua: { name: 'M. Ilyas Sapawi', position: 'Ketua Divisi', imageUrl: 'https://placehold.co/400x400/1a4162/e6d9c6?text=Ilyas' },
    wakil: { name: 'Fauzan Al Gholi', position: 'Wakil Ketua Divisi', imageUrl: 'https://placehold.co/400x400/1a4162/e6d9c6?text=Fauzan' },
    anggota: [
      { name: 'Annisa Alfathanasya', position: 'Anggota Divisi', imageUrl: 'https://placehold.co/400x400/1a4162/e6d9c6?text=Annisa' },
      { name: 'Desi Apriyani', position: 'Anggota Divisi', imageUrl: 'https://placehold.co/400x400/1a4162/e6d9c6?text=Desi' },
      { name: 'Radhika Narwastu', position: 'Anggota Divisi', imageUrl: 'https://placehold.co/400x400/1a4162/e6d9c6?text=Radhika' },
      { name: 'Arief Zaidan', position: 'Anggota Divisi', imageUrl: 'https://placehold.co/400x400/1a4162/e6d9c6?text=Arief' },
    ],
  },
  {
    name: 'Divisi Galeri',
    description: 'Menjaga galeri KSPM GIBEI UNIMED, melestarikan segala barang yang ada di galeri serta membuat galeri nyaman dan aman.',
    ketua: { name: 'Fanhas Abdul Rahman', position: 'Ketua Divisi', imageUrl: 'https://placehold.co/400x400/1a4162/e6d9c6?text=Fanhas' },
    wakil: { name: 'Laoren Valerina Sinaga', position: 'Wakil Ketua Divisi', imageUrl: 'https://placehold.co/400x400/1a4162/e6d9c6?text=Laoren' },
    anggota: [
      { name: 'Aurora Aqma Batubara', position: 'Anggota Divisi', imageUrl: 'https://placehold.co/400x400/1a4162/e6d9c6?text=Aurora' },
      { name: 'Putri Sandrina Sitompul', position: 'Anggota Divisi', imageUrl: 'https://placehold.co/400x400/1a4162/e6d9c6?text=Putri' },
      { name: 'Anita BR Saragih', position: 'Anggota Divisi', imageUrl: 'https://placehold.co/400x400/1a4162/e6d9c6?text=Anita' },
      { name: 'Wiko Prayoga', position: 'Anggota Divisi', imageUrl: 'https://placehold.co/400x400/1a4162/e6d9c6?text=Wiko' },
    ],
  },
  {
    name: 'Divisi HRD',
    description: 'Bertanggung jawab atas hubungan personal antar divisi, anggota KSPM, dan presidium, menjaga keharmonisan internal organisasi.',
    ketua: { name: 'Andini Aulia', position: 'Ketua Divisi', imageUrl: 'https://placehold.co/400x400/1a4162/e6d9c6?text=Andini' },
    wakil: { name: 'Fikri Alfahmi Siregar', position: 'Wakil Ketua Divisi', imageUrl: 'https://placehold.co/400x400/1a4162/e6d9c6?text=Fikri' },
    anggota: [
      { name: 'Devina Wiyani', position: 'Anggota Divisi', imageUrl: 'https://placehold.co/400x400/1a4162/e6d9c6?text=Devina' },
      { name: 'M. Irfandi Syahputra', position: 'Anggota Divisi', imageUrl: 'https://placehold.co/400x400/1a4162/e6d9c6?text=Irfandi' },
      { name: 'Cecilia BR Lumban Gaol', position: 'Anggota Divisi', imageUrl: 'https://placehold.co/400x400/1a4162/e6d9c6?text=Cecilia' },
      { name: 'Vennia Marsellia Purba', position: 'Anggota Divisi', imageUrl: 'https://placehold.co/400x400/1a4162/e6d9c6?text=Vennia' },
    ],
  },
];

