<template>
  <Header />
  <main class="min-h-[calc(100vh-410px)] p-4 bg-white">
    <slot />
    <ClientOnly>
      <ScrollToTop />
      <Sidebar />
    </ClientOnly>
  </main>
  <Footer />
</template>
