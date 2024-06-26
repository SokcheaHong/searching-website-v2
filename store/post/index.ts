import type { BaseStoreState } from '~/base/interfaces';
import { defineStore } from 'pinia';
import { buildQuery } from '~/utils';
import type { GetListPost } from './interface';
import { posts } from '~/assets/data';

export default defineStore('post', {
  state: (): BaseStoreState => ({
    items: posts,
    loading: false,
    error: false,
    message: '',
  }),

  actions: {
    async getMany(query?: GetListPost) {
      this.loading = true;
      try {
        const queryString = buildQuery(query || {});
        const { data, status, error } = await useAPI(
          `/api/post?${queryString}`,
          {
            lazy: true,
          }
        );
        if (status.value === 'error') {
          throw error.value;
        }
        // this.items = (data as any) || [];
        return (data as any).data?.posts;
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
