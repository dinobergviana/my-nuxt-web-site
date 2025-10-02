<template>
  <Header />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <NavbarLateral :navbarOptions="navbarItems" />
</template>

<script setup>
import Header from './components/global/header/header.vue';
import NavbarLateral from './components/NavbarLateral.vue';

const navbarItems = [
  { path: 'experiencias', label: 'Experiências' },
  { path: 'projetos', label: 'Projetos' },
  { path: 'formacao', label: 'Formação' },
  { path: 'carreira', label: 'Carreira' },
  { path: 'sobre-mim', label: 'Sobre mim' },
]
</script>
