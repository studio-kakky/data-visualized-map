import { getAmedasTable } from '../../infrastracture/api/amedas/point/get';
import type { Observatory } from '../../models/amdas/Observatory';
import { adaptObservatory } from './adapt';

export const observatoryUseCase = () => {
  const get = (): Promise<Record<string, Observatory>> => {
    return getAmedasTable().then((res) => {
      return Object.entries(res).reduce((output, [key, value]) => {
        output[key] = adaptObservatory(value, key);
        return output;
      }, {} as Record<string, Observatory>);
    });
  };

  return { get };
};
