<template>
  <div class="flex min-h-screen">
    <MenuLateral :empresas="empresas" />
    <main class="flex-1 p-6">
      <NuxtPage /> <!-- aqui será renderizado o conteúdo da rota atual -->
    </main>
  </div>
</template>

<script setup>
import MenuLateral from '@/components/MenuLateral.vue'

const empresas = [
  { id: 'empresa-1', nome: 'Empresa 1' },
  { id: 'empresa-2', nome: 'Empresa 2' },
  { id: 'empresa-3', nome: 'Empresa 3' },
]
</script>
