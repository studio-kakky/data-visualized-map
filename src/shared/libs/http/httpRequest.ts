import { HttpError } from '../../models/base/error/HttpError';

export const httpRequest = <R>(
  url: string,
  options: RequestInit,
): Promise<R> => {
  return fetch(url, options).then((res) => {
    if (res.status === 200 || res.status === 204) {
      return res.json() as Promise<R>;
    }

    throw new HttpError(res.status, res.body, 'HTTP Error');
  });
};
