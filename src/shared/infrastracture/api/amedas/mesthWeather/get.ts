import { httpGet } from '../../../../libs/http/httpGet';
import type { AppDateTime } from '../../../../models/date/AppDateTime';
import type { MeshWeathersResponse } from './GetResponse';

const endpointUrl = 'https://www.jma.go.jp/bosai/amedas/data/map/:date.json';

export const getMeshWeathers = (
  date: AppDateTime,
): Promise<MeshWeathersResponse> => {
  return httpGet(endpointUrl, {
    pathParams: new URLSearchParams({
      date: date.floor10Minutes().toFormat('yyyyMMddHHmmss'),
    }),
  });
};
