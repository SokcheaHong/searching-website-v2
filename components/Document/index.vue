<script setup lang="ts">
import { useDocumentStore } from '~/store';

const { params } = useRoute();
const store = useDocumentStore();

const { status } = useLazyAsyncData('document-detail', () =>
  store.get(params.id as any)
);
</script>

<template>
  <template v-if="store.loading || status == 'pending'">
    <Spinner />
  </template>
  <template v-else-if="store.item">
    <pre>{{ JSON.stringify(store.item, null, 2) }}</pre>
  </template>
</template>
