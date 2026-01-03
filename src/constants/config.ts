// constants/config.ts

// Định nghĩa màu sắc thương hiệu
export const VIETTEL_RED = '#a60063';
export const VIETTEL_YELLOW = '#FFC700';

// Enum trạng thái game
export enum GameState {
  IDLE = 'IDLE',
  SPINNING = 'SPINNING',
  WON = 'WON'
}

// Interface giải thưởng
export interface Prize {
  id: number;
  name: string;
  color: string;
  chance: number; // Tỉ lệ (0-100)
}

// Danh sách giải thưởng
export const PRIZES: Prize[] = [
  { id: 1, name: 'Iphone 17 promax', color: '#a60063', chance: 0 },
  { id: 2, name: 'Tai Nghe airpod pro', color: '#FFFFFF', chance: 0 },
  { id: 3, name: 'Chúc bạn may mắn lần sau', color: '#a60063', chance: 0 },
  { id: 4, name: '800.000 VNĐ', color: '#FFFFFF', chance: 100 },  
  { id: 5, name: 'Voucher 500.000', color: '#a60063', chance: 0 },
  { id: 6, name: 'Thêm Lượt Quay', color: '#FFFFFF', chance: 0 },
  { id: 7, name: 'Chúc bạn may mắn lần sau', color: '#a60063', chance: 0 },
  { id: 8, name: 'Thẻ cào 50.000 VND', color: '#FFFFFF', chance: 0 },
];