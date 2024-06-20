import type { BaseStoreState } from '~/base/interfaces';
import { defineStore } from 'pinia';

export default defineStore('category', () => {
  const axios = useAxios();
  const state = reactive<BaseStoreState>({
    items: [],
    loading: false,
  });

  async function getMany() {
    state.loading = true;
    try {
      const response = await axios.get('/api/categories');
      if (response.data?.data) {
        state.items = response.data?.data.categories;
      }
    } catch (error) {
      throw error;
    } finally {
      state.loading = false;
    }
  }

  return {
    ...state,
    getMany,
  };
});
