export interface Prize {
  id: number;
  name: string;
  color: string;
  chance: number;
}

export const PRIZES: Prize[] = [
  { id: 1, name: '50 triệu đồng', color: '#EAB308', chance: 1 },
  { id: 2, name: '10 triệu đồng', color: '#F97316', chance: 5 },
  { id: 3, name: '5 triệu đồng', color: '#a60063', chance: 10 },
  { id: 4, name: '1 triệu đồng', color: '#EC4899', chance: 15 },
  { id: 5, name: '500k đồng', color: '#A855F7', chance: 20 },
  { id: 6, name: '100k đồng', color: '#3B82F6', chance: 25 },
  { id: 7, name: '50k đồng', color: '#22C55E', chance: 15 },
  { id: 8, name: 'Chúc may mắn', color: '#6B7280', chance: 9 },
];
