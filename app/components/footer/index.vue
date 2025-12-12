<template>
  <footer
    class="bg-white dark:bg-gray-800 flex items-center px-4 py-2 relative"
  >
    <p
      class="absolute left-1/2 transform -translate-x-1/2 text-center text-gray-500 font-medium"
    >
      © 2025 Dinobergue Viana
    </p>

    <div class="ml-auto">
      <VoltarTopo />
    </div>
  </footer>
</template>

<script setup lang="ts">
import VoltarTopo from "../buttons/voltarTopo.vue";
</script>
