<template>
  <header
    class="py-2 px-4 bg-white dark:bg-gray-900 text-white flex items-center"
    :class="[isHome ? 'justify-end' : 'justify-between border-b border-gray-700']"
  >
    <div v-if="!isHome" class="flex items-center">
      <button
        class="md:hidden p-2 mr-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
        @click="sidebar.toggle"
      >
        <IconPhListDashes />
      </button>
      <NuxtLink to="/">
        <IconPhHouse class="w-6 h-6" />
      </NuxtLink>
    </div>
    <div class="flex items-center justify-end gap-2">
      <button
        v-if="theme === 'light'"
        class="p-1 rounded-md hover:bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
        type="button"
        @click="toggleTheme"
      >
        <IconPhSun weight="bold" />
      </button>

      <button
        v-else
        class="p-1 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
        type="button"
        @click="toggleTheme"
      >
        <IconPhMoon weight="bold" />
      </button>

      <select
        v-model="selectedLang"
        class="bg-transparent cursor-pointer text-gray-800 dark:text-gray-200 text-sm rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
        @change="setLocale(selectedLang)"
      >
        <option class="language-select-option" value="pt">BR</option>
        <option class="language-select-option" value="en">EN</option>
      </select>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useTheme } from "@/composables/useTheme";
import { useSidebar } from '@/stores/useSidebar'

const { theme, toggleTheme } = useTheme();

const { locale, setLocale } = useI18n();

const selectedLang = ref(locale.value);

const isHome = computed(() => {
  return route.path === '/'
})

const route = useRoute();
const sidebar = useSidebar()
</script>
