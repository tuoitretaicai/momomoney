'use client';
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { IMAGES } from '@/constants/images';

export const InstructionSection: React.FC = () => {
  const features = [
    {
      imageUrl: 'https://homepage.momocdn.net/img/momo-amazone-s3-api-241028103602-638657085621385299.png',
      title: 'Theo dõi và quản lý chi tiêu hiệu quả'
    },
    {
      imageUrl: 'https://homepage.momocdn.net/img/momo-amazone-s3-api-241028104738-638657092586817069.png',
      title: 'Vận hành kinh doanh đơn giản'
    },
    {
      imageUrl: 'https://homepage.momocdn.net/img/momo-amazone-s3-api-241028104753-638657092738866236.png',
      title: 'Chi tiêu thông minh, sinh lời dễ dàng'
    },
    {
      imageUrl: 'https://homepage.momocdn.net/img/momo-amazone-s3-api-241028104806-638657092865001677.png',
      title: 'A.I đề xuất dịch vụ cá nhân hóa'
    },
    {
      imageUrl: 'https://homepage.momocdn.net/img/momo-amazone-s3-api-241028104825-638657093058084317.png',
      title: 'Tín dụng trong tầm tay'
    },
    {
      imageUrl: 'https://homepage.momocdn.net/img/momo-amazone-s3-api-241028104846-638657093263226007.png',
      title: 'A.I đồng hành xây dựng thói quen chi tiêu'
    },
    {
      imageUrl: 'https://homepage.momocdn.net/img/momo-amazone-s3-api-241028104900-638657093406918713.png',
      title: 'Đầu tư không rào cản chỉ với 10.000đ'
    },
    {
      imageUrl: 'https://homepage.momocdn.net/img/momo-amazone-s3-api-241028104909-638657093492807751.png',
      title: 'An toàn bảo mật tối đa với A.I'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-pink-50 via-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-viettel-red text-2xl md:text-4xl lg:text-5xl font-extrabold mb-4">
            MoMo nay là Trợ Thủ Tài Chính với A.I
          </h2>
          <p className="text-gray-600 text-sm md:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed">
            Giúp bạn làm được nhiều thứ hơn với tiền với vô vàn tiện ích tài chính<br className="hidden md:block" />
            và sự trợ giúp của công nghệ A.I
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 gap-4 md:gap-8 mb-16 md:mb-20">
          {features.map((feature, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-4 md:p-6 bg-white rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                {/* Icon Image */}
                <div className="w-16 h-16 md:w-20 md:h-20 mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={feature.imageUrl} 
                    alt={feature.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {/* Title */}
                <p className="text-gray-800 font-semibold text-sm md:text-base leading-snug">
                  {feature.title}
                </p>
              </div>
            );
          })}
        </div>

        {/* Three Steps Section */}
        
      </div>
    </section>
  );
};
