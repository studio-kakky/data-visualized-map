export interface PointResponse {
  type: 'A' | 'B' | 'C';
  elems: string;
  lat: [number, number];
  lon: [number, number];
  alt: number;
  kjName: string;
  knName: string;
  enName: string;
}

export interface AmedasTabelResponse {
  [key: string]: PointResponse;
}
