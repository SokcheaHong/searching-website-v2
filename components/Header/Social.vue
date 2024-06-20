<script setup lang="ts">
import { socials } from '~/assets/data';
</script>

<template>
  <nav class="hidden lg:flex items-center text-[#051a53] gap-3">
    <NuxtLink
      v-for="(item, index) in socials"
      :key="index"
      :to="item.link"
      :title="item.title"
      target="_blank"
    >
      <div v-html="item.icon" />
    </NuxtLink>
  </nav>
</template>
