<template>
  <div class="flex min-h-screen flex-col bg-white dark:bg-gray-900">
    <Header />

    <main class="mx-auto flex h-[calc(100dvh-(70px+1rem))] w-[90vw] max-w-[800px] flex-col">
      <slot />
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/global/header/header.vue';
</script>
