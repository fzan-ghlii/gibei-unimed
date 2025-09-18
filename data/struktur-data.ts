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
  name: 'Dita Eka Pertiwi Sirait, S.E., M.Si.',
  position: 'Pembina GIBEI UNIMED',
  imageUrl: '/images/pengurus/bu-dita.jpg',
};

// Data Presidium
export const presidium: Member[] = [
  { name: 'Andrian', position: 'Presiden Direktur', imageUrl: '/images/pengurus/andrian.jpg' },
  { name: 'Noubel Nainggolan', position: 'Wakil Presiden Direktur', imageUrl: '/images/pengurus/nobel.jpg' },
  { name: 'Suci Ramadani', position: 'Sekretaris Jendral', imageUrl: '/images/pengurus/suci.jpg' },
  { name: 'Valentina Rentauli', position: 'Bendahara Umum', imageUrl: '/images/pengurus/valen.jpg' },
];

// Data Divisi
export const divisions: Division[] = [
  {
    name: 'Divisi Kegiatan',
    description: 'Bertanggung jawab atas perencanaan dan pelaksanaan semua acara, memastikan kelancaran dan kesuksesan setiap kegiatan yang diselenggarakan.',
    ketua: { name: 'Artika Wulandari', position: 'Ketua Divisi', imageUrl: '/images/pengurus/artika.jpg' },
    wakil: { name: 'Vailimlim Simamora', position: 'Wakil Ketua Divisi', imageUrl: '/images/pengurus/vai.jpg' },
    anggota: [
      { name: 'Sutria Evi Fania', position: 'Anggota Divisi', imageUrl: '/images/pengurus/sutria.jpg' },
      { name: 'Saniah Lidiya Hawani', position: 'Anggota Divisi', imageUrl: '/images/pengurus/saniah.jpg' },
      { name: 'Ruwina Rahmanda', position: 'Anggota Divisi', imageUrl: '/images/pengurus/ruwina.jpg' },
      { name: 'Muhammad Ariel', position: 'Anggota Divisi', imageUrl: '/images/pengurus/aril.jpg' },
      { name: 'Peter Nov Barus', position: 'Anggota Divisi', imageUrl: '/images/pengurus/peter.jpg' },
    ],
  },
  {
    name: 'Divisi Media',
    description: 'Mengelola semua penyebaran informasi melalui platform sosial media organisasi, menciptakan konten yang menarik dan informatif.',
    ketua: { name: 'Joice Harefa', position: 'Ketua Divisi', imageUrl: '/images/pengurus/joice.jpg' },
    wakil: { name: 'Fihrna Karin BR. Pinem', position: 'Wakil Ketua Divisi', imageUrl: '/images/pengurus/firhna.jpg' },
    anggota: [
        { name: 'Maya Martiza Sari', position: 'Anggota Divisi', imageUrl: '/images/pengurus/maya.jpg' },
        { name: 'Joanna Brigitta', position: 'Anggota Divisi', imageUrl: '/images/pengurus/joana.jpg' },
        { name: 'Mismauli Nainggolan', position: 'Anggota Divisi', imageUrl: '/images/pengurus/misma.jpg' },
        { name: 'Annisa Handayani', position: 'Anggota Divisi', imageUrl: '/images/pengurus/annisa.jpg' },
        { name: 'Ribka Intan Sitorus', position: 'Anggota Divisi', imageUrl: '/images/pengurus/ribka.jpg' },
        { name: 'Mhd. Rheza', position: 'Anggota Divisi', imageUrl: '/images/pengurus/reza.jpg' },
    ],
  },
  {
    name: 'Divisi Investasi',
    description: 'Bertanggung jawab atas pengelolaan dan pengembangan kegiatan serta pengetahuan seputar investasi di pasar modal, termasuk analisis teknikal dan fundamental.',
    ketua: { name: 'M. Ilyas Sapawi', position: 'Ketua Divisi', imageUrl: '/images/pengurus/ilyas.jpg' },
    wakil: { name: 'Fauzan Al Gholi', position: 'Wakil Ketua Divisi', imageUrl: '/images/pengurus/me.jpg' },
    anggota: [
      { name: 'Annisa Alfathanasya', position: 'Anggota Divisi', imageUrl: '/images/pengurus/nisa.jpg' },
      { name: 'Desi Apriyani', position: 'Anggota Divisi', imageUrl: '/images/pengurus/desi.jpg' },
      { name: 'Radhika Narwastu', position: 'Anggota Divisi', imageUrl: '/images/pengurus/radika.jpg' },
      { name: 'Arief Zaidan', position: 'Anggota Divisi', imageUrl: '/images/pengurus/arif.jpg' },
    ],
  },
  {
    name: 'Divisi Galeri',
    description: 'Menjaga galeri KSPM GIBEI UNIMED, melestarikan segala barang yang ada di galeri serta membuat galeri nyaman dan aman.',
    ketua: { name: 'Fanhas Abdul Rahman', position: 'Ketua Divisi', imageUrl: '/images/pengurus/fanhas.jpg' },
    wakil: { name: 'Laoren Valerina Sinaga', position: 'Wakil Ketua Divisi', imageUrl: '/images/pengurus/laoren.jpg' },
    anggota: [
      { name: 'Aurora Aqma Batubara', position: 'Anggota Divisi', imageUrl: '/images/pengurus/aurora.jpg' },
      { name: 'Putri Sandrina Sitompul', position: 'Anggota Divisi', imageUrl: '/images/pengurus/sandrina.jpg' },
      { name: 'Anita BR Saragih', position: 'Anggota Divisi', imageUrl: '/images/pengurus/anita.jpg' },
      { name: 'Wiko Prayoga', position: 'Anggota Divisi', imageUrl: '/images/pengurus/wiko.jpg' },
    ],
  },
  {
    name: 'Divisi HRD',
    description: 'Bertanggung jawab atas hubungan personal antar divisi, anggota KSPM, dan presidium, menjaga keharmonisan internal organisasi.',
    ketua: { name: 'Andini Aulia', position: 'Ketua Divisi', imageUrl: '/images/pengurus/andini.jpg' },
    wakil: { name: 'Fikri Alfahmi Siregar', position: 'Wakil Ketua Divisi', imageUrl: '/images/pengurus/fikri.jpg' },
    anggota: [
      { name: 'Devina Wiyani', position: 'Anggota Divisi', imageUrl: '/images/pengurus/devina.jpg' },
      { name: 'M. Irfandi Syahputra', position: 'Anggota Divisi', imageUrl: '/images/pengurus/irfan.jpg' },
      { name: 'Cecilia BR Lumban Gaol', position: 'Anggota Divisi', imageUrl: '/images/pengurus/cecilia.jpg' },
      { name: 'Vennia Marsellia Purba', position: 'Anggota Divisi', imageUrl: '/images/pengurus/venia.jpg' },
    ],
  },
];

