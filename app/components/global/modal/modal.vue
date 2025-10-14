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
          <header class="px-4 py-3 flex items-center justify-between mb-3 border-b border-gray-300 dark:border-gray-800 shadow-sm">
            <div class="text-xl font-semibold text-gray-700 dark:text-gray-300">
              <slot name="modal-title">
                <h2>
                  Título do modal
                </h2>
              </slot>
            </div>

            <button type="button" class="px-2 text-gray-500 hover:text-gray-600 dark:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-400 rounded-md" @click="handleCloseModal">
              X
            </button>
          </header>

          <!-- Corpo -->
          <div class="p-4 text-gray-700 dark:text-gray-300">
            <slot name="modal-content">
              <span>Conteúdo do modal...</span>
            </slot>
          </div>
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
  },
  hasFooter: {}
})

const emit = defineEmits<{
  (e: 'close-modal'): void
}>()

function handleCloseModal() {
  emit('close-modal')
}

</script>