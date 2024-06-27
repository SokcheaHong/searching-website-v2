<template>
  <div
    class="grid lg:grid-cols-3 lg:divide-x-2 gap-3 bg-zinc-100 p-5 rounded-sm"
  >
    <div class="w-full lg:col-span-2 grid">
      <div class="mb-1 w-[120px] h-[28px] custom_skeleton" />
      <div class="h-[28px] w-full custom_skeleton" />
      <div class="block md:hidden mt-1 h-[28px] w-4/5 custom_skeleton" />
    </div>
    <div
      class="lg:col-span-1 w-full flex justify-between items-center gap-2 ps-0 lg:ps-3"
    >
      <div
        class="flex-1 flex flex-col md:justify-start gap-2 w-full lg:basis-1/3"
      >
        <div class="h-[20px] w-64 custom_skeleton" />
        <div class="h-[20px] w-60 custom_skeleton" />
      </div>
      <div class="h-6 w-6 custom_skeleton" />
    </div>
  </div>
</template>
