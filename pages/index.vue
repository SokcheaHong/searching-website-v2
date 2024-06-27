<script setup lang="ts">
useSeoMeta({
  title: 'ទំព័រដើម | ក្រសូងរៀបចំដែនដី នគរូបនីយកម្ម និងសំណង់',
  ogTitle: 'ទំព័រដើម | ក្រសួងរៀបចំដែនដី នគរូបនីយកម្ម និងសំណង់',
});

useServerSeoMeta({
  title: 'ទំព័រដើម | ក្រសូងរៀបចំដែនដី នគរូបនីយកម្ម និងសំណង់',
  ogTitle: 'ទំព័រដើម | ក្រសួងរៀបចំដែនដី នគរូបនីយកម្ម និងសំណង់',
});
</script>

<template>
  <!-- Search  -->
  <section class="search_section_layout">
    <Search />
  </section>

  <!-- Post -->
  <section class="mt-9">
    <PostHeader :type="'featured'" />
    <div class="border-b my-2" />
    <PostList />
  </section>

  <!-- About Information & Standard Legal Letters -->
  <section class="mt-2">
    <div class="text-slate-900 py-5 text-lg">
      ព័ត៌មានអំពីលិខិតបទដ្ឋានគតិយុត្ត
    </div>
    <div class="grid gap-4 grid-cols-1 md:grid-cols-2">
      <div class="about_info_and_legal_standard_letter_box">
        <ul class="flex flex-col gap-2">
          <li>
            <NuxtLink
              to="/update-laws"
              class="link text-blue-700 cursor-pointer hover:text-blue-800 link_transition"
              >លិខិតបទដ្ឋានគតិយុត្តដែលទើបបានធ្វើបច្ចុប្បន្នភាព</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/laws-register"
              class="link text-blue-700 cursor-pointer hover:text-blue-800 link_transition"
              >តារាងបញ្ជីលិខិតបទដ្ឋានគតិយុត្តសរុបក្នុងគេហទំព័រ</NuxtLink
            >
          </li>
        </ul>
      </div>
      <div class="about_info_and_legal_standard_letter_box">
        <About />
      </div>
    </div>
  </section>
</template>
