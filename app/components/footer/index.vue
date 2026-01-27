<template>
  <footer
    class="px-6 py-2 bg-white dark:bg-gray-900 text-center"
  >

      <span
        id="year"
        class="text-center text-gray-500 dark:text-gray-600 font-normal text-sm"
      >
        Copyright © 2025 - {{ currentYear }} &bull; <span>Dinobergue Viana</span> &bull; <span>Os projetos apresentados têm fins demonstrativos.</span>
      </span>

      <!-- <NuxtLink
        v-if="hasBackToTopButton"
        :href="backToTopPath"
        aria-label="Voltar para o topo"
        class="inline-block py-2 rounded-lg font-normal text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-500"
      >
        <span class="text-sm flex items-center gap-2">
          <IconPhArrowUp size="16" weight="bold" aria-hidden="true" />
          {{ $t("footer.backToTop") }}
        </span>
      </NuxtLink> -->

  </footer>
</template>

<script lang="ts" setup>
const currentYear = computed(() => {
  return new Date().getFullYear()
})
</script>
