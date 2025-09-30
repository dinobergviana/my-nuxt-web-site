<template>
  <header
    class="py-2 px-4 bg-white dark:bg-gray-900 text-white transition-colors duration-300 ease-in-out flex items-center"
    :class="route.path === '/' ? 'justify-end' : 'justify-between'"
  >
    <!-- Voltar -->
        <NuxtLink v-if="route.path !== '/'" to="/" class="block rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500">
          <!-- <Tooltip class="ml-2" text="Voltar" position="top">
            <template #content>
            </template>
          </Tooltip> -->
          <IconPhArrowLeft
            class="w-8 text-gray-600 dark:text-gray-300"
          />
        </NuxtLink>
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
import { useTheme } from "@/composables/useTheme";

const { theme, toggleTheme } = useTheme();

const { locale, setLocale } = useI18n();

const selectedLang = ref(locale.value);

const route = useRoute();
</script>
