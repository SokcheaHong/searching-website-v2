<script setup lang="ts">
import type { MetaData, About } from '~/base/interfaces/ApiData';
const message = ref<string | any>("");
const { data, status, error, pending } = await useFetch<any>('/api/about');
if (error.value) {
  throw message.value = error.value
}
const items = computed<About>(() => (data as any).value.data)
const about = ref(
  '<p>គេហទំព័រនេះ ត្រូវបានបង្កើតឡើងដើម្បីចងក្រងទិន្នន័យលិខិតបទដ្ឋានគតិយុត្តក្នុងក្របខណ្ឌវិស័យរៀបចំដែនដី នគរូបនីយកម្ម និងសំណង់ ក្នុងគោលបំណងផ្តល់ភាពងាយស្រួលសម្រាប់ការស្រាវជ្រាវ។ ទិន្នន័យទាំងអស់ រួមមាន គោលនយោបាយ ព្រះរាជក្រឹត្យ ក្រម ច្បាប់ អនុក្រឹត្យ ប្រកាស សារាចរណែនាំ សេចក្តីណែនាំ សេចក្តីសម្រេច បទបញ្ជា សេចក្តីប្រកាសព័ត៌មាន។ ទិន្នន័យទាំងនេះ គឺជាច្បាប់ចម្លងទាំងស្រុងតាមច្បាប់ដើម ចងក្រងដំបូង(ឆ្នាំ១៩៨៥ ​ដល់ឆ្នាំ ២០២៣) ដោយ ឯកឧត្តមសាស្រ្តាចារ្យបណ្ឌិត ហាប់ ផល្ធី។ គម្រោងចងក្រងគេហទំព័រនេះ បានទទួលការឧបត្ថម្ភគាំទ្រផ្នែកថវិកាពី ធនាគារ វឌ្ឍនៈអាស៊ី ចំកាត់ (ABA)។ សូមផ្ទៀងផ្ទាត់ជាមួយរាជកិច្ចសម្រាប់ឯកសារផ្លូវការ។ ករណីមានកំហុសអក្ខរាវិរុទ្ធ សូមទំនាក់ទំនងមកកាន់តេលេក្រាម លេខទូរសព្ទ <a href="https://t.me/+855975269072" rel="noopener noreferrer" target="_blank" style="color: rgb(0, 102, 204);">(097 526 90 72)​</a>។ សូមថ្លែងអំណរគុណទុកជាមុនសម្រាប់កិច្ចសហការពីគ្រប់មជ្ឈដ្ឋាន។</p>'
);
</script>

<template>
  <template v-if="pending">
    <div class="block h-60 w-full custom_skeleton" />
  </template>
  <template v-else-if="message">
    <p class="text-gray-600">
      មាន​អ្វីមួយ​មិន​ប្រក្រតី! មិនអាចទាញយកទិន្នន័យបានទេ។ :
    </p>
  </template>
  <template v-else>
    <div data-aos="zoom-in-up" class="text-gray-900" v-html="items?.content || about" />
  </template>
</template>
