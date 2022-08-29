export interface MeshWeather {
  temp?: number;
  humidity?: number;
  sunshinePerHour?: number;
  precipitation: {
    perTenMinutes?: number;
    perOneHour: number;
    perThreeHour: number;
    perDay: number;
  };
  coordinate: [number, number];
}
