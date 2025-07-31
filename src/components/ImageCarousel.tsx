
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageCarousel = () => {
  const images = [
    '/lovable-uploads/101e9c9e-0b5a-4c47-9514-24262f298d7d.png',
    '/lovable-uploads/502749be-bacd-4429-9e0a-1c9d4ed1d8fe.png',
    '/lovable-uploads/7de8c3db-0b0b-43b0-823b-2a94f12263dc.png',
    '/lovable-uploads/ae042dbd-163b-4739-9cc7-9abf908f7400.png',
    '/lovable-uploads/bbb3dcdf-f62b-4163-9e2a-59d200fa55c1.png',
    '/lovable-uploads/3cd885a1-5ae6-4fd4-9f9d-a0610b071e58.png',
    '/lovable-uploads/39198400-78cc-45cc-acf3-97a579937155.png',
    '/lovable-uploads/d2e6a005-097e-42b0-8e5c-f38d743ef72b.png'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-md">
      {/* Main Image */}
      <div className="relative w-full h-full">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-opacity duration-500"
        />
        
        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-200"
          aria-label="Imagem anterior"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-200"
          aria-label="Próxima imagem"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex 
                ? 'bg-white shadow-lg' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Loading Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div 
          className="h-full bg-white transition-all duration-100 ease-linear"
          style={{
            width: `${((currentIndex + 1) / images.length) * 100}%`
          }}
        />
      </div>
    </div>
  );
};

export default ImageCarousel;
