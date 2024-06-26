<script setup lang="ts">
import { useLawStore } from '~/store';
const store = useLawStore();
onMounted(() => {
  store.getMany();
});
</script>

<template>
  <div class="flex text-slate-700 overflow-x-auto">
    <table
      class="table-fixed overflow-scroll w-full border-collapse border border-slate-500"
    >
      <thead>
        <tr class="bg-slate-100 text-xs font-[KhmerOSMoul]">
          <th class="border border-slate-500 text-center w-[40px] py-4">ល.រ</th>
          <th class="border border-slate-500 w-[400px]">ឈ្មោះផ្លូវការ</th>
          <th class="border border-slate-500 w-[200px] md:w-[120px]">
            លេខ និងកាលបរិច្ឆេទ
          </th>
          <th class="border border-slate-500 w-[100px]">ឈ្មោះហៅកាត់</th>
          <th class="border border-slate-500 w-[80px]">ផ្សេងៗ</th>
        </tr>
      </thead>
      <tbody>
        <template v-if="store.loading">
          <RegisterLawSkeleton v-for="item in store.items" :key="item?.id" />
        </template>
        <template v-else-if="store.items?.length">
          <RegisterLawItem
            v-for="(item, index) in store.items"
            :key="item?.id"
            :item="item"
            :index="index"
          />
        </template>
      </tbody>
    </table>
  </div>
</template>
