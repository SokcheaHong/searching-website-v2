import type { BaseStoreState, Pagination } from '~/base/interfaces';
import { defineStore } from 'pinia';
import { categories } from '~/assets/data';

export default defineStore('category', {
  state: (): BaseStoreState => ({
    items: categories,
    loading: false,
    error: false,
    message: '',
  }),

  actions: {
    async getMany(query?: Pagination) {
      this.loading = true;
      try {
        const queryString = buildQuery(query || {});
        const { data, status, error } = await useAPI(
          `/api/categories?${queryString}`,
          {
            lazy: true,
          }
        );
        if (status.value === 'error') {
          throw error.value;
        }
        // this.items = (data as any) || [];
        return (data as any).data?.categories;
      } catch (error) {
        this.setError(error);
      } finally {
        this.loading = false;
      }
    },
    setError(msg: any) {
      this.error = true;
      this.message = msg;
    },
  },
});
