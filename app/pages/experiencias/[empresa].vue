<script setup>
definePageMeta({
  layout: 'experiencias'
})

import { useRoute } from 'vue-router'

const route = useRoute()
const empresa = route.params.empresa

// Aqui você pode buscar dados da empresa via API
const dados = {
  'empresa-1': 'Conteúdo detalhado da Empresa 1',
  'empresa-2': 'Conteúdo detalhado da Empresa 2',
  'empresa-3': 'Conteúdo detalhado da Empresa 3'
}

const conteudo = dados[empresa] || 'Empresa não encontrada'
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">{{ empresa }}</h1>
    <p>{{ conteudo }}</p>
  </div>
</template>
