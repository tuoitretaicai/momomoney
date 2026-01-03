import React, { useState } from 'react';
import { IMAGES } from '@/constants/images';
import { LoginModal } from './LoginModal';

export const Benefits: React.FC = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <section className="py-8 md:py-12 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Banner Container */}
        <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl group">
          {/* Banner Image - Mobile */}
          <div className="relative w-full flex justify-center md:hidden">
            <img
              src={IMAGES.BENEFITS[1]}
              alt="Vòng Quay Triệu Phú - 100% Trúng Quà"
              className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Gradient Overlay for better CTA visibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
          </div>

          {/* Banner Image - Desktop */}
          <div className="relative w-full hidden md:flex justify-center">
            <img
              src={IMAGES.BENEFITS[0]}
              alt="Vòng Quay Triệu Phú - 100% Trúng Quà"
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Gradient Overlay for better CTA visibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
          </div>

          {/* CTA Button Overlay - Desktop */}
          <div className="hidden md:flex absolute inset-0 items-center justify-center">
            <button
              onClick={() => setShowLogin(true)}
              className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-2xl hover:from-pink-600 hover:to-pink-700 hover:scale-110 border-2 border-white transition-all duration-300 transform hover:rotate-2 animate-pulse-slow max-w-xs"
            >
              NHẬN QUÀ NGAY
            </button>
          </div>
        </div>

        {/* CTA Button - Mobile (Below Banner) */}
        <div className="md:hidden mt-6 flex justify-center">
          <button
            onClick={() => setShowLogin(true)}
            className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-xl hover:from-pink-600 hover:to-pink-700 hover:scale-105 transition-all duration-300 border-2 border-pink-400 animate-pulse-slow"
          >
            NHẬN QUÀ NGAY
          </button>
        </div>

        {/* Info Cards - Optional */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-8">
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center group cursor-pointer">
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform"><img src="https://homepage.momocdn.net/img/momo-amazone-s3-api-241028104909-638657093492807751.png" alt="" className="w-16 h-16 mx-auto object-contain" /></div>
            <h3 className="text-viettel-red font-bold text-lg mb-2">Bảo mật tuyệt đối</h3>
            <p className="text-gray-600 text-sm">An toàn bảo mật tối đa với A.I</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center group cursor-pointer">
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform"><img src="https://homepage.momocdn.net/img/momo-amazone-s3-api-241028104738-638657092586817069.png" alt="" className="w-16 h-16 mx-auto object-contain" /></div>
            <h3 className="text-viettel-red font-bold text-lg mb-2">Giải Thưởng Lớn</h3>
            <p className="text-gray-600 text-sm">Cơ hội trúng giải triệu đồng mỗi ngày</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center group cursor-pointer">
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform"><img src="https://homepage.momocdn.net/img/momo-amazone-s3-api-241028104806-638657092865001677.png" alt="" className="w-16 h-16 mx-auto object-contain" /></div>
            <h3 className="text-viettel-red font-bold text-lg mb-2">Nhanh Chóng</h3>
            <p className="text-gray-600 text-sm">Chỉ 1 phút để tham gia và nhận quà</p>
          </div>
        </div>
      </div>

      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.85; }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};
