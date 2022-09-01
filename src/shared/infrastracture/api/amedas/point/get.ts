import { httpGet } from '../../../../libs/http/httpGet';
import type { AmedasTabelResponse } from './GetResponse';

export const endpointUrl =
  'https://www.jma.go.jp/bosai/amedas/const/amedastable.json';
export const getAmedasTable = (): Promise<AmedasTabelResponse> => {
  return httpGet<AmedasTabelResponse>(endpointUrl, {});
};
