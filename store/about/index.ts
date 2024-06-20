import type { BaseStoreState } from '~/base/interfaces';
import { defineStore } from 'pinia';

export default defineStore('about', () => {
  const axios = useAxios();
  const state = reactive<BaseStoreState>({
    item: '<p>គេហទំព័រនេះ ត្រូវបានបង្កើតឡើងដើម្បីចងក្រងទិន្នន័យលិខិតបទដ្ឋានគតិយុត្តក្នុងក្របខណ្ឌវិស័យរៀបចំដែនដី នគរូបនីយកម្ម និងសំណង់ ក្នុងគោលបំណងផ្តល់ភាពងាយស្រួលសម្រាប់ការស្រាវជ្រាវ។ ទិន្នន័យទាំងអស់ រួមមាន គោលនយោបាយ ព្រះរាជក្រឹត្យ ក្រម ច្បាប់ អនុក្រឹត្យ ប្រកាស សារាចរណែនាំ សេចក្តីណែនាំ សេចក្តីសម្រេច បទបញ្ជា សេចក្តីប្រកាសព័ត៌មាន។ ទិន្នន័យទាំងនេះ គឺជាច្បាប់ចម្លងទាំងស្រុងតាមច្បាប់ដើម ចងក្រងដំបូង(ឆ្នាំ១៩៨៥ ​ដល់ឆ្នាំ ២០២៣) ដោយ ឯកឧត្តមសាស្រ្តាចារ្យបណ្ឌិត ហាប់ ផល្ធី។ គម្រោងចងក្រងគេហទំព័រនេះ បានទទួលការឧបត្ថម្ភគាំទ្រផ្នែកថវិកាពី ធនាគារ វឌ្ឍនៈអាស៊ី ចំកាត់ (ABA)។ សូមផ្ទៀងផ្ទាត់ជាមួយរាជកិច្ចសម្រាប់ឯកសារផ្លូវការ។ ករណីមានកំហុសអក្ខរាវិរុទ្ធ សូមទំនាក់ទំនងមកកាន់តេលេក្រាម លេខទូរសព្ទ <a href="https://t.me/+855975269072" rel="noopener noreferrer" target="_blank" style="color: rgb(0, 102, 204);">(097 526 90 72)​</a>។ សូមថ្លែងអំណរគុណទុកជាមុនសម្រាប់កិច្ចសហការពីគ្រប់មជ្ឈដ្ឋាន។</p>',
    loading: false,
  });

  async function get() {
    state.loading = true;
    try {
      const response = await axios.get('/api/about');
      if (response.data?.data) {
        state.items = response.data?.data.categories;
      }
    } catch (error) {
      throw error;
    } finally {
      state.loading = false;
    }
  }

  return {
    ...state,
    get,
  };
});
