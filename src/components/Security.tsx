'use client';
import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { IMAGES } from '@/constants/images';

export const Security: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ['Bảo mật chuẩn quốc tế', 'Bảo chứng từ ngân hàng'];

  const tabContent = [
    {
      image: IMAGES.SECURITY[0],
      features: [
        'Công nghệ bảo mật của MoMo đáp ứng các tiêu chuẩn quốc tế khắt khe nhất trong ngành tài chính ngân hàng, đạt chứng nhận bảo mật toàn cầu PCI DSS cấp độ cao nhất.',
        'Công nghệ mã hóa đường truyền SSL/TLS đạt chứng nhận quốc tế GlobalSign.'
      ]
    },
    {
      image: IMAGES.SECURITY[1],
      features: [
        'Tiền của bạn trong MoMo là TIỀN THẬT và được bảo chứng 100% bởi các NGÂN HÀNG đang hợp tác với MoMo.',
        'Người dùng MoMo có thể Nạp/Rút tiền từ ngân hàng liên kết bất kỳ lúc nào.',
        'MoMo đã liên kết trực tiếp với hơn 36 ngân hàng lớn và các tổ chức thẻ quốc tế Visa/Master/JCB.'
      ]
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white via-pink-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-viettel-red text-2xl md:text-4xl lg:text-5xl font-extrabold text-center mb-8 md:mb-12">
          Thanh toán an toàn - Bảo mật tuyệt đối
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-3 md:gap-6 mb-12 md:mb-16 flex-wrap">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 md:px-10 py-3 md:py-4 rounded-full font-bold text-sm md:text-base transition-all duration-300 ${
                activeTab === index
                  ? 'text-viettel-red border-b-4 border-viettel-red'
                  : 'text-gray-600 hover:text-viettel-red'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="space-y-8 md:space-y-12">
          {/* Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-2xl">
              <img
                src={tabContent[activeTab].image}
                alt={tabs[activeTab]}
                className="w-full h-auto object-contain transition-opacity duration-500"
              />
            </div>
          </div>

          {/* Features List */}
          <div className="max-w-3xl mx-auto space-y-4 md:space-y-6">
            {tabContent[activeTab].features.map((feature, index) => (
              <div key={index} className="flex gap-3 md:gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="text-viettel-red w-5 h-5 md:w-6 md:h-6" strokeWidth={3} />
                </div>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
