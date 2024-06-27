<script setup lang="ts">
const props = defineProps({
  type: {
    type: String as () => 'all' | 'featured',
    validator: (value: string) => ['all', 'featured'].includes(value),
    required: false,
    default: 'all',
  },
});
</script>

<template>
  <div class="flex justify-between items-center gap-1 py-3​​">
    <div
      class="text-slate-800 font-bold text-xl md:text-2xl border-l-4 border-blue-500 px-2 md:ms-1"
    >
      សេចក្តីជូនដំណឹង
    </div>
    <NuxtLink
      v-if="props.type === 'featured'"
      :to="{ path: '/news', state: { isFeature: 1 } }"
      class="text-blue-600 font-semibold md:text-lg link hover:text-blue-800 link_transition px-2 flex items-center gap-1"
      ><svg
        class="inline-block text-inherit h-[1em] w-[1em]"
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="list"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          class=""
          fill="currentColor"
          d="M80 368H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416 176H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"
        ></path></svg
      ><span>មើលបន្ថែម</span></NuxtLink
    >
  </div>
</template>
