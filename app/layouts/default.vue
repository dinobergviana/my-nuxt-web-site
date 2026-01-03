<template>
  <div class="min-h-screen bg-white dark:bg-gray-900">
    <Header />

    <main
      class="mx-auto w-[90vw] max-w-[800px] h-[calc(100dvh-(70px+1rem))] flex flex-col"
    >
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/global/header/header.vue";
</script>
