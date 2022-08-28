import { makeUrlPath } from './makeUrlPath';

describe('makeUrlPath', () => {
  test('パスパラメーターを変換して適切なパスを返す', () => {
    const endpoint = `/v1/api/:id/some/:code/path`;
    const pathParams = new URLSearchParams({
      id: '42',
      code: 'dummy',
    });

    expect(makeUrlPath(endpoint, pathParams)).toBe(
      '/v1/api/42/some/dummy/path',
    );
  });

  test('同一のplaceholderが2箇所あっても変換する', () => {
    const endpoint = `/v1/api/:id/some/:code/path/:code/point`;
    const pathParams = new URLSearchParams({
      id: '42',
      code: 'dummy',
    });

    expect(makeUrlPath(endpoint, pathParams)).toBe(
      '/v1/api/42/some/dummy/path/dummy/point',
    );
  });
});
