'use client';
import React from 'react';
import { VIETTEL_RED, PRIZES } from '@/constants/config';

interface LuckyWheelProps {
  rotation: number;
  spinDuration: number;
}

export default function LuckyWheel({ rotation, spinDuration }: LuckyWheelProps) {
  return (
    // TĂNG KÍCH THƯỚC Ở ĐÂY: Mobile 360px, Desktop 520px
    <div className="relative w-[360px] h-[360px] md:w-[520px] md:h-[520px]">
      
      {/* 1. POINTER (Kim chỉ) */}
      <div className="absolute top-[-10px] md:top-[-15px] left-1/2 -translate-x-1/2 z-50 filter drop-shadow-xl">
        <div className="relative scale-110 md:scale-125">
             {/* Thân kim */}
             <div className="w-14 h-16 bg-gradient-to-b from-red-600 to-red-800 rounded-b-full border-[3px] border-white flex justify-center pt-2">
                <div className="w-8 h-8 rounded-full bg-red-900/30"></div>
             </div>
             {/* Mũi kim */}
             <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[14px] border-t-red-800"></div>
             <div className="absolute top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-full shadow-inner border border-yellow-600"></div>
        </div>
      </div>

      {/* 2. OUTER RIM (Viền ngoài) */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-viettel-red to-[#60003a] shadow-2xl p-2 md:p-3">
         <div className="w-full h-full rounded-full bg-[#80004d] border-[6px] border-[#a60063] relative">
            
            {/* LED Lights Circle - Cập nhật vị trí translateX cho khớp kích thước mới */}
            {Array.from({ length: 24 }).map((_, i) => (
                <div
                key={i}
                className="absolute w-3 h-3 md:w-4 md:h-4 rounded-full bg-yellow-300 shadow-[0_0_15px_#facc15] border border-white/50"
                style={{
                    top: '50%',
                    left: '50%',
                    // Mobile: 168px, Desktop: 245px (Bán kính mới)
                    transform: `rotate(${i * 15}deg) translate(0, -50%) translateX(168px) md:translateX(245px)`,
                    animation: `blinkLights 1s infinite ${i % 2 === 0 ? '0s' : '0.5s'}`,
                }}
                />
            ))}

             {/* 3. SPINNING DISC (Đĩa quay) */}
             <div className="absolute inset-3 md:inset-4 rounded-full overflow-hidden bg-white shadow-inner border-4 border-white">
                <div
                    className="w-full h-full transition-transform cubic-bezier(0.2, 0, 0.1, 1)"
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
                                        strokeWidth="0.5"
                                    />
                                    <foreignObject
                                        x="0" y="0" width="100" height="100"
                                        transform={`rotate(${startAngle + angle / 2}, 50, 50)`}
                                    >
                                        <div className="w-full h-full flex justify-center pt-2">
                                            <div 
                                                className="text-[3.5px] font-[900] uppercase text-center w-[15px] leading-[1.1]"
                                                style={{ 
                                                    color: prize.color === '#FFFFFF' ? VIETTEL_RED : 'white',
                                                    textShadow: prize.color === '#FFFFFF' ? 'none' : '0 1px 2px rgba(0,0,0,0.2)'
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

             {/* 4. CENTER HUB */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-24 md:h-24 bg-white rounded-full border-4 border-viettel-red shadow-xl flex items-center justify-center z-40">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-viettel-red flex items-center justify-center border-2 border-dashed border-white/50">
                    <span className="text-white font-black text-xs md:text-lg">MoMo</span>
                </div>
             </div>

         </div>
      </div>

      <style jsx>{`
        @keyframes blinkLights {
            0%, 100% { opacity: 1; transform: scale(1); box-shadow: 0 0 15px #facc15; }
            50% { opacity: 0.4; transform: scale(0.8); box-shadow: 0 0 2px #facc15; }
        }
      `}</style>
    </div>
  );
}