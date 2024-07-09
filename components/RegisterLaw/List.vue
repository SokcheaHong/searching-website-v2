<script setup lang="ts">
import type { MetaData, } from '~/base/interfaces/ApiData';
const scrollContainer = ref<any>(null);
const route = useRoute()

const message = ref<string | any>("");
const load_more = ref<boolean>(false)
const query = ref({
  page:1,
  limit:50
});
let qry = `&page=${query.value.page}&limit=${query.value.limit}`;
const { data, status, error, pending } = await useFetch<any>('/api/legal-letter?'+qry);
if (error.value) {
  throw message.value = error.value
}
const items = ref<any[]>((data as any)?.value.data.legal_letters)
const total = computed<any>(() => (data as any).value?.data.metadata.total)



const handleScroll = async () => {
  const container: any = scrollContainer.value;
  query.value = {
    page:query.value.page+1,
    limit:query.value.limit,
  };
  let new_qry = `&page=${query.value.page}&limit=${query.value.limit}`;
  const bottomOffset =
  container.scrollHeight - container.clientHeight - container.scrollTop;
  if (bottomOffset < 100) {
    if (total <= (items as any).value.length) {
      load_more.value = false;
      return;
    }
    const { data, status, error, pending } = await useFetch<any>('/api/legal-letter?'+new_qry);
    load_more.value = true
      if (error.value) {
        throw message.value = error.value
      }
      items.value = [...items.value,...(data as any)?.value.data.legal_letters]
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
  <div ref="scrollContainer" class="flex text-slate-700 overflow-x-auto">
    <table
      class="table-fixed overflow-scroll w-full border-collapse border border-slate-500"
    >
      <thead>
        <tr class="bg-slate-100 text-center text-xs font-[KhmerOSMoul]">
          <th class="border border-slate-500 text-xs text-center w-[40px] py-4">ល.រ</th>
          <th class="border border-slate-500 text-xs text-center w-[400px] py-4">ឈ្មោះផ្លូវការ</th>
          <th class="border border-slate-500 text-xs text-center w-[200px] py-4 md:w-[120px]">
            លេខ និងកាលបរិច្ឆេទ
          </th>
          <th class="border border-slate-500 text-xs text-center w-[100px] py-4">ឈ្មោះហៅកាត់</th>
          <th class="border border-slate-500 text-xs text-center w-[80px] py-4">ផ្សេងៗ</th>
        </tr>
      </thead>
      <tbody>
        <template v-if="pending">
          <RegisterLawSkeleton
            v-for="item in items"
            :key="item?.id"
          />
        </template>
        <template v-else-if="items?.length">
          <RegisterLawItem
            v-for="(item, index) in items"
            :key="item?.id"
            :item="item"
            :index="index + 1"
          />
        </template>
      </tbody>
    </table>
  </div>
  <div
    v-if="load_more"
    class="w-full flex items-center justify-center py-3"
  >
    <span class="loading loading-spinner !w-[2rem] text-sky-500"></span>
  </div>
</template>
