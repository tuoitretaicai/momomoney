'use client';
import React, { useState, useEffect } from 'react';
import { IMAGES } from '@/constants/images';

export const Promotions: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const tabs = ['Tải Và Đăng Ký'];
  
  const steps = [
    {
      number: 1,
      title: 'Tải ứng dụng MoMo;',
      description: 'Tải ứng dụng miễn phí bằng cách kiếm từ khoá "MoMo" trên App Store hoặc Google Play Store.'
    },
    {
      number: 2,
      title: 'Đăng ký bằng Số Điện Thoại;',
      description: 'Nhập số điện thoại của bạn để đăng ký tài khoản MoMo.'
    },
    {
      number: 3,
      title: 'Xác thực OTP;',
      description: 'Nhập mã OTP được gửi về số điện thoại để xác thực.'
    },
    {
      number: 4,
      title: 'Tạo mật khẩu đăng nhập;',
      description: 'Thiết lập mật khẩu bảo mật cho tài khoản của bạn.'
    },
    {
      number: 5,
      title: 'Hoàn tất đăng ký MoMo.',
      description: 'Hoàn tất quá trình đăng ký và bắt đầu sử dụng MoMo.'
    }
  ];

  // Auto-advance images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % IMAGES.PROMOTIONS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-viettel-red text-2xl md:text-4xl lg:text-5xl font-extrabold text-center mb-8 md:mb-12">
          Ba bước trở thành khách hàng MoMo
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-2 md:gap-4 mb-12 md:mb-16">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-4 md:px-8 py-3 md:py-4 rounded-full font-bold text-xs md:text-base transition-all duration-300 ${
                index === 0
                  ? 'bg-viettel-red text-white shadow-lg'
                  : 'bg-pink-100 text-gray-600 hover:bg-pink-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex flex-col items-center max-w-md mx-auto">
          {/* iPhone Mockup */}
          <div className="relative w-full max-w-[300px]">
            {/* iPhone Frame */}
            <div className="relative bg-gray-900 rounded-[45px] p-3 shadow-2xl">
              <div className="relative bg-black rounded-[38px] overflow-hidden">
                {/* Dynamic Island */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-950 rounded-full z-10"></div>
                
                {/* Image Slider */}
                <div className="relative w-full aspect-[591/1280]">
                  {IMAGES.PROMOTIONS.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`Step ${idx + 1}`}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                        idx === currentImageIndex ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Side Buttons */}
              <div className="absolute left-0 top-24 w-1 h-12 bg-gray-700 rounded-r"></div>
              <div className="absolute left-0 top-40 w-1 h-16 bg-gray-700 rounded-r"></div>
              <div className="absolute right-0 top-32 w-1 h-20 bg-gray-700 rounded-l"></div>
            </div>
          </div>

          {/* Number Navigation */}
          <div className="flex justify-center gap-3 mt-8 mb-6">
            {steps.map((step, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-10 h-10 rounded-full font-bold text-sm transition-all duration-300 ${
                  index === currentImageIndex
                    ? 'bg-viettel-red text-white shadow-lg scale-110'
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                }`}
              >
                {step.number}
              </button>
            ))}
          </div>

          {/* Step Info */}
          <div className="text-center px-4 min-h-[120px]">
            <h3 className="text-viettel-red font-bold text-xl md:text-2xl mb-3">
              {steps[currentImageIndex].title}
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md mx-auto">
              {steps[currentImageIndex].description}
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12 md:mt-16">
          <a href="https://apps.apple.com/us/app/viettel-money/id1344204781" target="_blank" rel="noopener noreferrer">
            <button className="bg-viettel-red text-white px-10 md:px-14 py-3 md:py-4 rounded-full font-bold text-base md:text-lg shadow-xl hover:opacity-90 hover:scale-105 transition-all duration-300">
              Xem ngay
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};
