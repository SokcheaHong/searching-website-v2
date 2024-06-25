<script setup lang="ts">
const props = defineProps<{
  show: boolean;
}>();

</script>

<template>
  <div
    class="absolute top-11 sm:top-14 -translate-y-14 w-full rounded-sm border shadow-lg opacity-0 pointer-events-none transition-all origin-top ease-linear delay-100 bg-zinc-50"
    :class="{ 'opacity-100 pointer-events-auto translate-y-0': props.show }"
  >
    <ul class="divide-y">
      <li class="search_suggestion_item">
        <NuxtLink to="/document/1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, libero.
        </NuxtLink>
      </li>
      <li class="search_suggestion_item" @click.stop>
        <NuxtLink to="/document/2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, libero.
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
