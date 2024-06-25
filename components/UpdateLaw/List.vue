<script setup lang="ts">
import { useDocumentStore } from '~/store';
const store = useDocumentStore();
const { params } = useSearch();

const { status } = useLazyAsyncData(
  'update-laws',
  () => store.getMany(params.value),
  {
    watch: [params.value],
  }
);
</script>

<template>
  <div class="grid gap-2">
    <template v-if="store.loading || status != 'success'">
      <UpdateLawSkeleton v-for="item in store.items" :key="item?.id" />
    </template>
    <template v-else-if="store.items?.length">
      <UpdateLawItem v-for="item in store.items" :key="item?.id" :item="item" />
    </template>
  </div>
</template>
