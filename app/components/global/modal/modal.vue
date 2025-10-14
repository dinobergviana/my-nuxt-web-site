<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-300"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen"
        class="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50"
      >
        <div
          class="bg-white dark:bg-gray-900 rounded-xl shadow-lg w-[90%] md:w-[80%] max-w-5xl"
        >
          <!-- Header -->
          <header class="px-4 py-3 flex items-center justify-between mb-4 border-b border-gray-300 dark:border-gray-800 shadow-md">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white">
              Modal title
            </h2>

            <button type="button" class="p-1 bg-transparent text-gray-500 dark:text-gray-500" @click="handleCloseModal">
              X
            </button>
          </header>

          <!-- Corpo -->
          <div class="p-4 text-gray-700 dark:text-gray-300">
            <p>Conteúdo do modal...</p>
          </div>

          <!-- Footer -->
          <footer class="p-4 mt-6 flex justify-end gap-2">
            <button
              class="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700"
              @click="handleCloseModal"
            >
              Cancelar
            </button>
            <button
              class="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
            >
              Confirmar
            </button>
          </footer>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script lang="ts" setup>
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits<{
  (e: 'close-modal'): void
}>()

function handleCloseModal() {
  emit('close-modal')
}

</script>