<template>
  <div>
    <h1 class="text-2xl md:text-4xl font-bold mb-4">{{ empresa }}</h1>
    <p>{{ conteudo }}</p>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'experiencias'
})

import { useRoute } from 'vue-router'

const route = useRoute()
const empresa = route.params.empresa

// Aqui você pode buscar dados da empresa via API
const dados = {
  'bigdata': 'Conteúdo detalhado da Empresa 1',
  'enjoei': 'Conteúdo detalhado da Empresa 2',
  'educacross': 'Conteúdo detalhado da Empresa 3',
  'warren': 'Conteúdo detalhado da Empresa 4',
  'boxti': 'Conteúdo detalhado da Empresa 5',
}

const conteudo = dados[empresa] || 'Empresa não encontrada'
</script>

