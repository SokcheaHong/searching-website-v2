<template>
  <header>
    <div
      class="justify-between md:flex-col lg:flex-row items-center shadow-lg sticky top-0 z-50 md:flex bg-[#86c6e0] p-2 md:px-10 md:py-1"
    >
      <NuxtLink :to="{ path: '/', force: true }" class="w-full"
        ><div class="flex items-center gap-1 md:gap-2">
          <NuxtImg
            alt="MLMUPC"
            src="/mlmupc-512.png"
            format="webp"
            loading="lazy"
            class="block object-contain w-[60px] h-[60px] sm:w-[90px] sm:h-[90px]"
          />
          <div class="grid gap-1">
            <p
              class="header_site_title text-[11.5px] sm:text-[18.5px] md:text-xl text-slate-900 font-semibold"
            >
              ក្រសួងរៀបចំដែនដី នគរូបនីយកម្ម និងសំណង់
            </p>
            <p
              class="text-[8.7px] sm:text-[14px] md:text-[15px] text-slate-900"
            >
              Ministry of Land Management, Urban Planning and Construction
            </p>
          </div>
        </div></NuxtLink
      >
      <HeaderSocial />
    </div>
  </header>
</template>
