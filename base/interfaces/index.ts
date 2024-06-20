export interface BaseStoreState {
  items?: any[];
  item?: any;
  loading?: boolean;
  error?: boolean;
  message?: string;
}

export interface Pagination {
  page?: number;
  limit?: number;
  offset?: number;
  search?: string;
}
