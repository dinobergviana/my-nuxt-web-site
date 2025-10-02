<template>
  
  <NuxtPage />
</template>

<script setup lang="ts">
import { useTheme } from "@/composables/useTheme";

const { theme, toggleTheme } = useTheme();

const { locale, setLocale } = useI18n();

const selectedLang = ref(locale.value);
</script>
