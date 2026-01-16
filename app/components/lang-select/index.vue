<template>
  <div class="relative" ref="menuRef">
    <!-- Botão principal -->
    <!-- <IconPhGlobe class="text-gray-600 dark:text-gray-300" /> -->
    <button
      ref="triggerRef"
      class="p-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200"
      @click.stop="toggleMenu"
      aria-label="Configurações"
      aria-haspopup="menu"
      :aria-expanded="isOpen"
    >
      <IconPhGlobe
        class="w-5 h-5 text-gray-500 hover:text-gray-800 dark:text-gray-400 hover:dark:text-gray-200"
      />
    </button>

    <!-- Dropdown -->
    <div
      v-if="isOpen"
      class="absolute right-0 w-48 rounded-lg bg-white dark:bg-gray-900 shadow-lg border dark:border-gray-800 z-50"
      role="menu"
      @keydown.esc="closeMenu()"
    >
      <ul class="text-sm">
        <!-- Idioma -->
        <li
          class="px-4 py-2 text-gray-500 dark:text-gray-400 uppercase text-xs"
        >
          {{ $t("dropdownMenu.lang.title") }}
        </li>

        <li
          tabindex="0"
          class="dropdown-item"
          :class="{ 'dropdown-item--selected': locale === 'pt' }"
          @click="changeLang('pt')"
        >
          🇧🇷 {{ $t("dropdownMenu.lang.pt") }}
        </li>

        <li
          tabindex="0"
          class="dropdown-item"
          :class="{ 'dropdown-item--selected': locale === 'en' }"
          @click="changeLang('en')"
        >
          🇺🇸 {{ $t("dropdownMenu.lang.en") }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";
import { useTheme } from "@/composables/useTheme";

const { theme, toggleTheme } = useTheme();
const { locale, setLocale } = useI18n();

const isOpen = ref(false);
const menuRef = ref<HTMLElement | null>(null);
const triggerRef = ref<HTMLButtonElement | null>(null);

const openMenu = async () => {
  isOpen.value = true;
};

const closeMenu = ({ restoreFocus = true } = {}) => {
  isOpen.value = false;
  if (restoreFocus) {
    triggerRef.value?.focus();
  }
};

const toggleMenu = () => {
  isOpen.value ? closeMenu() : openMenu();
};

const changeTheme = (value: "light" | "dark") => {
  if (theme.value !== value) toggleTheme();
  closeMenu();
};

const changeLang = (value: "pt" | "en") => {
  setLocale(value);
  closeMenu();
};

const handleClickOutside = (event: MouseEvent) => {
  if (!menuRef.value) return;
  if (!menuRef.value.contains(event.target as Node)) {
    closeMenu({ restoreFocus: false });
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>
