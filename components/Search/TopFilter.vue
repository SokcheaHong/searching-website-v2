<script setup lang="ts">
const router = useRouter();
const { path } = useRoute();
const { params, append } = useSearch();
const type = ref<'all' | 'name'>(params.value.type || 'all');

const onChange = (event: Event) => {
  const { value } = event.target as HTMLInputElement;
  append('type', value);
};
</script>

<template>
  <div
    class="bg-[#E5EBF5] flex flex-wrap items-center gap-x-10 gap-y-5 p-3 rounded-sm"
  >
    <label class="inline-flex items-center cursor-pointer">
      <input
        type="radio"
        class="radio radio-info"
        value="all"
        v-model="type"
        @change="onChange"
      />
      <span class="ml-2 text-gray-700 font-bold">ពាក្យក្នុងអត្ថបទ</span>
    </label>
    <label class="inline-flex items-center cursor-pointer">
      <input
        type="radio"
        class="radio radio-info"
        value="name"
        v-model="type"
        @change="onChange"
      />
      <span class="ml-2 text-gray-700 font-bold">ពាក្យក្នុងឈ្មោះឯកសារ</span>
    </label>
  </div>
</template>
