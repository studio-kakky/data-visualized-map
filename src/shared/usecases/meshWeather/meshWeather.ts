import type { MeshWeather } from '../../models/amdas/MeshWeather';
import type { AppDateTime } from '../../models/date/AppDateTime';
import { observatoryUseCase } from '../observatory/observatory';
import { adaptMeshWeather, hasPrecipitation } from './adapt';
import { getMeshWeathers as getFromApi } from '../../infrastracture/api/amedas/mesthWeather/get';

export const meshWeatherUsecase = () => {
  const getMeshWeathers = async (date: AppDateTime): Promise<MeshWeather[]> => {
    const observatoryCollection = await observatoryUseCase().get();
    const meshWeatherRes = await getFromApi(date);

    return Object.entries(meshWeatherRes)
      .filter(([key]) => observatoryCollection[key] !== undefined)
      .filter(([, res]) => hasPrecipitation(res))
      .map(([key, res]) => {
        const observatory = observatoryCollection[key];
        return adaptMeshWeather(res, observatory.coordinates);
      });
  };

  return { getMeshWeathers };
};
