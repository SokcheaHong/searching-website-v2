<script setup lang="ts">
import { useAboutStore } from '~/store';
const store = useAboutStore();
</script>

<template>
  <div class="text-gray-900" v-html="store.item" />
</template>
