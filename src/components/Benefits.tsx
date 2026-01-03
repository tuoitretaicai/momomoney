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
          {/* Banner Image */}
          <div className="relative w-full" style={{ aspectRatio: '770/370' }}>
            <img
              src={IMAGES.BENEFITS[0]}
              alt="Vòng Quay Triệu Phú - 100% Trúng Quà"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Gradient Overlay for better CTA visibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
          </div>

          {/* CTA Button Overlay - Desktop */}
          <div className="hidden md:flex absolute inset-0 items-center justify-center">
            <button
              onClick={() => setShowLogin(true)}
              className="bg-viettel-red text-white px-16 py-5 rounded-full font-black text-2xl shadow-2xl hover:bg-white hover:text-viettel-red hover:scale-110 border-4 border-white transition-all duration-300 transform hover:rotate-2 animate-pulse-slow"
            >
              NHẬN QUÀ NGAY
            </button>
          </div>
        </div>

        {/* CTA Button - Mobile (Below Banner) */}
        <div className="md:hidden mt-6 flex justify-center">
          <button
            onClick={() => setShowLogin(true)}
            className="bg-viettel-red text-white px-12 py-4 rounded-full font-black text-xl shadow-xl hover:opacity-90 hover:scale-105 transition-all duration-300 w-full max-w-md border-2 border-viettel-red animate-pulse-slow"
          >
            NHẬN QUÀ NGAY
          </button>
        </div>

        {/* Info Cards - Optional */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-8">
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center group cursor-pointer">
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">🎯</div>
            <h3 className="text-viettel-red font-bold text-lg mb-2">100% Trúng Quà</h3>
            <p className="text-gray-600 text-sm">Mọi người chơi đều nhận được phần quà giá trị</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center group cursor-pointer">
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">💰</div>
            <h3 className="text-viettel-red font-bold text-lg mb-2">Giải Thưởng Lớn</h3>
            <p className="text-gray-600 text-sm">Cơ hội trúng giải triệu đồng mỗi ngày</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center group cursor-pointer">
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">⚡</div>
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
