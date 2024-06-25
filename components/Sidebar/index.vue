<script setup lang="ts">
const props = defineProps<{
  open: any;
  toggle: () => void;
}>();
</script>

<template>
  <transition name="slide">
    <div
      v-show="props.open"
      class="bg-white fixed inset-0 z-50 overflow-auto shadow-lg"
    >
      <div  class="grid gap-2 p-2">
        <button
          role="button"
          class="btn btn-ghost btn-circle p-2 absolute top-3 right-3"
          aria-label="Close"
          @click="props.toggle"
        >
          <label
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="28px"
              height="28px"
            >
              <path
                d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z"
              ></path></svg
          ></label>
        </button>
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
  </transition>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}
.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
  transition: transform 0.5s;
}
.slide-enter-to,
.slide-leave {
  transform: translateX(0);
  transition: transform 0.5s;
}
</style>
