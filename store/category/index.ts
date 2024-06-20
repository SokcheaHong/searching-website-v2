import type { BaseStoreState } from '~/base/interfaces';
import { defineStore } from 'pinia';

export default defineStore('category', () => {
  const axios = useAxios();
  const state = reactive<BaseStoreState>({
    items: [
      {
        id: 41,
        name: 'គោលនយោបាយ',
        order: 1,
        status: 1,
      },
      {
        id: 4,
        name: 'ព្រះរាជក្រឹត្យ',
        order: 2,
        status: 1,
      },
      {
        id: 34,
        name: 'ព្រះរាជក្រម',
        order: 3,
        status: 1,
      },
      {
        id: 1,
        name: 'ច្បាប់',
        order: 4,
        status: 1,
      },
      {
        id: 5,
        name: 'អនុក្រឹត្យ',
        order: 5,
        status: 1,
      },
      {
        id: 9,
        name: 'ប្រកាស',
        order: 6,
        status: 1,
      },
      {
        id: 21,
        name: 'សារាចរណែនាំ',
        order: 10,
        status: 1,
      },
      {
        id: 14,
        name: 'សេចក្តីណែនាំ',
        order: 11,
        status: 1,
      },
      {
        id: 37,
        name: 'សេចក្តីសម្រេច',
        order: 13,
        status: 1,
      },
      {
        id: 45,
        name: 'ប្លង់គោល',
        order: 14,
        status: 1,
      },
      {
        id: 38,
        name: 'បទបញ្ជា',
        order: 16,
        status: 1,
      },
      {
        id: 40,
        name: 'សេចក្តីប្រកាសព័ត៌មាន',
        order: 18,
        status: 1,
      },
    ],
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
