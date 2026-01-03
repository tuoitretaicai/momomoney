import React, { useState, useEffect } from 'react';
import { IMAGES } from '@/constants/images';
import { LoginModal } from './LoginModal';
import { Search, Menu } from 'lucide-react';

export const Hero: React.FC = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const heroSlides = [IMAGES.HERO.HERO1, IMAGES.HERO.HERO2, IMAGES.HERO.HERO3];

  // Auto-advance slider every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  return (
    <section className="relative bg-gradient-to-b from-pink-50 to-white">
      {/* Top Banner */}
      <div className="relative w-full h-[50px] overflow-hidden flex items-center justify-center bg-white">
        <img
          src={IMAGES.HERO.HEROHEAD}
          alt="MoMo Banner"
          className="h-[50px] w-[1088px]"
        />
      </div>

      {/* Header with Logo, Search & Menu */}
      <div className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 md:py-4 flex items-center justify-between gap-3 md:gap-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={IMAGES.LOGO}
              alt="MoMo Logo"
              className="h-8 md:h-10 w-auto"
            />
          </div>
          
          {/* Title */}
          <h2 className="text-viettel-red font-bold text-xs sm:text-md md:text-lg lg:text-xl text-center flex-1">
            Chào Mừng Bạn Đến với Sự Kiện MoMo
          </h2>
          
          <button className="flex-shrink-0 p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Menu size={24} className="text-gray-700" />
          </button>
        </div>
      </div>

      {/* Hero Slider */}
      <div className="relative w-full bg-white pb-6">
        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {heroSlides.map((slide, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <img
                  src={slide}
                  alt={`Hero Slide ${index + 1}`}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Slider Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all rounded-full ${
                index === currentSlide
                  ? 'w-6 h-2 bg-viettel-red'
                  : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

      </div>

      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
    </section>
  );
};
