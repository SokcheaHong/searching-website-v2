<script setup lang="ts">
type ItemType = {
  officialName: string;
  numberAndDate: string;
  abbreviatedName: string;
  additionalInformation: string;
};

const props = defineProps<{
  index: number;
  item: ItemType;
}>();
</script>

<template>
  <tr data-aos="fade-in">
    <td class="border border-slate-500 text-center">
      {{ arabicToKhmer(props.index) }}
    </td>
    <td class="border border-slate-500 w-[400px] p-2">
      {{ props.item?.officialName }}
    </td>
    <td class="border border-slate-500 text-center w-[120px] p-2">
      {{ props.item?.numberAndDate }}
    </td>
    <td class="border border-slate-500 text-center w-[80px]">
      {{ props.item?.abbreviatedName }}
    </td>
    <td class="border border-slate-500 text-center w-[80px]">
      {{ props.item?.additionalInformation }}
    </td>
  </tr>
</template>
