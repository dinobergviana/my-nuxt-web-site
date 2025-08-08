<template>
  <header class="py-2 px-4 bg-white dark:bg-gray-900 text-white transition-colors duration-300 ease-in-out">
    <div class="flex items-center justify-end" >
      <button v-if="theme === 'light'" class="p-1 rounded-md hover:bg-gray-200 text-gray-800" type="button" @click="toggleTheme">
        <IconPhSun weight="bold" />
      </button>

      <button v-else class="p-1 rounded-md hover:bg-gray-800" type="button" @click="toggleTheme">
        <IconPhMoon weight="bold" />
      </button>

      <div class="ml-4 flex items-center gap-2 text-gray-800 dark:text-gray-100">
        <button class="p-1 text-sm rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-200" type="button" @click="changeToPortuguese">PT</button>
        <button class="p-1 text-sm rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-200" type="button" @click="changeToEnglish">EN</button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
  import { useTheme } from '@/composables/useTheme'

  const { theme, toggleTheme } = useTheme()

  const { setLocale } = useI18n()

  function changeToEnglish() {
    setLocale('en')
  }

  function changeToPortuguese() {
    setLocale('pt')
  }
  </script>
