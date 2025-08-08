<template>
  <header class="py-2 px-4 bg-white dark:bg-gray-900 text-white transition-colors duration-300 ease-in-out">
    <div class="flex items-center justify-end" >
      <button type="button" @click="toggleTheme">
        <IconPhSun v-if="theme === 'light'" color="#000" weight="bold" />
        <IconPhMoon v-else weight="bold" />
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
  import { useTheme } from '@/composables/useTheme'
  const { theme, toggleTheme } = useTheme()
  </script>
