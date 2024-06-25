<script setup lang="ts">
const route = useRoute();
watch(
  () => route.fullPath,
  () => {
    useSeoMeta({
      title: 'សេចក្តីជូនដំណឹង | ក្រសូងរៀបចំដែនដី នគរូបនីយកម្ម និងសំណង់',
    });
  },
  { immediate: true }
);
</script>

<template>
  <PostHeader :type="'all'" />
  <div class="border-b my-2" />
  <PostList />
</template>
