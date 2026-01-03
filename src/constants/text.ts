// constants/data.ts

export interface Prize {
  id: number;
  name: string;
  color: string;
  chance: number;
}

export const TEXTS = {
  // Hero Section
  HERO: {
    BADGE: "CHIẾC MÁY THẦN KỲ",
    TITLE_MAIN: "QUAY HAY",
    TITLE_PERCENT: "100%",
    SUBTITLE: "HỐT QUÀ NGAY",
    CTA_BUTTON: "Nhận Quà Ngay",
    PRIZE_AMOUNT: "50 TRIỆU",
    PRIZE_LABEL: "Giải thưởng tuần",
  },

  // Benefits Section
  BENEFITS: {
    TITLE: "SỰ KIỆN CÙNG VIETTEL MONEY\n NHẬN QUÀ LIỀN TAY",
    CARDS: [
      {
        title: "Bao la giải",
        description: "tiền mặt + voucher mỗi ngày.",
        icon: "🎁",
      },
      {
        title: "Đổi lượt quay",
        description: "không giới hạn với điểm Viettel++",
        icon: "✨",
      },
      {
        title: "Đổi vé VIP",
        description: "Giật giải 50 TRIỆU hàng tuần",
        icon: "💎",
      },
    ],
    BUTTON_CONTENT: "Nội Dung",
    BUTTON_JOIN: "Tham Gia Ngay",
  },

  // Instruction Section
  INSTRUCTION: {
    TITLE: "THAM GIA GAME SIÊU DỄ DÀNG",
    TAB_REGISTER: "Đăng ký/Đăng nhập",
    TAB_GUIDE: "Hướng dẫn tham gia",
    STEPS: [
      'Tải ứng dụng Viettel Money',
      "Nhập số điện thoại đăng ký",
      'Xác minh chính chủ',
      'Chọn dịch vụ quan tâm',
      'Bắt đầu khám phá Viettel Money',
    ],
  },

  // Promotions Section
  PROMOTIONS: {
    TITLE: "DÙNG VIETTEL MONEY\n MÊ SAY ƯU ĐÃI",
    ITEMS: [
      { label: "Tích lũy Lời 7.1%" },
      { label: "Bảo hiểm Ô tô Giảm 40%" },
      { label: "Thứ 3 thả ga chỉ từ 1K" },
    ],
    CTA_BUTTON: "Viettel Money Ngay",
  },

  // Footer Section
  FOOTER: {
    DOWNLOAD_TITLE: "TẢI ỨNG DỤNG VIETTEL MONEY",
    DOWNLOAD_BUTTON: "Viettel Money Ngay",
    DOWNLOAD_SHORTCODE_TEXT: "Hoặc bấm gọi",
    DOWNLOAD_SHORTCODE: "*998#",
    DOWNLOAD_SHORTCODE_SUFFIX: "khi không có internet",
    SUPPORT_TITLE: "HỖ TRỢ KHÁCH HÀNG",
    HOTLINE_LABEL: "Hotline 24/7",
    HOTLINE_NUMBER: "1800 9000",
    LINKS: [
      { text: "Viettelmoney.vn", href: "#" },
      { text: "viettelmoney@viettel.com.vn", href: "mailto:viettelmoney@viettel.com.vn" },
      { text: "Facebook.com/viettelmoney", href: "#" },
      { text: "Cộng đồng Viettel Money", href: "#" },
    ],
    COPYRIGHT_LINKS: ["Điều khoản", "Bảo mật", "Liên hệ"],
    COPYRIGHT_TEXT: "© 2024 Tổng Công ty Dịch vụ Số Viettel.",
  },
};

// Tách PRIZES ra ngoài object TEXTS để dễ quản lý logic
export const PRIZES: Prize[] = [
  { id: 1, name: '50 triệu đồng', color: '#EAB308', chance: 1 }, // yellow-500
  { id: 2, name: '10 triệu đồng', color: '#F97316', chance: 5 }, // orange-500
  { id: 3, name: '5 triệu đồng', color: '#a60063', chance: 10 }, // viettel-red
  { id: 4, name: '1 triệu đồng', color: '#EC4899', chance: 15 }, // pink-500
  { id: 5, name: '500k đồng', color: '#A855F7', chance: 20 }, // purple-500
  { id: 6, name: '100k đồng', color: '#3B82F6', chance: 25 }, // blue-500
  { id: 7, name: '50k đồng', color: '#22C55E', chance: 15 }, // green-500
  { id: 8, name: 'Chúc may mắn', color: '#6B7280', chance: 9 }, // gray-500
];