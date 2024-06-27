<script setup lang="ts">
useSeoMeta({
  title: 'លិខិតបទដ្ឋានគតិយុត្ត | ក្រសូងរៀបចំដែនដី នគរូបនីយកម្ម និងសំណង់',
});
useServerSeoMeta({
  title: 'លិខិតបទដ្ឋានគតិយុត្ត | ក្រសូងរៀបចំដែនដី នគរូបនីយកម្ម និងសំណង់',
});
</script>

<template>
  <section class="search_section_layout">
    <Search />
  </section>
  <section class="mt-9">
    <UpdateLawHeader />
    <div class="border-b my-2" />
    <div class="grid gap-3 py-2 md:px-4 lg:px-6">
      <UpdateLawTitle />
      <UpdateLawList />
    </div>
  </section>
</template>
