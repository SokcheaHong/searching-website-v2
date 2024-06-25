<script setup lang="ts">
const config = useRuntimeConfig();

useServerSeoMeta({
  contentType: 'text/html; charset=utf-8',
  title: 'ក្រសូងរៀបចំដែនដី នគរូបនីយកម្ម និងសំណង់ | MLMUPC',
  ogTitle: 'ក្រសួងរៀបចំដែនដី នគរូបនីយកម្ម និងសំណង់ | MLMUPC',
  description:
    'គេហទំព័រនេះ ត្រូវបានបង្កើតឡើងដើម្បីចងក្រងទិន្នន័យលិខិតបទដ្ឋានគតិយុត្តក្នុងក្របខណ្ឌវិស័យរៀបចំដែនដី នគរូបនីយកម្ម និងសំណង់។',
  ogDescription:
    'គេហទំព័រនេះ ត្រូវបានបង្កើតឡើងដើម្បីចងក្រងទិន្នន័យលិខិតបទដ្ឋានគតិយុត្តក្នុងក្របខណ្ឌវិស័យរៀបចំដែនដី នគរូបនីយកម្ម និងសំណង់។',
  ogType: 'website',
  ogUrl: config.public.webBaseUrl,
  ogImage: config.public.webBaseUrl + '/mlmupc-logo.ico',
  ogSiteName: 'ក្រសូងរៀបចំដែនដី នគរូបនីយកម្ម និងសំណង់',
  robots: { index: true, noimageindex: true, follow: true },
});
</script>

<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
