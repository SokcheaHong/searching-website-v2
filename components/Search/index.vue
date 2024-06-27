<script setup lang="ts">
const open = ref(false);

const toggleSidebar = () => {
  open.value = !open.value;
};
</script>

<template>
  <div
    class="flex items-start flex-col sm:flex-row sm:items-center gap-x-2 gap-y-2"
  >
    <div
      class="w-max bg-blue-900 h-full grid place-content-center px-4 py-2 rounded-sm"
    >
      <p
        class="text-base md:text-lg lg:text-xl text-white tracking-normal text-nowrap"
      >
        បណ្ណាល័យច្បាប់ឌីជីថល
      </p>
    </div>
    <div class="w-full flex gap-2 items-center justify-between">
      <SearchInputBox />
      <div class="block sm:hidden">
        <SearchFilterButton :toggle="toggleSidebar" />
      </div>
    </div>
  </div>

  <SearchTopFilter class="hidden sm:flex" />
  <SearchCategoryFilter class="hidden sm:grid" />
</template>
