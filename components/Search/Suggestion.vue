<template>
  <div class="dropdown-content w-full mt-2 shadow-sm rounded-sm bg-white z-50">
    <ul class="divide-y">
      <li class="search_suggestion_item">
        <NuxtLink to="/document/1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, libero.
        </NuxtLink>
      </li>
      <li class="search_suggestion_item" @click.stop>
        <NuxtLink to="/document/2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, libero.
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
