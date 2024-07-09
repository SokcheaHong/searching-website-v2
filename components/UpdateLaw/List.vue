<script setup lang="ts">
import type { Document, MetaData } from '~/base/interfaces/ApiData';
const { params } = useSearch();
const scrollContainer = ref<any>(null);
const route = useRoute();
const message = ref<string | any>('');
const load_more = ref<boolean>(false);
const query = ref<any>({
  page: 1,
  limit: 50,
});

let qry = `&page=${query.value.page}&limit=${query.value.limit}`;
const { data, status, error, pending } = await useFetch<any>(
  '/api/documents?' + qry
);
if (error.value) {
  throw (message.value = error.value);
}
const items = ref<Document[]>((data as any)?.value.data);
const total = ref<any>((data as any)?.value.total);

const handleScroll = async () => {
  const container: any = scrollContainer.value;
  query.value = {
    page: query.value.page + 1,
    limit: query.value.limit,
  };
  let new_qry = `&page=${query.value.page}&limit=${query.value.limit}`;
  const bottomOffset =
    container.scrollHeight - container.clientHeight - container.scrollTop;
  if (bottomOffset < 100) {
    if (total.value <= (items as any)?.value?.length) {
      return;
    }
    const { data, status, error, pending } = await useFetch<any>(
      '/api/documents?' + new_qry
    );
    if (error.value) {
      throw (message.value = error.value);
    }
    items.value = [...items.value, ...(data as any)?.value.data];
    load_more.value = false;
  }
};

// Debounce function
const debounce = (func: any, delay: any) => {
  let timeoutId: any;
  return (...args: any) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const debouncedHandleScroll = debounce(handleScroll, 300); // 300ms debounce delay

onMounted(() => {
  window.addEventListener('scroll', debouncedHandleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', debouncedHandleScroll);
});
</script>

<template>
  <div ref="scrollContainer" class="grid gap-2">
    <template v-if="pending">
      <UpdateLawSkeleton v-for="item in items" :key="item?.id" />
    </template>
    <template v-else-if="items?.length">
      <UpdateLawItem v-for="item in items" :key="item?.id" :item="item" />
    </template>
  </div>
  <div v-if="load_more" class="w-full flex items-center justify-center py-3">
    <span class="loading loading-spinner !w-[2rem] text-sky-500"></span>
  </div>
</template>
