<script setup lang="ts">
import "./assets/css/main.css"
useSeoMeta({
  description:
    'គេហទំព័រនេះ ត្រូវបានបង្កើតឡើងដើម្បីចងក្រងទិន្នន័យលិខិតបទដ្ឋានគតិយុត្តក្នុងក្របខណ្ឌវិស័យរៀបចំដែនដី នគរូបនីយកម្ម និងសំណង់ (MLMUPC)។',
  ogDescription:
    'គេហទំព័រនេះ ត្រូវបានបង្កើតឡើងដើម្បីចងក្រងទិន្នន័យលិខិតបទដ្ឋានគតិយុត្តក្នុងក្របខណ្ឌវិស័យរៀបចំដែនដី នគរូបនីយកម្ម និងសំណង់ (MLMUPC)។',
  robots: { index: true, noimageindex: true, follow: true },
});

useServerSeoMeta({
  description:
    'គេហទំព័រនេះ ត្រូវបានបង្កើតឡើងដើម្បីចងក្រងទិន្នន័យលិខិតបទដ្ឋានគតិយុត្តក្នុងក្របខណ្ឌវិស័យរៀបចំដែនដី នគរូបនីយកម្ម និងសំណង់ (MLMUPC)។',
  ogDescription:
    'គេហទំព័រនេះ ត្រូវបានបង្កើតឡើងដើម្បីចងក្រងទិន្នន័យលិខិតបទដ្ឋានគតិយុត្តក្នុងក្របខណ្ឌវិស័យរៀបចំដែនដី នគរូបនីយកម្ម និងសំណង់ (MLMUPC)។',
  robots: { index: true, noimageindex: true, follow: true },
});
</script>

<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
    <ClientOnly>
      <ScrollToTop />
    </ClientOnly>
  </NuxtLayout>
</template>
