<template>
  <nav class="w-64 p-4 h-screen">
    <h2 class="font-bold mb-4">Empresas</h2>
    <ul class="space-y-2">
      <li v-for="empresa in empresas" :key="empresa.id">
        <NuxtLink
          :to="`/experiencias/${empresa.id}`"
          class="text-blue-600 hover:underline"
        >
          {{ empresa.nome }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
defineProps({
  empresas: Array
})
</script>
