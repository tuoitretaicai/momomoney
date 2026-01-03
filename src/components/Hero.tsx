import React, { useState, useEffect } from 'react';
import { IMAGES } from '@/constants/images';
import { LoginModal } from './LoginModal';
import { Search, Menu } from 'lucide-react';

export const Hero: React.FC = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const heroSlidesMobile = [IMAGES.HERO.HERO1, IMAGES.HERO.HERO2, IMAGES.HERO.HERO3];
  const heroSlidesDesktop = [IMAGES.HERO.HEROWEB1, IMAGES.HERO.HEROWEB2, IMAGES.HERO.HEROWEB3];

  // Auto-advance slider every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlidesMobile.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroSlidesMobile.length]);

  return (
    <section className="relative bg-gradient-to-b from-pink-50 to-white">
      {/* Top Banner */}
      <div className="relative w-full overflow-x-auto flex items-center justify-center bg-white">
        <img
          src={IMAGES.HERO.HEROHEAD}
          alt="MoMo Banner"
          className="h-[50px] md:h-[70px] min-w-[510px] md:min-w-full w-auto md:w-full"
        />
      </div>

      {/* Header with Logo, Search & Menu */}
      <div className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="w-full px-4 md:px-8 lg:px-16 py-3 md:py-5 flex items-center justify-between gap-4 md:gap-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={IMAGES.LOGO}
              alt="MoMo Logo"
              className="h-8 md:h-12 lg:h-14 w-auto"
            />
          </div>
          
          {/* Title */}
          <h2 className="text-viettel-red font-bold text-xs sm:text-sm md:text-xl lg:text-2xl text-center flex-1">
            Chào Mừng Bạn Đến với Sự Kiện MoMo
          </h2>
          
          <div className="relative">
            <button 
              onClick={() => setShowMenu(!showMenu)}
              className="flex-shrink-0 p-2 md:p-3 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Menu size={24} className="text-gray-700 md:w-7 md:h-7 lg:w-8 lg:h-8" />
            </button>

            {showMenu && (
              <>
                {/* Backdrop to close menu */}
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={() => setShowMenu(false)}
                />
                
                {/* Dropdown Menu */}
                <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                  <button
                    onClick={() => {
                      setShowLogin(true);
                      setShowMenu(false);
                    }}
                    className="w-full px-4 py-3 text-left hover:bg-pink-50 transition-colors flex items-center gap-3"
                  >
                   
                    <div>
                      <div className="font-bold text-viettel-red text-sm">Đăng nhập/Đăng ký</div>
                      <div className="text-xs text-gray-500">Tham gia ngay để nhận quà</div>
                    </div>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="relative w-full bg-white pb-6">
        {/* Mobile Slider */}
        <div className="relative w-full overflow-hidden md:hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {heroSlidesMobile.map((slide, index) => (
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

        {/* Desktop Slider */}
        <div className="relative w-full overflow-hidden hidden md:block">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {heroSlidesDesktop.map((slide, index) => (
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
          {heroSlidesMobile.map((_, index) => (
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
