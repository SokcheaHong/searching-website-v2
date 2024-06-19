<script setup lang="ts">
const config = useRuntimeConfig();

useSeoMeta({
  charset: 'utf-8',
  viewport: { width: 'device-width', initialScale: '1.0' },
  title: 'ក្រសូងរៀបចំដែនដី នគរូបនីយកម្ម និងសំណង់ | MLMUPC',
  ogTitle: 'ក្រសួងរៀបចំដែនដី នគរូបនីយកម្ម និងសំណង់ | MLMUPC',
  description: 'Ministry of Land Management, Urban Planning and Construction',
  ogDescription: 'Ministry of Land Management, Urban Planning and Construction',
  ogType: 'website',
  ogUrl: config.public.webBaseUrl,
  ogImage: config.public.webBaseUrl + '/mlmupc-logo.ico',
  ogSiteName: 'ក្រសូងរៀបចំដែនដី នគរូបនីយកម្ម និងសំណង់',
  robots: { index: true, noimageindex: true, follow: true },
});
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
