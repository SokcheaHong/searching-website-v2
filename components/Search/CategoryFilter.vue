<script setup lang="ts">
const router = useRouter();
const { path } = useRoute();
const search = useSearch();
const message = ref<string | any>("");

const { data, status, error, pending } = await useFetch<any>('/api/categories');
if (error.value) {
  throw message.value = error.value
}
const items = ref<any[]>((data as any)?.value.data)


const selectedItems = computed(
  () => search.params.value.categories?.split(',') || []
);

items.value = items.value.map((item: any) => ({
  ...item,
  checked: selectedItems.value.includes(String(item.id)),
}));

const isSelectAll = computed(() => items.value.every((item) => item.checked));
const isDeselectAll = computed(() => !items.value.some((item) => item.checked));

const appendSearchParams = (selected: any[]) => {
  search.append('categories', selected.join(','));
};

const handleSelectAll = (selected: boolean) => {
  const selectedCategories: any[] = [];
  items.value.forEach((item) => {
    item.checked = selected;
    if (selected) {
      selectedCategories.push(item.id);
    }
  });

  appendSearchParams(selectedCategories);
};

const onChange = (event: Event) => {
  const { checked, value } = event.target as HTMLInputElement;
  const selectedCategories: any[] = [];

  items.value.forEach((item: any) => {
    if (item.id === value) {
      item.checked = checked;
    }
    if (item.checked) {
      selectedCategories.push(item.id);
    }
  });

  appendSearchParams(selectedCategories);
};
</script>

<template>
  <div class="bg-[#E5EBF5] rounded-sm">
    <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2 p-3">
      <template v-if="pending">
        <SearchCategorySkeleton v-for="item in items" :key="item.id" />
      </template>
      <template v-else-if="
        items.length && !pending && items.length > 0
      ">
        <label class="inline-flex items-center cursor-pointer" v-for="item in items" :key="item.id">
          <input type="checkbox"
            class="checkbox large-screen rounded-sm checkbox-info ![--chkbg:#E5EBF5] ![--chkfg:#0EA5E9] !border-[#0EA5E9]"
            :value="item.id" v-model="item.checked" @change="onChange" />
          <span class="ml-2 text-gray-700 checkmark">{{ item.name }}</span>
        </label>
      </template>
    </div>
    <div class="flex justify-start gap-5 px-3 py-2">
      <template v-if="pending">
        <div class="h-[26px] w-[115px] custom_skeleton" />
        <div class="h-[26px] w-[115px] custom_skeleton" />
      </template>
      <template v-else-if="items.length">
        <button class="search_select_deselect_btn" :disabled="isSelectAll" @click="handleSelectAll(true)">
          ជ្រើសរើសទាំងអស់
        </button>
        <button class="search_select_deselect_btn" :disabled="isDeselectAll" @click="handleSelectAll(false)">
          ដកការជ្រើសរើស
        </button>
      </template>
    </div>
  </div>
</template>
