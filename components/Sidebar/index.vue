<template>
  <div className="drawer drawer-end z-50">
    <input id="sidebar_drawer" type="checkbox" className="drawer-toggle" />
    <div className="drawer-side">
      <label
        htmlFor="sidebar_drawer"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <div class="min-h-full bg-zinc-50">
        <div class="grid gap-2 p-2">
          <label
            role="button"
            aria-label="close sidebar"
            class="drawer-button btn btn-sm btn-circle btn-ghost absolute right-4 top-2"
            htmlFor="sidebar_drawer"
          >
          ✕</label
          >
          <NuxtLink :to="{ path: '/', force: true }" class="w-full"
            ><div class="flex flex-col items-center gap-3 p-2">
              <NuxtImg
                alt="MLMUPC"
                src="/mlmupc-512.png"
                format="webp"
                loading="lazy"
                class="block object-contain w-[90px] h-[90px]"
              />
              <div class="grid gap-2 text-center text-slate-900">
                <p class="header_site_title text-sm font-semibold">
                  ក្រសួងរៀបចំដែនដី នគរូបនីយកម្ម និងសំណង់
                </p>
                <p class="text-xs">
                  Ministry of Land Management, Urban Planning and Construction
                </p>
              </div>
            </div></NuxtLink
          >
          <SearchInputBox />
          <SearchTopFilter />
          <SearchCategoryFilter />
        </div>
      </div>
    </div>
  </div>
</template>
