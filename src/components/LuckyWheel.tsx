'use client';
import React from 'react';
import { PRIZES } from '@/constants/config';

// --- CẤU HÌNH MÀU SẮC DỰA TRÊN #a60063 ---
const MAIN_COLOR = '#a60063';       // Màu gốc bạn yêu cầu
const LIGHTER_COLOR = '#d40080';    // Màu sáng hơn (để tạo khối 3D phần trên)
const DARKER_COLOR = '#590035';     // Màu đậm hơn (để tạo bóng đổ phần dưới)

interface LuckyWheelProps {
  rotation: number;
  spinDuration: number;
}

export default function LuckyWheel({ rotation, spinDuration }: LuckyWheelProps) {
  const totalLights = 36; 

  return (
    <div className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px] flex items-center justify-center">
      
      {/* --- CSS ANIMATION --- */}
      <style>{`
        /* 1. Hiệu ứng đèn chạy (Giữ màu vàng kim để nổi trên nền tím đỏ) */
        @keyframes runningLight {
            0% { 
                background: ${DARKER_COLOR}; 
                box-shadow: inset 0 1px 2px rgba(0,0,0,0.5);
                transform: scale(0.8);
                opacity: 0.7;
            }
            50% { 
                background: #fef08a; 
                box-shadow: 0 0 10px #fef08a, 0 0 20px #eab308; 
                transform: scale(1.3);
                opacity: 1;
            }
            100% { 
                background: ${DARKER_COLOR};
                box-shadow: inset 0 1px 2px rgba(0,0,0,0.5);
                transform: scale(0.8);
                opacity: 0.7;
            }
        }

        /* 2. Hiệu ứng quét sáng (Sheen) */
        @keyframes sheenSweep {
            0% { left: -100%; opacity: 0; }
            50% { opacity: 0.5; }
            100% { left: 200%; opacity: 0; }
        }

        /* 3. Hiệu ứng nhịp tim (Heartbeat) */
        @keyframes heartBeat {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }
      `}</style>

      {/* 1. LỚP ĐÈN (LAYER CAO NHẤT) */}
      <div className="absolute inset-0 z-30 pointer-events-none rounded-full">
         {Array.from({ length: totalLights }).map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 rounded-full transition-all"
              style={{
                width: '10px',
                height: '10px',
                transform: `rotate(${i * (360 / totalLights)}deg) translateX(150px)`, 
                animation: `runningLight 1.5s infinite`,
                animationDelay: `${i * (1.5 / totalLights)}s`
              }}
            >
                <style jsx>{`
                    @media (min-width: 768px) {
                        div { transform: rotate(${i * (360 / totalLights)}deg) translateX(200px) !important; }
                    }
                `}</style>
            </div>
         ))}
      </div>

      {/* 2. KIM CHỈ (POINTER) - THEO TÔNG MÀU MỚI */}
      <div className="absolute top-[-25px] left-1/2 -translate-x-1/2 z-50 filter drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
        <div className="relative group">
             {/* Thân kim - Gradient từ nhạt sang màu gốc */}
             <div 
                className="w-16 h-20 rounded-b-full border-[4px] border-white flex justify-center pt-2 shadow-2xl relative overflow-hidden"
                style={{ background: `linear-gradient(to bottom, ${LIGHTER_COLOR}, ${MAIN_COLOR})` }}
             >
                <div className="absolute inset-0 bg-gradient-to-tr from-white/30 to-transparent opacity-50"></div>
                <div className="w-8 h-8 rounded-full bg-black/20 shadow-inner"></div>
             </div>
             {/* Mũi kim */}
             <div 
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[18px] filter drop-shadow-sm"
                style={{ borderTopColor: MAIN_COLOR }}
             ></div>
             {/* Đinh tán vàng */}
             <div className="absolute top-3 left-1/2 -translate-x-1/2 w-5 h-5 bg-gradient-to-br from-yellow-200 to-yellow-600 rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.3)] border border-yellow-700 z-10"></div>
        </div>
      </div>

      {/* 3. KHUNG VIỀN & ĐĨA QUAY */}
      <div 
        className="relative w-full h-full rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-4 overflow-hidden"
        style={{
            // Gradient viền ngoài: Màu gốc -> Màu đậm
            background: `linear-gradient(to bottom right, ${MAIN_COLOR}, ${DARKER_COLOR})`,
            borderColor: '#85004f', // Viền border cứng tối hơn màu gốc xíu
            borderWidth: '6px',
            borderStyle: 'solid'
        }}
      >
         
         {/* Hiệu ứng quét sáng */}
         <div 
            className="absolute top-0 bottom-0 w-[50px] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg] z-20 pointer-events-none"
            style={{ animation: 'sheenSweep 3s infinite linear' }}
         ></div>

         {/* ĐĨA QUAY */}
         <div className="w-full h-full rounded-full overflow-hidden bg-white shadow-[inset_0_0_20px_rgba(0,0,0,0.2)] border-[4px] border-white relative z-10">
            <div
                className="w-full h-full transition-transform cubic-bezier(0.25, 0.1, 0.25, 1)"
                style={{
                    transform: `rotate(${rotation}deg)`,
                    transitionDuration: `${spinDuration}ms`,
                }}
            >
                <svg viewBox="0 0 100 100" className="w-full h-full transform scale-[1.02]">
                    {PRIZES.map((prize, i) => {
                        const angle = 360 / PRIZES.length;
                        const startAngle = i * angle;
                        const endAngle = (i + 1) * angle;
                        
                        const x1 = 50 + 50 * Math.cos(((startAngle - 90) * Math.PI) / 180);
                        const y1 = 50 + 50 * Math.sin(((startAngle - 90) * Math.PI) / 180);
                        const x2 = 50 + 50 * Math.cos(((endAngle - 90) * Math.PI) / 180);
                        const y2 = 50 + 50 * Math.sin(((endAngle - 90) * Math.PI) / 180);

                        return (
                            <g key={prize.id}>
                                <path
                                    d={`M 50 50 L ${x1} ${y1} A 50 50 0 0 1 ${x2} ${y2} Z`}
                                    fill={prize.color}
                                    stroke="white"
                                    strokeWidth="0.8"
                                />
                                <foreignObject
                                    x="0" y="0" width="100" height="100"
                                    transform={`rotate(${startAngle + angle / 2}, 50, 50)`}
                                >
                                    <div className="w-full h-full flex justify-center pt-2">
                                        <div 
                                            className="text-[3px] font-bold uppercase text-center w-[18px] leading-[1.3] tracking-wider"
                                            style={{ 
                                                // Chữ màu đậm nếu nền trắng
                                                color: prize.color === '#FFFFFF' ? MAIN_COLOR : 'white',
                                                textShadow: prize.color === '#FFFFFF' ? 'none' : '0 1px 2px rgba(0,0,0,0.4)'
                                            }}
                                        >
                                            {prize.name}
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        );
                    })}
                </svg>
            </div>
         </div>

         {/* TRỤC GIỮA (CENTER HUB) */}
         <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.3)] flex items-center justify-center z-40"
            style={{ 
                animation: 'heartBeat 2s infinite ease-in-out',
                borderColor: MAIN_COLOR,
                borderWidth: '5px',
                borderStyle: 'solid'
            }} 
         >
            {/* Gradient trục giữa: Sáng -> Gốc */}
            <div 
                className="w-16 h-16 rounded-full flex items-center justify-center border-2 border-dashed border-white/60 shadow-inner"
                style={{ background: `linear-gradient(to bottom right, ${LIGHTER_COLOR}, ${MAIN_COLOR})` }}
            >
                <span className="text-white font-black text-sm drop-shadow-md tracking-wider">MoMo</span>
            </div>
            {/* Hiệu ứng bóng gương */}
            <div className="absolute top-2 left-2 w-6 h-3 bg-white/40 rounded-full rotate-[-45deg] blur-[1px]"></div>
         </div>

      </div>
    </div>
  );
}