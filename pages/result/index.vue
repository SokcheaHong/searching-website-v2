<script setup lang="ts">
const route = useRoute();
watch(
  () => route.fullPath,
  () => {
    useServerSeoMeta({
      title: 'រុករកឯកសារ | ក្រសូងរៀបចំដែនដី នគរូបនីយកម្ម និងសំណង់',
    });
  },
  { immediate: true }
);
</script>

<template>
  <section class="search_section_layout">
    <Search />
  </section>
  <section class="mt-9">
    <ResultHeader :total="3" />
    <div class="border-b my-2" />
    <ResultList />
  </section>
</template>
