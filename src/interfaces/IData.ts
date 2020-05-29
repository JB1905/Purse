export interface IData {
  category: string;
  coords: Coords;
  date: Date;
  id: string;
  images: any[];
  title: string;
  type?: any;
  value: string;
}

interface Date {
  nanoseconds: number;
  seconds: number;
}

interface Coords {}
