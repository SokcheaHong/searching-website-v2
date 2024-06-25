<script setup lang="ts">
const props = defineProps<{
  show: boolean;
  onHide: () => void;
}>();
</script>

<template>
  <transition name="fade">
    <div
      v-show="props.show"
      class="fixed inset-0 z-50 overflow-y-auto backdrop-contrast-50 shadow-lg flex items-center justify-center"
    >
      <div class="relative block m-2">
        <button
          role="button"
          class="btn btn-sm btn-circle btn-info absolute right-0 -top-9"
          aria-label="Close"
          @click="props.onHide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#fff"
            class="w-[20px] h-[20px]"
          >
            <path
              d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z"
            ></path>
          </svg>
        </button>
        <div
          class="flex flex-wrap justify-center bg-zinc-50 p-5 h-auto rounded shadow-sm"
        >
          <div class="download_option_item">
            <img
              src="../assets/images/pdf.png"
              class="block object-contain h-16 sm:h-20 w-auto"
            />
            <span class="text-sm sm:text-base">ទាញយកជាទម្រង់ PDF</span>
          </div>
          <div class="download_option_item">
            <img
              src="../assets/images/docx.png"
              class="block object-contain h-16 sm:h-20 w-auto"
            />
            <span class="text-sm sm:text-base">ទាញយកជាទម្រង់ WORD</span>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s linear;
}

.fade-enter {
  opacity: 1;
}

.fade-leave-to {
  opacity: 0;
}
</style>
