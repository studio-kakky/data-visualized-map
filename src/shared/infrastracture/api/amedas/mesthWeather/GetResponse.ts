type WeatherValue = [number, number];

export interface MeshWeatherResponse {
  pressure?: WeatherValue;
  normalPressure?: WeatherValue;
  temp: WeatherValue;
  humidity: WeatherValue;
  visibility: WeatherValue;
  snow: [number | null, null];
  weather: WeatherValue;
  snow1h: WeatherValue;
  snow6h: WeatherValue;
  snow12h: WeatherValue;
  snow24h: WeatherValue;
  sun10m: WeatherValue;
  sun1h: WeatherValue;
  precipitation10m: WeatherValue;
  precipitation1h: WeatherValue;
  precipitation3h: WeatherValue;
  precipitation24h: WeatherValue;
  windDirection: WeatherValue;
  wind: WeatherValue;
}

export type MeshWeathersResponse = Record<string, MeshWeatherResponse>;
