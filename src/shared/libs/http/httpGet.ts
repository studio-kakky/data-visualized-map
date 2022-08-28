import type { ApiGetParams } from '../models/base/api/GetParams';
import { httpRequest } from './httpRequest';
import { makeUrlPath } from './makeUrlPath';

export const httpGet = <R>(
  endpointUrl: string,
  params: ApiGetParams,
): Promise<R> => {
  const headers = params.headers || {};
  const url = makeUrlPath(endpointUrl, params.pathParams);
  const withQuery = params.query
    ? `${url}?${params.query.toString()}`
    : `${url}`;

  return httpRequest(withQuery, {
    headers,
  });
};
