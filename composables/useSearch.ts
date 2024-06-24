// import { reactive, computed } from '@nuxtjs/composition-api';

import { computed, reactive } from 'vue';

interface Params {
  type?: 'all' | 'name';
  categories?: string;
  search?: string;
  date?: string;
}

const state = reactive({
  params: {
    type: 'all',
    categories: '',
    search: '',
    date: '',
  } as Params,
});

export default function useSearch() {
  const append = (key: keyof Params, value: any) => {
    if (key in state.params) {
      state.params[key] = value;
    }
  };

  const reset = () => {
    state.params = {
      type: 'all',
      categories: '',
      search: '',
      date: '',
    };
  };

  return {
    params: computed(() => state.params),
    append,
    reset,
  };
}
