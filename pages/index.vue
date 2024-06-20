<script setup lang="ts"></script>

<template>
  <!-- Search  -->
  <section class="grid grid-cols-1 gap-2 mx-auto w-100 md:w-[80vw]">
    <Search />
  </section>

  <!-- Post -->
  <section class="mt-9">
    <PostHeader :type="'featured'" />
    <PostList />
  </section>

  <!-- About Information & Standard Legal Letters -->
  <section class="mt-2 mb-9">
    <div class="text-slate-900 py-5 text-lgm">
      ព័ត៌មានអំពីលិខិតបទដ្ឋានគតិយុត្ត
    </div>
    <div class="grid gap-4 grid-cols-1 md:grid-cols-2">
      <div class="about_info_and_legal_standard_letter_box">
        <ul class="flex flex-col gap-2">
          <li>
            <NuxtLink
              to="laws-register"
              class="text-blue-600 cursor-pointer hover:underline"
              >លិខិតបទដ្ឋានគតិយុត្តដែលទើបបានធ្វើបច្ចុប្បន្នភាព</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="laws-register"
              class="text-blue-600 cursor-pointer hover:underline"
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
