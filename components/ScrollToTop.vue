<script setup lang="ts">
const show = ref(false);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
};

const handleScroll = () => {
  show.value = window.scrollY > 300;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <transition name="fade">
    <button
      id="pagetop"
      class="btn btn-info fixed right-5 bottom-5 rounded-full p-2 animate-pulse z-50"
      v-show="show"
      @click="scrollToTop"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ffffff"
        stroke-width="2"
        stroke-linecap="square"
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  </transition>
</template>
