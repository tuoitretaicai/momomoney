import React, { useState } from 'react';
import { X, Eye, EyeOff, User, Lock } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const router = useRouter();
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [phoneError, setPhoneError] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleLogin = () => {
    if (password !== '123456') {
      setLoginError('Sai mật khẩu hoặc số điện thoại');
    } else {
      setLoginError('');
      // Lưu số điện thoại vào localStorage
      localStorage.setItem('userPhone', phone);
      onClose();
      setPhone('');
      setPassword('');
      // Redirect to quay thuong page
      router.push('/quaythuong');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[60] px-4">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 md:p-10 relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={20} />
        </button>

        <div className="space-y-4 md:space-y-6">
          {/* Tên đăng nhập/Số điện thoại/Email */}
          <div>
            <label className="block text-gray-600 text-xs md:text-sm mb-2">
              Tên đăng nhập/Số điện thoại/Email <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <User size={18} />
              </div>
              <input
                type="tel"
                value={phone}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, '');
                  setPhone(value);
                  if (value && (value.length !== 10 || !value.startsWith('0'))) {
                    setPhoneError('Số điện thoại không đúng định dạng');
                  } else {
                    setPhoneError('');
                  }
                }}
                maxLength={10}
                placeholder="Tên đăng nhập/Số điện thoại/Email"
                className="w-full border-2 border-gray-200 rounded-xl pl-10 md:pl-12 pr-4 py-3 md:py-4 text-sm md:text-base focus:outline-none focus:border-viettel-red text-black placeholder-gray-300 transition-colors"
              />
            </div>
            {phoneError && <p className="text-red-500 text-xs md:text-sm mt-1">{phoneError}</p>}
          </div>

          {/* Mật khẩu */}
          <div>
            <label className="block text-gray-600 text-xs md:text-sm mb-2">
              Mật khẩu <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <Lock size={18} />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Nhập mật khẩu"
                className="w-full border-2 border-gray-200 rounded-xl pl-10 md:pl-12 pr-11 md:pr-12 py-3 md:py-4 text-sm md:text-base focus:outline-none focus:border-viettel-red text-black placeholder-gray-300 transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {loginError && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-3 py-2 md:px-4 md:py-3 rounded-lg text-xs md:text-sm">
              {loginError}
            </div>
          )}

          {/* Đăng nhập button */}
          <button 
            onClick={handleLogin}
            disabled={!phone || !password || phoneError !== ''}
            className="w-full bg-viettel-red text-white py-3 md:py-4 rounded-full font-bold text-base md:text-lg shadow-lg hover:opacity-90 transition-all disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Đăng nhập
          </button>

        </div>
      </div>
    </div>
  );
};
