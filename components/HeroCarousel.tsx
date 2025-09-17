// components/HeroCarousel.tsx
'use client';

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const slides = [
    {
      title: 'Selamat Datang di GIBEI UNIMED',
      subtitle: 'Wadah terbaik untuk belajar, bertumbuh, dan berinovasi di dunia pasar modal.',
      image: 'https://placehold.co/1200x600/1a4162/e6d9c6?text=Slide+1',
    },
    {
      title: 'Buka Wawasan Investasimu',
      subtitle: 'Ikuti berbagai program edukatif mulai dari Sekolah Pasar Modal hingga analisis saham.',
      image: 'https://placehold.co/1200x600/333333/e6d9c6?text=Slide+2',
    },
    {
      title: 'Jadi Bagian dari Kami',
      subtitle: 'Pendaftaran anggota baru akan segera dibuka. Siapkan dirimu!',
      image: 'https://placehold.co/1200x600/e6d9c6/1a4162?text=Slide+3',
    },
  ];

  return (
    <div className="relative rounded-xl overflow-hidden shadow-2xl">
      {/* Container utama carousel, overflow-hidden sangat penting */}
      <div className="overflow-hidden" ref={emblaRef}>
        {/* Container untuk semua slide, HARUS 'display: flex' */}
        <div className="flex">
          {slides.map((slide, index) => (
            // Setiap slide, HARUS 'flex: 0 0 100%'
            <div className="flex-none w-full relative h-[60vh] min-h-[400px]" key={index}>
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              ></div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-[#1a4162] opacity-60"></div>
              {/* Content */}
              <div className="relative h-full flex flex-col justify-center items-center text-center text-white p-6">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4">{slide.title}</h1>
                <p className="text-lg md:text-xl max-w-3xl">{slide.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-colors z-10"
        onClick={scrollPrev}
      >
        <FaArrowLeft />
      </button>
      <button
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-colors z-10"
        onClick={scrollNext}
      >
        <FaArrowRight />
      </button>
    </div>
  );
}

