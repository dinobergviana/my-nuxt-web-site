<template>
  <section class="mt-5">
    <h2 class="text-xl font-semibold dark:text-white mb-4">
      Minhas experiências
    </h2>
    <ExperiencesNavBar class="mb-4" />
    <NuxtPage />
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  redirect: "/experiences/big-data-health",
});
</script>
