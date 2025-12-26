<template>
  <footer
    class="px-6 py-2 bg-white dark:bg-gray-800 flex items-center justify-between md:justify-end"
  >
    <div class="w-[100%] md:w-[50%] flex items-center justify-between">
      <p class="text-center text-gray-400 font-normal text-md">
        © 2025 Dinobergue Viana
      </p>

      <NuxtLink
        v-if="hasBackToTopButton"
        :href="backToTopPath"
        aria-label="Voltar para o topo"
        class="inline-block py-2 rounded-lg font-semibold text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
      >
        <span class="text-sm flex items-center gap-2">
          <IconPhArrowUp size="16" weight="bold" aria-hidden="true" />
          {{ $t("footer.backToTop") }}
        </span>
      </NuxtLink>
    </div>
  </footer>
</template>

<script lang="ts" setup>
const route = useRoute();

const hasBackToTopButton = computed(() => {
  return route.meta.hasBackToTopButton;
});

const backToTopPath = computed(() => {
  return route.meta.backToTopPath as string;
});
</script>
