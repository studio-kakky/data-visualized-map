import type { BaseParams } from './Base';

export interface ApiGetParams extends BaseParams {
  query?: URLSearchParams;
}
