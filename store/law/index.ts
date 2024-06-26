import type { BaseStoreState } from '~/base/interfaces';
import { defineStore } from 'pinia';
import { laws } from '../../assets/data';
import type { Pagination } from '~/base/interfaces';

export default defineStore('law', {
  state: (): BaseStoreState => ({
    items: laws,
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
          `/api/api/legal-letter?${queryString}`,
          {
            lazy: true,
          }
        );
        if (status.value === 'error') {
          throw error.value;
        }
        // this.items = (data as any) || [];
        return (data as any).data?.legal_letters;
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
