<script setup lang="ts">
const selectedOption = ref('all');
</script>
<template>
  <div class="bg-[#E5EBF5] !flex !items-center gap-10 px-2 py-4 rounded-sm">
    <label class="inline-flex items-center mx-2 cursor-pointer"
      ><input
        type="radio"
        name="opt1"
        class="radio radio-info"
        value="all"
        v-model="selectedOption"
      /><span class="ml-2 text-gray-700 font-bold"
        >ពាក្យក្នុងអត្ថបទ</span
      ></label
    ><label class="inline-flex items-center mx-2 cursor-pointer"
      ><input
        type="radio"
        name="opt2"
        class="radio radio-info"
        value="name"
        v-model="selectedOption"
      /><span class="ml-2 text-gray-700 font-bold"
        >ពាក្យក្នុងឈ្មោះឯកសារ</span
      ></label
    >
  </div>
</template>
