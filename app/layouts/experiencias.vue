<template>
  <div class="flex min-h-screen">
    <MenuLateral :empresas="empresas" />
    <main class="p-3 bg-gray-900 w-full text-white">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup>
import { onUnmounted } from "vue"
import { useSidebar } from '@/stores/useSidebar'

import MenuLateral from '@/components/MenuLateral.vue'

const empresas = [
  { id: 'bigdata', nome: 'Big Data Health' },
  { id: 'enjoei', nome: 'Enjoei' },
  { id: 'educacross', nome: 'Educacross' },
  { id: 'warren', nome: 'Warren' },
  { id: 'boxti', nome: 'BoxTi' },
]

const sidebar = useSidebar()

onUnmounted(() => {
  sidebar.close()
})
</script>
