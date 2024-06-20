<script setup lang="ts">
import { useCategoryStore } from '~/store';

const store = useCategoryStore();
const items = ref(
  store?.items?.map((item) => ({ ...item, checked: false })) || []
);

const isSelectAll = computed(() => items.value.every((item) => item.checked));
const isDeselectAll = computed(() => !items.value.some((item) => item.checked));

const handleSelectAll = (selected: boolean) => {
  items.value.forEach((item) => {
    item.checked = selected;
  });
};
</script>

<template>
  <div class="bg-[#E5EBF5] px-2 py-4 rounded-sm">
    <div class="grid grid-cols-4 lg:grid-cols-5 gap-2">
      <template v-for="item in items" :key="item.id">
        <label class="inline-flex items-center mx-2 cursor-pointer">
          <input
            type="checkbox"
            class="checkbox large-screen rounded-sm checkbox-info ![--chkbg:#E5EBF5] ![--chkfg:#0EA5E9] !border-[#0EA5E9]"
            v-model="item.checked"
          />
          <span class="ml-2 text-gray-700 checkmark">{{ item.name }}</span>
        </label>
      </template>
    </div>
    <div class="flex mt-4 ml-2 justify-start gap-5">
      <button
        class="search_select_deselect_btn"
        :disabled="isSelectAll"
        @click="handleSelectAll(true)"
      >
        ជ្រើសរើសទាំងអស់
      </button>
      <button
        class="search_select_deselect_btn"
        :disabled="isDeselectAll"
        @click="handleSelectAll(false)"
      >
        ដកការជ្រើសរើស
      </button>
    </div>
  </div>
</template>
