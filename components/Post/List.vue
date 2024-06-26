<script setup lang="ts">
import { usePostStore } from '~/store';
const store = usePostStore();

onMounted(() => {
  store.getMany({ isFeatured: Number(!history?.state?.isFeature || 1) });
});
</script>

<template>
  <div class="grid gap-3">
    <template v-if="store.loading">
      <PostSkeleton v-for="item of store.items" :key="item.id" />
    </template>
    <template v-else-if="store.items?.length">
      <PostItem v-for="item of store.items" :key="item.id" :item="item" />
    </template>
  </div>
</template>
