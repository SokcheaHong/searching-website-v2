interface state {
  type?: 'all' | 'name';
  categories?: string;
  search?: string;
  date?: string;
}
const state = ref<state>({
  type: 'all',
  categories: '',
  search: '',
  date: '',
});

export default function useSearch() {
  const append = (key: keyof state, value: any) => {
    if (key in state.value) {
      state.value[key] = value;
    }
  };

  const reset = () => {
    state.value = {
      type: 'all',
      categories: '',
      search: '',
      date: '',
    };
  };

  const reactiveState = computed(() => state.value);

  return {
    params: reactiveState,
    append,
    reset,
  };
}
