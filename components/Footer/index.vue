<template>
  <footer
    class="flex flex-col bg-[#86c6e0] z-[99999] overflow-hidden text-white"
  >
    <div
      class="w-full bg-[#1d2846] py-10 px-2 flex flex-wrap items-center justify-center gap-6"
    >
      <div
        class="w-5/5 lg:w-2/5 flex flex-col lg:flex-row items-center justify-center gap-4"
      >
        <img
          alt="MLMUPC"
          src="/assets/images/mlmupc-logo.png"
          class="w-[140px]"
        />
        <div>
          <p class="text-xl text-white font-bold text-center lg:text-start">
            ក្រសួងរៀបចំដែនដី នគរូបនីយកម្ម និងសំណង់
          </p>
          <p class="text-xs mt-2 text-white">
            Ministry of Land Management, Urban Planning and Construction
          </p>
        </div>
      </div>
      <div class="lg:w-2/5 w-[100%] grid grid-cols-2 gap-4 items-center">
        <NuxtLink
          to="https://maps.app.goo.gl/ep8cPkufQYYvhsvZ6"
          class="footer_place_and_phone_box"
        >
          ទីតាំង</NuxtLink
        >
        <div class="footer_place_and_phone_box">លេខទំនាក់ទំនង</div>
      </div>
    </div>
    <div
      class="block w-full text-sm lg:text-lg text-center py-8 px-4 bg-[#eaddc3] text-blue-900"
    >
      <p>© រក្សាសិទ្ធិគ្រប់យ៉ាងដោយ ក្រសួងរៀបចំដែនដី នគរូបនីយកម្ម និងសំណង់</p>
    </div>
  </footer>
</template>
