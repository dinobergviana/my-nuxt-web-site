<template>
  <div class="min-h-screen bg-white dark:bg-gray-900">
    <Header />
    <main
      class="container-default pt-header flex flex-col"
    >
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/global/header/header.vue'
</script>
