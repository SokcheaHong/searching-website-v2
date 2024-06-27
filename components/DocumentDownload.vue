<template>
  <dialog id="download_modal" class="modal">
    <div class="modal-box bg-zinc-50 rounded-sm">
      <form method="dialog">
        <button
          class="btn btn-sm btn-circle btn-ghost text-lg absolute right-2 top-2"
        >
          ✕
        </button>
      </form>
      <div class="grid grid-cols-2">
        <div class="download_option_item">
          <img
            src="../assets/images/pdf.png"
            alt="PDF"
            class="block object-contain h-16 sm:h-20 w-auto"
          />
          <span class="text-sm sm:text-base">ទាញយកជាទម្រង់ PDF</span>
        </div>
        <div class="download_option_item">
          <img
            src="../assets/images/docx.png"
            alt="WORD"
            class="block object-contain h-16 sm:h-20 w-auto"
          />
          <span class="text-sm sm:text-base">ទាញយកជាទម្រង់ WORD</span>
        </div>
      </div>
    </div>
  </dialog>
</template>
