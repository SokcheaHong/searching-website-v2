<script setup lang="ts">
import { useDocumentStore } from '~/store';
import { filterObjectWithTruthyValues } from '~/utils';

const store = useDocumentStore();
const router = useRouter();
const search = useSearch();

const show = ref(false);

const handleSearchFocus = () => {
  show.value = !show.value;
};

const onChange = debounce((event: InputEvent) => {
  const { value } = event.target as HTMLInputElement;
  search.append('search', value);
});

const onSubmit = () => {
  store.getMany(search.params.value);
  router.push({
    path: '/result',
    query: filterObjectWithTruthyValues(search.params.value),
    force: true,
  });
  show.value = false;
};
</script>

<template>
  <div
    class="relative bg-transparent border-2 border-blue-900 rounded-sm flex-1"
  >
    <form class="flex justify-between" @submit.prevent="onSubmit">
      <div class="block w-full dropdown">
        <input
          name="search"
          type="search"
          placeholder=" សូមវាយពាក្យគន្លឹះ"
          class="w-full z-50 p-2 bg-zinc-50 h-9 sm:h-12 text-gray-9000 bg-transparent border-none outline-none"
          autocomplete="off"
          :value="search.params.value.search"
          @input="onChange"
          @focus="handleSearchFocus"
          @focusout="handleSearchFocus"
        />
        <SearchSuggestion />
      </div>
      <button
        id="search"
        role="button"
        aria-label="Search"
        type="submit"
        class="w-fit sm:w-20 p-2 z-50 grid place-content-center h-9 sm:h-12 text-white bg-blue-900 outline-none border-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </button>
    </form>
  </div>
</template>
