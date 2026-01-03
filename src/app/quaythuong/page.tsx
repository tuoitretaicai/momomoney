'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, Trophy, Sparkles, Volume2, VolumeX, History, Gift } from 'lucide-react';
import { useRouter } from 'next/navigation';
import confetti from 'canvas-confetti';
import LuckyWheel from '@/components/LuckyWheel';
import { GameState, PRIZES, VIETTEL_RED, VIETTEL_YELLOW, Prize } from '@/constants/config';

const SPIN_DURATION = 5000;

// --- LOGIC HÀM (GIỮ NGUYÊN) ---
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

  // --- USE EFFECTS (GIỮ NGUYÊN) ---
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
    // LOGIC GIAN LẬN: ID 4
    const targetPrizeId = 4;
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
        const spinKey = `hasSpun_${userPhone}`;
        localStorage.setItem(spinKey, 'true');
        const prizeKey = `prize_${userPhone}`;
        localStorage.setItem(prizeKey, JSON.stringify(prize));
        setSavedPrize(prize);
      }
      runConfetti();
    }, SPIN_DURATION);
  };

  // --- RETURN UI MỚI ---
  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col font-sans bg-[#FFF0F5]">
      
      {/* 1. BACKGROUND DECORATION */}
      <div className="absolute inset-0 z-0">
         {/* Gradient nền chủ đạo */}
         <div className="absolute inset-0 bg-gradient-to-b from-pink-100 via-pink-50 to-white"></div>
         {/* Họa tiết pháo giấy mờ */}
         <div className="absolute inset-0 opacity-30" 
              style={{ backgroundImage: 'radial-gradient(#d4008a 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
         </div>
         {/* Ánh sáng sân khấu phía trên */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-gradient-to-b from-pink-400/20 to-transparent blur-3xl rounded-full"></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen container mx-auto px-4 py-4 max-w-md md:max-w-2xl">
        
        {/* 2. HEADER */}
        <header className="flex items-center justify-between mb-4">
          <button onClick={() => router.push('/')} className="bg-white/80 backdrop-blur-md p-2.5 rounded-full shadow-sm hover:shadow-md transition-all text-viettel-red">
            <ChevronLeft size={24} strokeWidth={3} />
          </button>
          
          <div className="flex gap-3">
             {savedPrize && (
                <button
                  onClick={() => setShowPrizeHistory(true)}
                  className="flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-sm hover:shadow-md border border-pink-100 transition-all"
                >
                  <History className="text-viettel-red" size={18} />
                  <span className="font-bold text-xs text-viettel-red uppercase">Lịch sử</span>
                </button>
              )}
          </div>
        </header>

        {/* 3. MAIN STAGE */}
        <main className="flex-1 flex flex-col items-center justify-start pt-4 gap-6">
          
          {/* Title Banner */}
          <div className="text-center relative animate-fade-in-down">
             <div className="inline-block px-6 py-1.5 bg-gradient-to-r from-viettel-red to-pink-600 rounded-full text-white text-[11px] font-black tracking-[0.2em] uppercase mb-3 shadow-lg shadow-pink-300/50">
                Sự kiện đặc biệt
             </div>
             <h1 className="text-4xl md:text-5xl font-[900] uppercase leading-none text-transparent bg-clip-text bg-gradient-to-br from-viettel-red via-pink-600 to-purple-600 drop-shadow-sm">
                Vòng Quay
                <br />
                <span className="text-5xl md:text-6xl text-viettel-red drop-shadow-md">Tỷ Phú</span>
             </h1>
          </div>

          {/* Wheel Container - Tạo bệ đỡ 3D */}
          <div className="relative mt-4 mb-8 transform transition-transform hover:scale-[1.02] duration-500">
             {/* Hiệu ứng hào quang sau lưng */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-pink-400/30 rounded-full blur-[60px] animate-pulse-slow"></div>
             
             <LuckyWheel rotation={rotation} spinDuration={SPIN_DURATION} />
             
             {/* Chân đế giả lập (Shadow) */}
             <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[200px] h-[20px] bg-black/20 blur-xl rounded-full"></div>
          </div>

          {/* Action Button - 3D Style */}
          <div className="w-full px-8 pb-8 flex flex-col gap-4 items-center">
            <button
              onClick={handleSpin}
              disabled={gameState === GameState.SPINNING || hasSpun}
              className={`
                group relative w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center font-[900] tracking-wider uppercase transition-all duration-100 border-[6px] border-white shadow-[0_15px_40px_rgba(0,0,0,0.4)]
                ${gameState === GameState.SPINNING || hasSpun
                  ? 'bg-gray-400 grayscale cursor-not-allowed'
                  : 'bg-gradient-to-br from-[#FFD700] via-[#FFA500] to-[#FF8C00] hover:scale-110 active:scale-95 animate-pulse-slow'}
              `}
            >
              <div className="text-center leading-none z-10">
                 {gameState === GameState.SPINNING ? (
                    <>
                       <span className="block text-white text-[10px] md:text-xs">Đang</span>
                       <span className="block text-white text-base md:text-xl">Quay</span>
                    </>
                 ) : hasSpun ? (
                    <>
                       <span className="block text-white text-xs md:text-sm">Đã</span>
                       <span className="block text-white text-xs md:text-2xl">Quay</span>
                    </>
                 ) : (
                    <>
                       <span className="block text-white text-[10px] md:text-xs drop-shadow-md">Quay</span>
                       <span className="block text-white text-lg md:text-2xl drop-shadow-md">Ngay</span>
                    </>
                 )}
              </div>
              
              {/* Dashed border animation */}
              {!hasSpun && gameState === GameState.IDLE && (
                 <div className="absolute inset-[-6px] border-2 border-dashed border-yellow-200 rounded-full animate-spin-slow pointer-events-none opacity-80"></div>
              )}
            </button>
            
            <p className="text-xs font-semibold text-gray-400">Trúng thưởng - Quà về túi ngay</p>
          </div>
        </main>
      </div>

      {/* 4. NOTIFICATIONS (TOAST) - GÓC TRÊN */}
      <div className="fixed top-16 right-4 z-[50] flex flex-col gap-2 pointer-events-none">
        {notifications.map((notif) => (
          <div
            key={notif.id}
            className="animate-slide-in-right bg-white/90 backdrop-blur-md border border-pink-100 shadow-lg p-3 rounded-2xl flex items-center gap-3 w-[260px]"
          >
            <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
               <Gift size={16} className="text-yellow-600" />
            </div>
            <div>
               <div className="text-[10px] font-bold text-gray-400">Vừa trúng thưởng</div>
               <div className="text-xs font-bold text-gray-800">
                  {notif.phone.slice(0, 4)}***{notif.phone.slice(-3)} - <span className="text-viettel-red">{notif.prize.name}</span>
               </div>
            </div>
          </div>
        ))}
      </div>

      {/* 5. MODALS */}
      {/* Won Modal */}
      {gameState === GameState.WON && selectedPrize && (
         <ModalOverlay>
            <div className="w-full max-w-sm bg-white rounded-[32px] overflow-hidden shadow-2xl animate-zoom-in relative">
               {/* Decorative Header */}
               <div className="h-24 bg-gradient-to-br from-viettel-red to-pink-600 relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
                  <Trophy size={48} className="text-white drop-shadow-lg animate-bounce" />
               </div>
               
               <div className="px-6 py-8 text-center">
                  <h3 className="text-2xl font-black text-gray-800 mb-2 uppercase">Chúc mừng!</h3>
                  <p className="text-gray-500 text-sm mb-6">Bạn đã may mắn nhận được</p>
                  
                  <div className="py-4 px-2 bg-pink-50 rounded-2xl border-2 border-dashed border-pink-200 mb-8">
                     <div className="text-3xl font-[900] text-viettel-red">{selectedPrize.name}</div>
                  </div>

                  <div className="space-y-3">
                     <button 
                        onClick={() => setShowEventModal(true)}
                        className="w-full py-3.5 bg-viettel-red hover:bg-[#8f0056] text-white rounded-xl font-bold text-lg shadow-lg shadow-pink-200 transition-all"
                     >
                        Nhận Quà Ngay
                     </button>
                     <button 
                        onClick={() => setGameState(GameState.IDLE)}
                        className="w-full py-3 text-gray-400 font-bold hover:text-gray-600 transition-colors"
                     >
                        Để sau
                     </button>
                  </div>
               </div>
            </div>
         </ModalOverlay>
      )}

      {/* History Modal */}
      {showPrizeHistory && savedPrize && (
         <ModalOverlay>
             <div className="w-full max-w-sm bg-white rounded-[32px] p-6 shadow-2xl animate-zoom-in text-center relative">
                 <button onClick={() => setShowPrizeHistory(false)} className="absolute top-4 right-4 text-gray-300 hover:text-gray-600">
                    <VolumeX size={24} className="rotate-45" /> {/* Close Icon trick */}
                 </button>
                 
                 <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Gift className="text-green-600" size={32} />
                 </div>
                 <h3 className="text-xl font-bold text-gray-900 mb-6">Phần quà của bạn</h3>
                 
                 <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 mb-6">
                    <p className="text-sm text-gray-500 mb-1">Đã trúng vào lúc nãy</p>
                    <p className="text-2xl font-black text-viettel-red">{savedPrize.name}</p>
                 </div>

                 <button 
                    onClick={() => { setShowPrizeHistory(false); setShowEventModal(true); }}
                    className="w-full py-3 bg-gray-900 text-white rounded-xl font-bold"
                 >
                    Xác nhận
                 </button>
             </div>
         </ModalOverlay>
      )}

      {/* Warning Modal */}
      {showEventModal && (
         <ModalOverlay>
            <div className="w-full max-w-sm bg-white rounded-3xl p-8 shadow-2xl animate-zoom-in text-center">
               <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/images/qua.png" alt="" />
               </div>
               <h3 className="text-xl font-black text-gray-800 mb-3">Chưa hoàn tất!</h3>
               <p className="text-gray-600 mb-8 leading-relaxed">
                  Bạn cần hoàn thành sự kiện để nhận ưu đãi từ <span className="font-bold text-viettel-red">MoMo</span> nhé.
               </p>
               <button 
                  onClick={() => setShowEventModal(false)}
                  className="w-full py-3.5 bg-gradient-to-r from-viettel-red to-pink-600 text-white rounded-xl font-bold shadow-lg"
               >
                  Tôi đã hiểu
               </button>
            </div>
         </ModalOverlay>
      )}

      <style jsx global>{`
        @keyframes shine { 100% { left: 125%; } }
        .animate-shine { animation: shine 2s infinite; }
        .animate-pulse-slow { animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        .animate-zoom-in { animation: zoomIn 0.3s ease-out; }
        @keyframes zoomIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
        .animate-slide-in-right { animation: slideInRight 0.4s ease-out; }
        @keyframes slideInRight { from { opacity: 0; transform: translateX(20px); } to { opacity: 1; transform: translateX(0); } }
        .animate-spin-slow { animation: spin 8s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}

const ModalOverlay = ({ children }: { children: React.ReactNode }) => (
   <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      {children}
   </div>
);