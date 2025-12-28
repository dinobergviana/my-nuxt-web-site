<template>
  <header
    class="fixed top-2 left-1/2 -translate-x-1/2 w-[calc(100%-1rem)] sm:w-[calc(100%-1.5rem)] md:w-full max-w-2xl py-3 px-4 bg-gray-100 dark:bg-gray-900 z-50 rounded-full shadow-md border dark:border-gray-700 md:mx-"
  >
    <div class="w-full flex items-center justify-between gap-2">
      <div>
        <button
          v-if="isGcManagerPage"
          class="p-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200"
          type="button"
          @click="goBack"
          title="Voltar"
        >
          <IconPhArrowLeft weight="bold" size="24" />
        </button>
      </div>
      <div class="flex items-center justify-end gap-2">
        <button
          v-if="theme === 'light'"
          class="p-1 rounded-md hover:bg-gray-200 text-gray-800"
          type="button"
          @click="toggleTheme"
        >
          <IconPhSun weight="bold" />
        </button>
        <button
          v-else
          class="p-1 rounded-md hover:bg-gray-800 text-gray-200"
          type="button"
          @click="toggleTheme"
        >
          <IconPhMoon weight="bold" />
        </button>

        <select
          v-model="selectedLang"
          class="p-1 rounded-md bg-transparent cursor-pointer text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800 text-sm"
          @change="setLocale(selectedLang)"
        >
          <option class="language-select-option" value="pt">BR</option>
          <option class="language-select-option" value="en">EN</option>
        </select>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useTheme } from "@/composables/useTheme";

const { theme, toggleTheme } = useTheme();

const { locale, setLocale } = useI18n();

const selectedLang = ref(locale.value);

const router = useRouter();
const route = useRoute();

const isGcManagerPage = computed(() => {
  return route.path.includes("gc-manager");
});

const goBack = () => {
  router.back();
};
</script>
