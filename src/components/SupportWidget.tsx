import React, { useState } from 'react';
import { X, Phone, Send, Image } from 'lucide-react';

export const SupportWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [message, setMessage] = useState('');
  const [userMessages, setUserMessages] = useState<string[]>([]);

  const handleSendMessage = () => {
    if (message.trim()) {
      setUserMessages([...userMessages, message]);
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Support Button */}
      <div className="fixed right-4 md:right-6 bottom-24 md:bottom-[25%] z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative group"
        >
          {/* Mascot Icon */}
          <img 
            src="/images/anhbot.png" 
            alt="Support" 
            className="w-[65px] h-25 md:w-14 md:h-14   hover:scale-110 transition-transform duration-300 animate-bounce"
          />
          
          {/* Pulse effect */}
          <div className="absolute inset-0 w-12 h-10 md:w-14 md:h-14 bg-viettel-red rounded-full animate-ping opacity-20"></div>
        </button>

        {/* Popup Card */}
        {isOpen && !showChat && (
          <div className="absolute bottom-16 md:bottom-20 right-0 w-64 md:w-72 bg-white rounded-2xl shadow-2xl border-2 border-pink-100 p-4 animate-in slide-in-from-bottom-4 duration-300">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            >
              <X size={20} />
            </button>
            
            <div className="flex items-start gap-3 mb-4">
              <img 
                src="https://homepage.momocdn.net/fileuploads/svg/momo-file-240411162904.svg" 
                alt="Support" 
                className="w-12 h-12 rounded-full flex-shrink-0"
              />
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Bạn cần trợ giúp?</h3>
                <p className="text-sm text-gray-600">Để mình hỗ trợ ngay nhé!</p>
              </div>
            </div>

            <button
              onClick={() => setShowChat(true)}
              className="flex items-center justify-center gap-2 w-full bg-viettel-red text-white py-3 rounded-full font-bold hover:opacity-90 transition-all shadow-lg"
            >
              <span>Chat Ngay</span>
            </button>
          </div>
        )}

        {/* Chat Interface */}
        {showChat && (
          <div className="absolute bottom-16 right-0 w-80 h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col z-50">
            {/* Chat Header */}
            <div className="bg-viettel-red text-white p-4 rounded-t-2xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img 
                  src="https://homepage.momocdn.net/fileuploads/svg/momo-file-240411162904.svg" 
                  alt="Support" 
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h3 className="font-bold">Hỗ trợ trực tuyến</h3>
                </div>
              </div>
              <button
                onClick={() => {
                  setShowChat(false);
                  setIsOpen(false);
                }}
                className="text-white hover:bg-white/20 rounded-full p-1"
              >
                <X size={24} />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-pink-50">
              <div className="text-center text-xs text-gray-500">20:57</div>
              
              {/* Bot Message 1 */}
              <div className="flex gap-2">
                <img 
                  src="/images/anhbot.png" 
                  alt="Bot" 
                  className="w-8 h-8 rounded-full flex-shrink-0"
                />
                <div className="bg-white rounded-2xl rounded-tl-none p-3 max-w-[80%] shadow-sm">
                  <p className="text-sm text-gray-800">Chào Mừng bạn đến với MoMo! rất vui được hỗ trợ cho bạn.</p>
                </div>
              </div>

              {/* Bot Message 2 */}
              <div className="flex gap-2">
                <img 
                  src="/images/anhbot.png" 
                  alt="Bot" 
                  className="w-8 h-8 rounded-full flex-shrink-0"
                />
                <div className="bg-white rounded-2xl rounded-tl-none p-3 max-w-[80%] shadow-sm">
                  <p className="text-sm text-gray-800">MoMo Bot có thể tư vấn thông tin nào tới bạn hôm nay?</p>
                </div>
              </div>

              <div className="text-center text-xs text-gray-500">21:02</div>

              {userMessages.map((msg, index) => (
                <div key={index} className="flex justify-end">
                  <div className="bg-viettel-red text-white rounded-2xl rounded-tr-none p-3 max-w-[80%] shadow-sm">
                    <p className="text-sm">{msg}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="border-t border-gray-200 p-3 bg-white rounded-b-2xl">
              <div className="flex items-center gap-2">
                <button className="text-viettel-red hover:bg-pink-50 p-2 rounded-full">
                  <Image size={20} />
                </button>
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Nhập tin nhắn"
                  className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-viettel-red text-black"
                />
                <button 
                  onClick={handleSendMessage}
                  className="text-white bg-viettel-red hover:opacity-90 p-2 rounded-full"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
