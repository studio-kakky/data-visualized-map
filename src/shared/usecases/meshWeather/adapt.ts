import type { MeshWeatherResponse } from '../../infrastracture/api/amedas/mesthWeather/GetResponse';
import type { MeshWeather } from '../../models/amdas/MeshWeather';

export const hasPrecipitation = (res: MeshWeatherResponse): boolean => {
  return [
    res.precipitation10m,
    res.precipitation1h,
    res.precipitation3h,
    res.precipitation24h,
  ].every((v) => v !== undefined);
};

export const adaptMeshWeather = (
  res: MeshWeatherResponse,
  coordinate: [number, number],
): MeshWeather => {
  const temp = res.temp ? { temp: res.temp[0] } : {};
  const humidity = res.humidity ? { humidity: res.humidity[0] } : {};
  const sunshinePerHour = res.sun1h ? { sunshinePerHour: res.sun1h[0] } : {};

  return {
    precipitation: {
      perTenMinutes: res.precipitation10m[0],
      perOneHour: res.precipitation1h[0],
      perThreeHour: res.precipitation3h[0],
      perDay: res.precipitation24h[0],
    },
    coordinate: {
      lat: coordinate[1],
      lng: coordinate[0],
    },
    ...temp,
    ...humidity,
    ...sunshinePerHour,
  };
};
