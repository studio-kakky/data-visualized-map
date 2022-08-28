import type { Observatory } from '../../models/amdas/Observatory';
import type { PointResponse } from '../../infrastracture/api/amedas/point/GetResponse';

const makeDecimalCoordinate = (source: [number, number]): number => {
  return source[0] + source[1] / 60;
};

export const adaptObservatory = (
  res: PointResponse,
  code: string,
): Observatory => {
  return {
    code,
    name: res.kjName,
    englishName: res.enName,
    coordinates: [
      makeDecimalCoordinate(res.lat),
      makeDecimalCoordinate(res.lon),
    ],
  };
};
