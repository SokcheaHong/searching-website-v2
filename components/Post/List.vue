<script setup lang="ts">
import type { MetaData, Post } from '~/base/interfaces/ApiData';
const message = ref<string | any>("");
const { data, status, error, pending } = await useFetch<any>('/api/post');
if (error.value) {
  throw message.value = error.value
}
const items = computed<Post[]>(() => data.value.data.posts)
</script>

<template>
  <div class="grid gap-3">
    <template v-if="pending">
      <PostSkeleton v-for="item of items" :key="item.id" />
    </template>
    <template v-else-if="items?.length">
      <PostItem v-for="(item) of items" :key="item.id" :item="item" />
    </template>
  </div>
</template>
