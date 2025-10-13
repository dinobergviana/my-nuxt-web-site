<template>
  <header
    class="py-2 px-4 bg-white dark:bg-gray-900 text-white transition-colors duration-300 ease-in-out"
  >
    <div class="flex items-center justify-end gap-2">
      <button
        v-if="theme === 'light'"
        class="p-1 rounded-md bg-gray-200 text-gray-800"
        type="button"
        @click="toggleTheme"
      >
        <IconPhSun weight="bold" />
      </button>

      <button
        v-else
        class="p-1 rounded-md bg-gray-800 text-gray-200"
        type="button"
        @click="toggleTheme"
      >
        <IconPhMoon weight="bold" />
      </button>

      <select
        v-model="selectedLang"
        class="bg-transparent cursor-pointer text-gray-800 dark:text-gray-200 dark:bg-gray-800 text-sm"
        @change="setLocale(selectedLang)"
      >
        <option class="language-select-option" value="pt">BR</option>
        <option class="language-select-option" value="en">EN</option>
      </select>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useTheme } from "@/composables/useTheme";

const { theme, toggleTheme } = useTheme();

const { locale, setLocale } = useI18n();

const selectedLang = ref(locale.value);
</script>
