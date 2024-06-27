<template>
  <dialog id="download_modal" class="modal">
    <div class="modal-box bg-zinc-50">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
      </form>
      <div class="flex flex-wrap justify-center">
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
  </dialog>
</template>
