<script setup lang="ts">
import { useCategoryStore } from '~/store';

const store = useCategoryStore();
const router = useRouter();
const { path } = useRoute();
const search = useSearch();

const selectedItems = computed(
  () => search.params.value.categories?.split(',') || []
);
const items = ref(
  store?.items?.map((item) => ({
    ...item,
    checked: selectedItems.value.includes(String(item.id)),
  })) || []
);

const isSelectAll = computed(() => items.value.every((item) => item.checked));
const isDeselectAll = computed(() => !items.value.some((item) => item.checked));

const appendSearchParams = (selected: any[]) => {
  search.append('categories', selected.join(','));
  if (path == '/result') {
    router.push({ query: filterObjectWithTruthyValues(search.params.value) });
  }
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

  items.value.forEach((item) => {
    if (item.id === value) {
      item.checked = checked;
    }
    if (item.checked) {
      selectedCategories.push(item.id);
    }
  });

  appendSearchParams(selectedCategories);
};

onMounted(() => store.getMany());
</script>

<template>
  <div class="bg-[#E5EBF5] rounded-sm">
    <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2 p-3">
      <template v-if="store.loading">
        <SearchCategorySkeleton v-for="item in items" :key="item.id" />
      </template>
      <template v-else-if="store.items?.length">
        <label
          class="inline-flex items-center cursor-pointer"
          v-for="item in items"
          :key="item.id"
        >
          <input
            type="checkbox"
            class="checkbox large-screen rounded-sm checkbox-info ![--chkbg:#E5EBF5] ![--chkfg:#0EA5E9] !border-[#0EA5E9]"
            :value="item.id"
            v-model="item.checked"
            @change="onChange"
          />
          <span class="ml-2 text-gray-700 checkmark">{{ item.name }}</span>
        </label>
      </template>
    </div>
    <div class="flex justify-start gap-5 px-3 py-2">
      <template v-if="store.loading">
        <div class="h-[26px] w-[115px] custom_skeleton" />
        <div class="h-[26px] w-[115px] custom_skeleton" />
      </template>
      <template v-else-if="store.items?.length">
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
      </template>
    </div>
  </div>
</template>
