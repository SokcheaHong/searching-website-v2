<script setup lang="ts">
import { useCategoryStore } from '~/store';

const router = useRouter();
const { path } = useRoute();
const search = useSearch();

const store = useCategoryStore();
const items = ref(
  store?.items?.map((item) => ({ ...item, checked: false })) || []
);
const selectedItems = ref<any[]>([]);

const isSelectAll = computed(() => items.value.every((item) => item.checked));
const isDeselectAll = computed(() => !items.value.some((item) => item.checked));

const handleSelectAll = (selected: boolean) => {
  items.value.forEach((item) => {
    item.checked = selected;
  });

  let selectedCategories = '';
  if (selected) {
    selectedItems.value = items.value?.map((item) => item.id) || [];
    selectedCategories = items.value.map((item) => item.id).join(',') || '';
  } else {
    selectedCategories = '';
    selectedItems.value = [];
  }

  search.append('categories', selectedCategories);
  if (path == '/result') {
    router.push({ query: filterObjectWithTruthyValues(search.params.value) });
  }
};

const onChange = (event: Event) => {
  const { checked, value } = event.target as HTMLInputElement;

  const selectedCategories = items.value
    .reduce((acc, item) => {
      if (item.id === value) {
        item.checked = checked;
      }
      if (item.checked) {
        acc.push(item.id);
      }
      return acc;
    }, [] as string[])
    .join(',');

  search.append('categories', selectedCategories);
  if (path == '/result') {
    router.push({ query: filterObjectWithTruthyValues(search.params.value) });
  }
};

onBeforeMount(() => {
  const selectedCategories = search.params.value.categories?.split(',') || [];
  items.value.forEach((item) => {
    item.checked = selectedCategories.includes(String(item.id));
  });
});

onMounted(() => store.getMany());
</script>

<template>
  <div class="bg-[#E5EBF5] px-2 py-4 rounded-sm">
    <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2 px-2">
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
    <div class="flex mt-4 ml-2 justify-start gap-5">
      <template v-if="store.loading">
        <div class="h-[26px] w-[115px] skeleton" />
        <div class="h-[26px] w-[115px] skeleton" />
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
