<template>
  <label
    aria-label="open sidebar"
    class="drawer-button btn-primary text-gray-950 w-9 block"
    htmlFor="sidebar_drawer"
  >
    <svg
      class="inline-block text-2xl h-full w-full text-blue-900"
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="filter"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z"
      ></path>
    </svg>
    <ClientOnly>
      <Sidebar />
    </ClientOnly>
  </label>
</template>
