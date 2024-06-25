<script setup lang="ts">
const { fullPath } = useRoute();

watch(
  () => fullPath,
  () => {
    useSeoMeta({
      title: 'ព័ត៌មានលម្អិតអំពីឯកសារ | ក្រសូងរៀបចំដែនដី នគរូបនីយកម្ម និងសំណង់',
    });
  },
  { immediate: true }
);
</script>

<template>
  <section>
    <Document />
  </section>
</template>
