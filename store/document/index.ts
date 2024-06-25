import { defineStore } from 'pinia'; // Assuming you're using Pinia for state management
import { documents } from '~/assets/data';
import type { BaseStoreState } from '~/base/interfaces';
import type { GetListDocument } from './interface';

export default defineStore('document', {
  state: (): BaseStoreState => ({
    items: documents,
    item: null,
    loading: false,
    error: false,
    message: '',
  }),
  getters: {
    axios: () => useAxios(),
  },
  actions: {
    async getMany(query?: GetListDocument) {
      this.loading = true;
      try {
        const queryString = buildQuery(query || {});
        const { data, status, error } = await useAPI(
          `/api/documents?${queryString}`
        );
        if (status.value === 'error') {
          throw error.value;
        }
        // this.items = (data as any)?.data || [];
        return (data as any).data?.data;
      } catch (error) {
        this.setError(error);
      } finally {
        this.loading = false;
      }
    },

    async get(id: number | string) {
      this.loading = true;
      try {
        const { data, status, error } = await useAPI(`/api/document/${id}`);
        this.item = documents.find((doc) => doc.id == id); // will put below 'if error'
        if (status.value === 'error') {
          throw error.value;
        }
        // this.items = (data as any)?.data || [];
        return (data as any).data?.doc;
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
