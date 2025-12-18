<template>
  <a
    :href="resumePath"
    download
    class="inline-block mt-4 px-2 py-1 border border-gray-300 hover:bg-gray-300 rounded-lg font-semibold text-gray-600 hover:text-gray-700 dark:hover:bg-gray-500 dark:border-gray-700 dark:text-gray-200 dark:bg-gray-900"
  >
    <span class="text-sm dar:text-gray-300">{{
      $t("downloadResumeButton")
    }}</span>
  </a>
</template>

<script lang="ts" setup>
const { locale } = useI18n();

const resumePath = ref(`/dinobergue-viana-resume-${locale.value}.pdf`);

watch(locale, () => {
  resumePath.value = `/dinobergue-viana-resume-${locale.value}.pdf`;
});
</script>
