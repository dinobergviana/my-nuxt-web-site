<template>
  <div class="px-4 bg-gray-900">
    <!-- Botão abrir (aparece só no mobile) -->
    <button
      class="md:hidden p-2 mx-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
      @click="isOpen = true"
    >
      <IconPhList />
    </button>

    <!-- Overlay (fundo escuro) -->
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
      @click="isOpen = false"
    ></div>

    <!-- Menu lateral -->
    <nav
      :class="[
        'bg-gray-800 h-screen fixed top-0 left-0 z-50 transform transition-transform duration-300 ease-in-out',
        isOpen ? 'translate-x-0' : '-translate-x-full',
        'w-[80%] md:w-64 md:translate-x-0 md:relative'
      ]"
    >
      <!-- Botão fechar (só no mobile) -->
      <div class="flex justify-end">
        <button
          class="px-2 h-8 bg-gray-700 text-white rounded-md md:hidden focus:outline-none focus:ring-2 focus:ring-gray-500"
          @click="isOpen = false"
        >
          <IconPhX />
        </button>
      </div>


      <!-- Lista -->
      <ul class="mt-4 space-y-2">
        <li
          v-for="empresa in empresas"
          :key="empresa.id"
          class="hover:bg-gray-700 text-gray-400 hover:text-white px-4 py-1 rounded-md"
        >
          <NuxtLink :to="`/experiencias/${empresa.id}`" class="block">
            {{ empresa.nome }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Tooltip from "./global/tooltip/tooltip.vue";

defineProps({
  empresas: Array,
});

// estado para abrir/fechar
const isOpen = ref(false);
</script>
