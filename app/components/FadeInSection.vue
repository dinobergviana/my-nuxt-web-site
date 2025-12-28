<script setup lang="ts">
import { useInView } from '@/composables/useInView'

const { el, isVisible } = useInView()
</script>

<template>
  <div
    ref="el"
    class="transition-all duration-700 ease-out"
    :class="isVisible
      ? 'opacity-100 translate-y-0'
      : 'opacity-0 translate-y-8'"
  >
    <slot />
  </div>
</template>
