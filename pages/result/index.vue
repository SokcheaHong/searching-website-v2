<script setup lang="ts">
useSeoMeta({
  title: 'រុករកឯកសារ | ក្រសូងរៀបចំដែនដី នគរូបនីយកម្ម និងសំណង់',
  ogTitle: 'រុករកឯកសារ | ក្រសូងរៀបចំដែនដី នគរូបនីយកម្ម និងសំណង់',
});
</script>

<template>
  <section class="search_section_layout">
    <Search />
  </section>
  <section class="mt-9">
    <ResultHeader :total="127" />
    <div class="border-b my-2" />
    <ResultList />
  </section>
</template>
