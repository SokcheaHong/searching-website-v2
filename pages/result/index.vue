<script setup lang="ts">
const { fullPath } = useRoute();

onMounted(() => {
  useSeoMeta({
    title: 'រុករកឯកសារ | ក្រសូងរៀបចំដែនដី នគរូបនីយកម្ម និងសំណង់',
  });
});
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
