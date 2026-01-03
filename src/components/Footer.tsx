import React, { useState } from 'react';
import {
  Smartphone,
  Globe,
  Mail,
  Facebook,
  Users,
  Headphones,
  Star,
  FileText,
  Info,
  X,
} from 'lucide-react';
import { TEXTS } from '@/constants/text';
import { LoginModal } from './LoginModal';
import { useInView } from '@/hooks/useInView';

export const Footer: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const { ref, isInView } = useInView();

  return (
  <footer ref={ref} className="bg-gray-900 text-white pt-10 pb-24 md:pb-16 relative overflow-hidden">
    {/* Top Section - Company Info */}
    <div className="max-w-7xl mx-auto px-4 pb-8 border-b border-gray-700">
      <div className="flex flex-col md:flex-row justify-between items-start gap-6">
        <div className="space-y-4">
          <img 
            src="https://homepage.momocdn.net/fileuploads/svg/momo-file-240411162904.svg" 
            alt="MoMo Logo" 
            className="h-12 w-12"
          />
          <div className="space-y-2">
            <h3 className="font-bold text-sm uppercase">CÔNG TY CỔ PHẦN DỊCH VỤ DI ĐỘNG TRỰC TUYẾN</h3>
            <p className="text-sm text-gray-400">Trụ sở chính: Tầng 6, Tòa nhà Phú Mỹ Hưng, Số 8, đường Hoàng Văn Thái, Phường Tân Mỹ, Thành phố Hồ Chí Minh</p>
            <p className="text-sm text-gray-400">Tên thương hiệu: <span className="font-bold text-white">MoMo</span></p>
          </div>
          <div className="space-y-1 text-sm text-gray-400">
            <p className="font-semibold text-white">Dịch vụ trung gian thanh toán do Ngân hàng Nhà nước cấp phép được cung ứng thông qua Ứng dụng MoMo - thẻ thứ tài chính với AI:</p>
            <p>- Dịch vụ Ví điện tử</p>
            <p>- Dịch vụ hỗ trợ thu hộ, chi hộ</p>
            <p>- Dịch vụ cổng thanh toán điện tử</p>
          </div>
        </div>
        <div className="flex-shrink-0">
          <img 
            src="https://homepage.momocdn.net/blogscontents/momo-upload-api-210629153623-637605777831780706.png" 
            alt="Đã đăng ký Bộ Công Thương" 
            className="w-32 h-auto"
          />
        </div>
      </div>
    </div>

    {/* Middle Section - Links */}
    <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">
      {/* Về chúng tôi */}
      <div>
        <h4 className="font-bold text-base mb-4 uppercase">VỀ CHÚNG TÔI</h4>
        <ul className="space-y-2 text-sm text-gray-400">
          <li><a href="#" className="hover:text-white transition-colors">Trợ Thủ Tài Chính</a></li>
          <li><a href="#" className="hover:text-white transition-colors">An toàn - Bảo mật</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Điều khoản điều lệ</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Chính sách quyền riêng tư</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Điều khoản liên kết Google trên ứng dụng MoMo</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Liên hệ</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Hỏi đáp</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Cơ hội việc làm</a></li>
        </ul>
      </div>

      {/* Dịch vụ nổi bật */}
      <div>
        <h4 className="font-bold text-base mb-4 uppercase">DỊCH VỤ NỔI BẬT</h4>
        <ul className="space-y-2 text-sm text-gray-400">
          <li className="flex items-center gap-2">
            <img src="https://homepage.momocdn.net/img/momo-amazone-s3-api-240810203439-638589188796724974.svg" alt="" className="w-5 h-5" />
            <a href="#" className="hover:text-white transition-colors">Vé xem phim</a>
          </li>
          <li className="flex items-center gap-2">
            <img src="https://homepage.momocdn.net/img/momo-amazone-s3-api-240810203448-638589188881279737.svg" alt="" className="w-5 h-5" />
            <a href="#" className="hover:text-white transition-colors">Bảo hiểm Ô tô</a>
          </li>
          <li className="flex items-center gap-2">
            <img src="https://homepage.momocdn.net/img/momo-amazone-s3-api-250311143429-638773004690233497.png" alt="" className="w-5 h-5" />
            <a href="#" className="hover:text-white transition-colors">Vé xe khách</a>
          </li>
          <li className="flex items-center gap-2">
            <img src="https://homepage.momocdn.net/img/momo-amazone-s3-api-250108092201-638719249211219284.png" alt="" className="w-5 h-5" />
            <a href="#" className="hover:text-white transition-colors">Loa bảo nhận tiền</a>
          </li>
          <li className="flex items-center gap-2">
            <img src="https://homepage.momocdn.net/img/momo-amazone-s3-api-240810203503-638589189034875619.png" alt="" className="w-5 h-5" />
            <a href="#" className="hover:text-white transition-colors">Ví nhận ái</a>
          </li>
          <li className="flex items-center gap-2">
            <img src="https://homepage.momocdn.net/img/momo-amazone-s3-api-250811142304-638905189840016272.png" alt="" className="w-5 h-5" />
            <a href="#" className="hover:text-white transition-colors">Sim số đẹp</a>
          </li>
          <li className="flex items-center gap-2">
            <img src="https://homepage.momocdn.net/img/momo-amazone-s3-api-240810203524-638589189244775831.png" alt="" className="w-5 h-5" />
            <a href="#" className="hover:text-white transition-colors">Ví trả sau</a>
          </li>
          <li className="flex items-center gap-2">
            <img src="https://homepage.momocdn.net/img/momo-amazone-s3-api-240810203533-638589189333270024.png" alt="" className="w-5 h-5" />
            <a href="#" className="hover:text-white transition-colors">Vay nhanh</a>
          </li>
          <li className="flex items-center gap-2">
            <img src="https://homepage.momocdn.net/img/momo-amazone-s3-api-250108092228-638719249489828680.png" alt="" className="w-5 h-5" />
            <a href="#" className="hover:text-white transition-colors">Nạp Data 4G/5G</a>
          </li>
        </ul>
      </div>

    </div>

    {/* Bottom Copyright */}
    <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-gray-700">
      <p className="text-sm text-gray-400 text-center">©Copyright M_Service MoMo</p>
    </div>

    {/* Desktop: Floating Action Buttons */}
    <div className="hidden md:flex fixed right-4 md:right-6 bottom-[10%] z-50 flex-col gap-2 md:gap-3">
      {[Smartphone, Star, FileText, Headphones, Info].map((Icon, i) => (
        <button
          key={i}
          className="w-10 h-10 md:w-12 md:h-12 bg-white text-viettel-red rounded-full shadow-lg md:shadow-xl flex items-center justify-center border border-pink-50 hover:bg-viettel-red hover:text-white transition-all transform hover:scale-110 active:scale-90 group"
        >
          <Icon size={18} className="md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
        </button>
      ))}
    </div>

    {/* Mobile: Bottom Navigation Bar */}
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-[0_-2px_10px_rgba(0,0,0,0.08)]">
      <div className="flex items-end justify-around px-2 py-2">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex flex-col items-center gap-0.5 text-gray-600 hover:text-viettel-red transition-colors min-w-[60px]"
        >
          <Star size={22} />
          <span className="text-[10px] font-medium">Giới thiệu</span>
        </button>
        <button 
          onClick={() => setShowModal(true)}
          className="flex flex-col items-center gap-0.5 text-gray-600 hover:text-viettel-red transition-colors min-w-[60px]"
        >
          <FileText size={22} />
          <span className="text-[10px] font-medium">Hướng dẫn</span>
        </button>
        <button 
          onClick={() => setShowLogin(true)}
          className="flex flex-col items-center gap-0.5 -mt-3 min-w-[60px]"
        >
          <div className="w-10 h-10 bg-viettel-red rounded-full flex items-center justify-center shadow-lg border-2 border-white">
            <img src="https://homepage.momocdn.net/fileuploads/svg/momo-file-240411162904.svg" alt="" />
          </div>
          <span className="text-[9px] font-semibold text-viettel-red text-center leading-tight">MoMo<br />Ngay</span>
        </button>
        <button 
          onClick={() => setShowLogin(true)}
          className="flex flex-col items-center gap-0.5 text-gray-600 hover:text-viettel-red transition-colors min-w-[60px]"
        >
          <Info size={22} />
          <span className="text-[10px] font-medium">Ưu đãi</span>
        </button>
        <button 
          onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
          className="flex flex-col items-center gap-0.5 text-gray-600 hover:text-viettel-red transition-colors min-w-[60px]"
        >
          <Headphones size={22} />
          <span className="text-[10px] font-medium">Liên hệ</span>
        </button>
      </div>
    </div>

    {/* Modal */}
    {showModal && (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
        <div className="bg-white rounded-3xl max-w-md w-full p-8 relative shadow-2xl animate-in fade-in zoom-in duration-300">
          <button
            onClick={() => setShowModal(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>

          <div className="space-y-4">
            <p className="text-gray-800 text-base leading-relaxed">
              <span className="font-bold">Đối tượng áp dụng:</span> Toàn bộ thuê bao Viettel Money.
            </p>

            <div className="space-y-3 pt-2">
              <p className="text-gray-800 text-base leading-relaxed">
                <span className="font-bold">1. Thể lệ chương trình:</span> Vui lòng xem thêm tại màn hình sự kiện Viettel Money.
              </p>    
              <p className="text-gray-800 text-base leading-relaxed"> 
                <span className="font-bold">2. Thời gian:</span> Chương trình có thể kết thúc sớm khi hết ngân sách ưu đãi.
              </p>
              <p className="text-gray-800 text-base leading-relaxed">
                <span className="font-bold">3. Lưu ý:</span> Mỗi khách hàng chỉ nhận được một lượt quay duy nhất khi tham gia sự kiện cùng Viettel Money. 
              </p>
            </div>

            <div className="pt-6">
              <button 
                onClick={() => setShowModal(false)}
                className="w-full bg-viettel-red text-white py-4 rounded-full font-bold text-lg shadow-lg hover:opacity-90 transition-all"
              >
                Tham Gia Ngay
              </button>
            </div>
          </div>
        </div>
      </div>
    )}

    <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />

   
  </footer>
  );
};
