<script setup lang="ts">
const show = ref(false);

const handleSearchFocus = () => {
  show.value = !show.value;
};
</script>

<template>
  <div
    class="relative bg-transparent border-2 border-blue-900 rounded-sm flex-1"
  >
    <form class="flex flex-wrap justify-between">
      <input
        name="q"
        placeholder=" សូមវាយពាក្យគន្លឹះ"
        class="flex-1 z-50 bg-zinc-50 h-10 px-4 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none lg:h-12 focus:outline-none focus:ring-0"
        autocomplete="false"
        autocorrect="false"
        @focus="handleSearchFocus"
        @blur="handleSearchFocus"
      />
      <button
        type="submit"
        class="flex items-center justify-center p-2 text-white transition-colors duration-300 transform lg:w-12 lg:h-12 lg:p-0 bg-blue-900 rounded-none border-2 border-blue-900"
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
    <div
      class="absolute top-14 -translate-y-14 w-full rounded-sm border shadow-lg opacity-0 pointer-events-none transition-all origin-top ease-linear delay-100 bg-zinc-50"
      :class="{ 'opacity-100 pointer-events-auto translate-y-0': show }"
    >
      <ul class="divide-y">
        <li class="search_suggestion_item">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, libero.
        </li>
        <li class="search_suggestion_item">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, libero.
        </li>
      </ul>
    </div>
  </div>
</template>
