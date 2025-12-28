<template>
  <header
    class="fixed top-2 left-1/2 -translate-x-1/2 w-[calc(100%-1rem)] sm:w-[calc(100%-1.5rem)] md:w-[450px] py-1 px-4 bg-gray-100 dark:bg-gray-800 z-50 rounded-full shadow-md border dark:border-gray-700"
  >
    <div class="w-full flex items-center justify-between gap-2">
      <nav>
        <ul class="flex gap-6 items-center text-sm md:text-md text-gray-100">
          <li class="nav-item"><NuxtLink href="/">Home</NuxtLink> </li>
          <li class="nav-item"><NuxtLink href="/experiences">Experiências</NuxtLink> </li>
          <li class="nav-item"><NuxtLink href="/projects">Projetos</NuxtLink> </li>
          <li class="nav-item"><NuxtLink href="/about">Sobre mim</NuxtLink> </li>
        </ul>
      </nav>
      <MenuDropdown />
    </div>
  </header>
</template>

<script setup lang="ts">
import MenuDropdown from "../../dropdown-menu/index.vue"
</script>
