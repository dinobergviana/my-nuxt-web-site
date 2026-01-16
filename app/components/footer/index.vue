<template>
  <footer
    class="px-6 py-2 bg-white dark:bg-gray-800 flex items-center justify-between md:justify-end"
  >
    <div
      class="w-[100%] flex items-center justify-center md:justify-between flex-col-reverse md:flex-row"
    >
      <p
        class="text-center text-gray-500 dark:text-gray-400 font-normal text-sm"
      >
        © 2025 Dinobergue Viana
      </p>

      <NuxtLink
        v-if="hasBackToTopButton"
        :href="backToTopPath"
        aria-label="Voltar para o topo"
        class="inline-block py-2 rounded-lg font-normal text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-500"
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
