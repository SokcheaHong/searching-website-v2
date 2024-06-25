<script setup lang="ts">
import moment from 'moment';

type ItemType = {
  id: any;
  name: string;
  date: any;
  categories: any[];
  attributes: any[];
};

const props = defineProps<{
  item: ItemType;
}>();

const show = ref(false);

const toggleDownload = () => {
  show.value = !show.value;
};
</script>

<template>
  <div
    class="grid lg:grid-cols-3 lg:divide-x-2 gap-3 bg-zinc-100 p-5 rounded-sm"
  >
    <div class="w-full lg:col-span-2">
      <div class="flex gap-3 mb-1">
        <template
          v-if="props.item?.categories && props.item?.categories?.length"
        >
          <span
            v-for="category in uniqueArray(props.item?.categories, 'id')"
            :key="category?.id"
            class="inline-block bg-gray-500 text-white p-1 text-sm text-center min-w-[120px] rounded-sm"
            >{{ category?.name }}</span
          >
        </template>
      </div>
      <NuxtLink
        :to="'/document/' + props.item?.id"
        class="font-black text-xl link-hover text-blue-800 lg:basis-3/5 link_transition"
      >
        {{ props.item?.name }}
      </NuxtLink>
    </div>
    <div
      class="lg:col-span-1 w-full flex justify-between items-center gap-2 ps-0 lg:ps-3"
    >
      <div
        class="flex-1 flex flex-col md:justify-start gap-2 text-slate-600 text-sm w-full lg:basis-1/3"
      >
        <div>
          កាលបរិច្ឆេទប្រកាសឲ្យប្រើ:
          {{
            formatDateToKhmer(moment(props.item?.attributes[0]?.value).unix())
          }}
        </div>
        <div>កាលបរិច្ឆេទបង្ហោះ​: {{ formatDateToKhmer(props.item?.date) }}</div>
      </div>
      <button
        type="button"
        aria-label="Download"
        class="btn btn-ghost btn-info btn-sm btn-circle text-blue-700"
        @click="toggleDownload"
      >
        <svg
          class="inline-block text-inherit h-[1em] w-[1em]"
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="download"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
          ></path>
        </svg>
      </button>
    </div>
  </div>

  <DocumentDownload :show="show" :on-hide="() => (show = false)" />
</template>
