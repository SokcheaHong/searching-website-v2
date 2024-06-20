<template>
  <div>
    <Header />
    <main class="min-h-64 bg-zinc-50">
      <div class="h-auto mx-auto w-100 md:w-[80vw] p-2">
        <slot />
      </div>
    </main>
    <Footer />
  </div>
</template>
