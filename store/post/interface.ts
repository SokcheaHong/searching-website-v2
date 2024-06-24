import type { Pagination } from '~/base/interfaces';

export interface GetListPost extends Pagination {
  isFeatured?: number;
}
