<script setup lang="ts">
import moment from 'moment';

const props = defineProps<{
  item: any;
}>();
</script>
<template>
  <div
    data-aos="fade-down"
    class="w-full flex flex-col sm:flex-row md:flex-row items-start md:items-center text-slate-500 gap-2 py-3 md:px-5 border-b"
  >
    <div class="w-[300px] flex items-center justify-start">
      <div class="w-[180px] text-sm">
        {{
          formatDateToKhmer(
            moment(props.item?.publishedAt || props.item?.createdAt).unix()
          )
        }}
      </div>
      <div class="w-full mx-2 min-w-[160px]">
        <span
          class="type-text-badge-text !text-xs w-full inline-block text-white p-2 uppercase text-bold text-center tracking-wide rounded-sm"
          :style="{ backgroundColor: props.item.category?.color }"
        >
          {{ props.item.category?.name }}
        </span>
      </div>
    </div>
    <div
      class="w-5/5 md:max-w-[64%] xl:max-w-[67%] text-slate-700"
      v-html="props.item?.body"
    ></div>
    <NuxtLink
      v-if="props.item.category?.type == 'update'"
      :to="
        '/update-laws?date=' +
        moment(props.item?.publishedAt || props.item?.createdAt).format(
          'YYYY-MM-DD'
        )
      "
      class="link text-blue-600 text-nowrap hover:text-blue-800 link_transition px-2 flex items-center gap-1"
      ><svg
        class="inline-block text-inherit h-[1em] w-[1em]"
        aria-hidden="true"
        focusable="false"
        data-prefix="far"
        data-icon="copy"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          fill="currentColor"
          d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"
        ></path>
      </svg>
      <span>មើលលម្អិត</span>
    </NuxtLink>
  </div>
</template>
