<template>
  <header class="flex w-full border dark:border-gray-700 h-header">
    <div class="w-full flex items-center justify-center gap-2">
      <nav>
        <ul
          class="flex gap-4 md:gap-6 items-center text-sm md:text-md text-gray-100"
        >
          <li>
            <NuxtLink
              to="/"
              class="text-sm text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-white transition-colors duration-200 ease-out"
              active-class="text-gray-600 dark:text-white"
              >{{ $t("header.nav.home") }}</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/experiences"
              class="text-sm text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-white transition-colors duration-200 ease-out"
              active-class="text-gray-600 dark:text-white"
              >{{ $t("header.nav.experiences") }}</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/projects"
              class="text-sm text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-white transition-colors duration-200 ease-out"
              active-class="text-gray-600 dark:text-white"
              >{{ $t("header.nav.projects") }}</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/education"
              class="text-sm text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-white transition-colors duration-200 ease-out"
              active-class="text-gray-600 dark:text-white"
              >{{ $t("header.nav.education") }}</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/me"
              class="text-sm text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-white transition-colors duration-200 ease-out"
              active-class="text-gray-600 dark:text-white"
              >{{ $t("header.nav.me") }}</NuxtLink
            >
          </li>
        </ul>
      </nav>
      <MenuDropdown />
    </div>
  </header>
</template>

<script setup lang="ts">
import MenuDropdown from "../../dropdown-menu/index.vue";
</script>
