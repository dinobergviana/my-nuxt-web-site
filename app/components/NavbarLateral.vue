<template>
  <div class="bg-gray-900 border-r border-gray-700">
    <!-- Overlay (fundo escuro) -->
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
      @click="navbar.close"
    ></div>

    <nav
      :class="[
        'bg-gray-900 h-screen fixed top-0 right-0 z-50 transform transition-transform duration-300 ease-in-out',
        isOpen ? 'translate-x-0' : 'translate-x-full',
        'w-[80%] md:w-64 md:translate-x-0 md:relative'
      ]"
    >
      <div class="flex items-center justify-end md:hidden">
        <button
          class="my-2.5 mr-2 px-2 h-8 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          @click="navbar.toggle"
        >
          <IconPhX />
        </button>
      </div>


      <!-- Lista -->
      <ul class="md:pt-4 space-y-2">
        <li
          v-for="option in navbarOptions"
          :key="option.path"
          class="hover:bg-gray-700 text-gray-400 hover:text-white mx-2 rounded-md"
        >
          <NuxtLink :to="`/${option.path}`" active-class="rounded-md bg-gray-800 text-white" class="block px-2 py-1">
            {{ option.label }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { watch } from "vue";
import { useNavbar } from '@/stores/useNavbar'

interface Option {
  label: string,
  path: string
}

defineProps<{
  navbarOptions: Option[];
}>();

const navbar = useNavbar()

const isOpen = ref(false);

watch(() => navbar.isOpen, (newVal) => {
  isOpen.value = newVal
})
</script>
