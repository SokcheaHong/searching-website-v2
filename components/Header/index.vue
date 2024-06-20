<template>
  <header>
    <div
      class="justify-between md:flex-col lg:flex-row items-center shadow-lg sticky top-0 z-50 md:flex bg-[#86c6e0] px-1 py-2 md:px-10 md:py-1"
    >
      <NuxtLink to="/" class="w-full"
        ><div class="flex items-center gap-1 md:gap-2">
          <NuxtImg alt="MLMUPC" src="/mlmupc-logo.png" sizes="60px md:90px" />
          <div class="grid gap-1">
            <p
              class="header_site_title text-[11px] sm:text-lg md:text-xl text-white"
            >
              ក្រសួងរៀបចំដែនដី នគរូបនីយកម្ម និងសំណង់
            </p>
            <p class="text-[8.25px] sm:text-[13.5px] md:text-[15px] text-white">
              Ministry of Land Management, Urban Planning and Construction
            </p>
          </div>
        </div></NuxtLink
      >
      <HeaderSocial />
    </div>
  </header>
  <ScrollToTop />
</template>
