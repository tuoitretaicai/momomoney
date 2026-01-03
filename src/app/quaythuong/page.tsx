'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, Trophy, Sparkles, X, Gift, Bell } from 'lucide-react';
import { useRouter } from 'next/navigation';
import confetti from 'canvas-confetti';
import LuckyWheel from '@/components/LuckyWheel';
import { GameState, PRIZES, VIETTEL_RED, VIETTEL_YELLOW, Prize } from '@/constants/config';

const SPIN_DURATION = 5000;
const MOMO_CHARACTER_3D = "https://img.mservice.com.vn/app/img/portal_documents/mini-app_design-guideline_mascot-1.png";

const runConfetti = () => {
  const duration = 3 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };
  const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;
  const interval: any = setInterval(function () {
    const timeLeft = animationEnd - Date.now();
    if (timeLeft <= 0) return clearInterval(interval);
    const particleCount = 50 * (timeLeft / duration);
    confetti({ ...defaults, particleCount, colors: [VIETTEL_RED, VIETTEL_YELLOW, '#FFFFFF'], origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }, });
    confetti({ ...defaults, particleCount, colors: [VIETTEL_RED, VIETTEL_YELLOW, '#FFFFFF'], origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }, });
  }, 250);
};

export default function QuayThuongPage() {
  const router = useRouter();
  const [gameState, setGameState] = useState<GameState>(GameState.IDLE);
  const [rotation, setRotation] = useState(0);
  const [selectedPrize, setSelectedPrize] = useState<Prize | null>(null);
  const [hasSpun, setHasSpun] = useState(false);
  const [userPhone, setUserPhone] = useState<string>('');
  const [showEventModal, setShowEventModal] = useState(false);
  const [showPrizeHistory, setShowPrizeHistory] = useState(false);
  const [savedPrize, setSavedPrize] = useState<Prize | null>(null);
  const [notifications, setNotifications] = useState<Array<{id: number, phone: string, prize: Prize}>>([]);

  useEffect(() => {
    const phone = localStorage.getItem('userPhone');
    if (!phone) { router.push('/'); return; }
    setUserPhone(phone);
    const spinKey = `hasSpun_${phone}`;
    const alreadySpun = localStorage.getItem(spinKey);
    if (alreadySpun === 'true') {
      setHasSpun(true);
      const prizeKey = `prize_${phone}`;
      const savedPrizeData = localStorage.getItem(prizeKey);
      if (savedPrizeData) { setSavedPrize(JSON.parse(savedPrizeData)); }
    }
  }, [router]);

  useEffect(() => {
    const generateNotification = () => {
      const targetPrizeIds = [5, 6, 7, 8];
      const randomPrizeId = targetPrizeIds[Math.floor(Math.random() * targetPrizeIds.length)];
      const prize = PRIZES.find(p => p.id === randomPrizeId);
      if (!prize) return;
      const prefixes = ['09', '08', '07', '03'];
      const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
      const numbers = Math.floor(Math.random() * 100000000).toString().padStart(8, '0');
      const fakePhone = `${prefix}${numbers}`;
      const newNotif = { id: Date.now(), phone: fakePhone, prize: prize };
      setNotifications(prev => [...prev, newNotif]);
      setTimeout(() => { setNotifications(prev => prev.filter(n => n.id !== newNotif.id)); }, 4000);
    };
    const firstTimeout = setTimeout(generateNotification, 2000);
    const interval = setInterval(() => { generateNotification(); }, Math.random() * 7000 + 8000);
    return () => { clearTimeout(firstTimeout); clearInterval(interval); };
  }, []);

  const handleSpin = () => {
    if (gameState !== GameState.IDLE || hasSpun) return;
    setGameState(GameState.SPINNING);
    const targetPrizeId = 4; // GIAN LẬN: ID 4
    const prize = PRIZES.find((p) => p.id === targetPrizeId)!;
    const prizeIndex = PRIZES.findIndex((p) => p.id === targetPrizeId);
    const segmentAngle = 360 / PRIZES.length;
    const baseRotation = 360 * 10; 
    const targetOffset = 360 - (prizeIndex * segmentAngle) - (segmentAngle / 2);
    const finalRotation = baseRotation + targetOffset;

    setRotation(finalRotation);

    setTimeout(() => {
      setSelectedPrize(prize);
      setGameState(GameState.WON);
      setHasSpun(true);
      if (userPhone) {
        localStorage.setItem(`hasSpun_${userPhone}`, 'true');
        localStorage.setItem(`prize_${userPhone}`, JSON.stringify(prize));
        setSavedPrize(prize);
      }
      runConfetti();
    }, SPIN_DURATION);
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col font-sans bg-[#FEE2E2]">
      
      {/* 1. BACKGROUND */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-white via-pink-50 to-pink-100"></div>
      <div className="absolute top-10 left-10 opacity-40 animate-float-slow delay-100"><CloudIcon size={60} color="#FECDD3" /></div>
      <div className="absolute top-20 right-[-20px] opacity-30 animate-float-slow"><CloudIcon size={100} color="#FBCFE8" /></div>

      {/* 2. HEADER */}
      <div className="relative z-20 px-4 py-4 flex items-center justify-between">
        <button onClick={() => router.push('/')} className="bg-white p-2 rounded-xl shadow-sm border border-pink-100 text-gray-600 hover:text-viettel-red transition-all">
           <ChevronLeft size={24} strokeWidth={2.5} />
        </button>
        <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-1.5 rounded-full border border-pink-100 shadow-sm">
           <Bell size={16} className="text-viettel-red animate-pulse" />
           <span className="text-xs font-bold text-gray-700">Sự kiện HOT</span>
        </div>
        {savedPrize && (
             <button onClick={() => setShowPrizeHistory(true)} className="bg-white p-2 rounded-xl shadow-sm border border-pink-100 text-viettel-red hover:scale-110 transition-transform">
                <Trophy size={24} />
             </button>
        )}
      </div>

      {/* 3. MAIN CONTENT */}
      <div className="relative z-10 flex-1 flex flex-col items-center pt-2 pb-32 px-4">
         
         <div className="mb-2 animate-bounce-slow">
             <img src="https://homepage.momocdn.net/fileuploads/svg/momo-file-240411162904.svg" alt="MoMo Logo" className="h-10 md:h-12 w-auto drop-shadow-md" />
         </div>

         {/* KHUNG VÒNG QUAY - Có Ribbon 45 độ */}
         {/* overflow-hidden để cắt phần thừa của ribbon */}
         <div className="relative bg-white/40 backdrop-blur-xl p-1 md:p-8 rounded-[40px] shadow-[0_20px_60px_-12px_rgba(0,0,0,0.15)] border border-white/80 w-auto flex flex-col items-center mt-4 overflow-hidden">
             
             {/* RIBBON: Góc trên bên trái, nghiêng 45 độ */}
             <div className="absolute top-0 left-0 w-32 h-32 pointer-events-none overflow-hidden rounded-tl-[40px]">
                <div className="absolute top-[20px] -left-[35px] w-[140px] bg-gradient-to-r from-viettel-red to-pink-600 text-white text-[10px] md:text-xs font-black text-center py-1.5 -rotate-45 shadow-lg border-b-2 border-white z-20 uppercase tracking-widest">
                  MOMO SỰ KIỆN
                </div>
             </div>

             {/* Component Vòng quay */}
             <div className="mt-4 mb-2 p-2">
                <LuckyWheel rotation={rotation} spinDuration={SPIN_DURATION} />
             </div>

             <div className="bg-white/60 backdrop-blur-sm px-6 py-2 rounded-full shadow-sm mb-4">
                 <p className="text-center text-viettel-red text-xs md:text-sm font-bold animate-pulse">
                    ✨ Quay là trúng - Nhận quà liền tay ✨
                 </p>
             </div>
         </div>
      </div>

      {/* 4. FOOTER & BUTTON */}
      <div className="fixed bottom-0 left-0 right-0 h-[240px] z-20 pointer-events-none">
          {/* Sóng */}
          <div className="absolute bottom-0 left-0 w-full h-full">
             <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-auto text-viettel-red fill-current drop-shadow-[0_-10px_20px_rgba(166,0,99,0.3)]" preserveAspectRatio="none">
                <path fillOpacity="1" d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,138.7C672,117,768,107,864,122.7C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
             </svg>
          </div>
          <div className="absolute bottom-[90px] md:bottom-[110px] left-1/2 -translate-x-1/2 pointer-events-auto">
             <button
               onClick={handleSpin}
               disabled={gameState === GameState.SPINNING || hasSpun}
               className={`
                  relative w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center
                  border-[6px] border-white shadow-[0_15px_40px_rgba(0,0,0,0.4)]
                  transition-all duration-300 group
                  ${gameState === GameState.SPINNING || hasSpun 
                    ? 'bg-gray-400 grayscale cursor-not-allowed scale-95' 
                    : 'bg-gradient-to-br from-[#FFD700] via-[#FFA500] to-[#FF8C00] hover:scale-110 active:scale-95 animate-pulse-slow'}
               `}
             >
                <div className="text-center leading-none z-10">
                   <span className="block text-white font-[900] text-sm md:text-base uppercase drop-shadow-md">
                      {hasSpun ? 'Xong' : 'Quay'}
                   </span>
                   <span className="block text-white font-[900] text-xl md:text-3xl uppercase drop-shadow-md">
                      {hasSpun ? '!' : 'Ngay'}
                   </span>
                </div>
                {!hasSpun && (
                    <div className="absolute inset-[-8px] border-2 border-dashed border-yellow-200 rounded-full animate-spin-slow pointer-events-none opacity-80"></div>
                )}
             </button>
          </div>
      </div>

      {/* 5. NOTIFICATIONS - Hài hòa hơn (Glassmorphism Pill) */}
      <div className="fixed top-20 right-4 z-[50] flex flex-col gap-2 pointer-events-none max-w-[280px]">
        {notifications.map((notif) => (
          <div 
            key={notif.id} 
            className="animate-slide-in-right bg-white/90 backdrop-blur-md shadow-xl pl-2 pr-4 py-2 rounded-full flex items-center gap-3 border border-white/50"
          >
            {/* Icon tròn */}
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-100 to-white flex items-center justify-center border border-pink-100 shadow-sm flex-shrink-0">
               <span className="text-base">🎁</span>
            </div>
            
            <div className="flex-1 min-w-0 flex flex-col">
               <div className="flex justify-between items-baseline gap-2">
                  <span className="text-[11px] font-bold text-gray-800">
                    {notif.phone.slice(0, 4)}***{notif.phone.slice(-3)}
                  </span>
                  <span className="text-[9px] text-gray-400">Vừa xong</span>
               </div>
               <div className="text-[10px] text-viettel-red font-bold truncate leading-tight">
                  Trúng {notif.prize.name}
               </div>
            </div>
          </div>
        ))}
      </div>

      {/* 6. MODALS */}
      {gameState === GameState.WON && selectedPrize && (
         <ModalOverlay>
            <div className="w-full max-w-sm bg-white rounded-[2rem] overflow-hidden shadow-2xl animate-zoom-in relative border-4 border-yellow-400">
               <button onClick={() => setGameState(GameState.IDLE)} className="absolute top-4 right-4 z-20 text-white/80 hover:text-white bg-black/20 hover:bg-black/30 rounded-full p-1 transition-all">
                  <X size={24}/>
               </button>
               <div className="bg-pattern p-6 text-center relative">
                   <div className="absolute top-0 left-0 w-full h-full bg-viettel-red opacity-90"></div>
                   <div className="relative z-10">
                        <Trophy size={50} className="text-yellow-300 mx-auto mb-2 drop-shadow-md animate-bounce" />
                        <h2 className="text-white font-black text-2xl uppercase">Trúng Lớn Rồi!</h2>
                   </div>
               </div>
               <div className="p-6 text-center">
                  <p className="text-gray-500 mb-4">Bạn vừa quay trúng phần quà</p>
                  <div className="text-3xl font-[900] text-viettel-red mb-8 animate-pulse">{selectedPrize.name}</div>
                  <button onClick={() => setShowEventModal(true)} className="w-full py-4 bg-viettel-red text-white font-bold rounded-xl hover:bg-opacity-90 transition-all shadow-lg shadow-pink-200">
                     Nhận Quà Ngay
                  </button>
               </div>
            </div>
         </ModalOverlay>
      )}

      {showEventModal && (
         <ModalOverlay>
            <div className="w-full max-w-xs bg-white rounded-3xl p-6 text-center shadow-2xl relative">
               <button onClick={() => setShowEventModal(false)} className="absolute top-3 right-3 text-gray-300 hover:text-gray-500"><X size={20}/></button>
               <div className="mb-4">
                  <img src="https://homepage.momocdn.net/fileuploads/svg/momo-file-240411162904.svg" className="h-8 mx-auto mb-2" />
                  <h3 className="font-bold text-lg">Thông báo sự kiện</h3>
               </div>
               <p className="text-sm text-gray-600 mb-6">Bạn cần hoàn thành nhiệm vụ sự kiện để nhận phần quà này nhé!</p>
               <button onClick={() => setShowEventModal(false)} className="w-full py-3 bg-gray-100 font-bold text-gray-700 rounded-xl hover:bg-gray-200">Đã hiểu</button>
            </div>
         </ModalOverlay>
      )}

      {showPrizeHistory && savedPrize && (
          <ModalOverlay>
            <div className="w-full max-w-xs bg-white rounded-3xl p-6 text-center shadow-2xl relative">
                <button onClick={() => setShowPrizeHistory(false)} className="absolute top-3 right-3 text-gray-300 hover:text-gray-500"><X size={20}/></button>
                <h3 className="font-bold text-xl text-viettel-red mb-4 uppercase">Lịch sử quà</h3>
                <div className="bg-pink-50 p-4 rounded-xl border border-pink-100 mb-4">
                    <span className="text-2xl font-[900] text-gray-800">{savedPrize.name}</span>
                </div>
                <button onClick={() => {setShowPrizeHistory(false); setShowEventModal(true)}} className="w-full py-3 bg-viettel-red text-white font-bold rounded-xl">Nhận lại</button>
            </div>
          </ModalOverlay>
      )}

      <style jsx global>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-spin-slow { animation: spin 8s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .bg-pattern { background-image: radial-gradient(#ffffff 20%, transparent 20%); background-size: 20px 20px; }
      `}</style>
    </div>
  );
}

const CloudIcon = ({size, color}: {size: number, color: string}) => (
    <svg width={size} height={size*0.6} viewBox="0 0 24 14" fill={color} xmlns="http://www.w3.org/2000/svg">
        <path d="M18.5 2C16.0147 2 14 4.01472 14 6.5C14 6.645 14.007 6.78776 14.0208 6.92815C13.232 6.33649 12.2343 6 11.5 6C8.46243 6 6 8.46243 6 11.5C6 11.8967 6.04231 12.2818 6.12304 12.6511C5.77977 12.2382 5.24835 12 4.5 12C2.567 12 1 13.567 1 15.5C1 17.433 2.567 19 4.5 19H19.5C21.433 19 23 17.433 23 15.5C23 13.567 21.433 12 19.5 12C19.5 12 19.5 12 19.4975 12C19.8242 11.2384 20 10.3957 20 9.5C20 5.35786 16.6421 2 12.5 2H18.5Z" transform="translate(0 -2)" />
    </svg>
);

const ModalOverlay = ({ children }: { children: React.ReactNode }) => (
   <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      {children}
   </div>
);