<script setup lang="ts">
onMounted(() =>
  useSeoMeta({
    title:
      'តារាងបញ្ជីលិខិតបទដ្ឋានគតិយុត្ត | ក្រសូងរៀបចំដែនដី នគរូបនីយកម្ម និងសំណង់',
  })
);
</script>

<template>
  <section class="search_section_layout">
    <Search />
  </section>
  <section class="mt-9">
    <RegisterLawHeader />
    <div class="border-b my-2" />
    <div class="grid gap-3 py-2 px-6">
      <RegisterLawTitle />
      <RegisterLawList />
    </div>
  </section>
</template>
