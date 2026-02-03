<template>
  <div>
    <div
      class="flex items-center justify-center rounded-full transition-all duration-300 mb-1"
      :class="unlocked ? 'opacity-100 scale-100' : 'opacity-40 grayscale'"
      :style="{
        width: `${size - stroke * 4}px`,
        height: `${size - stroke * 4}px`
      }"
    >
      <slot />
    </div>

    <div class="h-1 bg-gray-400/30 rounded-lg">
      <div class="h-1 bg-green-600 rounded-lg" :style="{width: `${progressBar}%`}"></div>
    </div>
  </div>
</template>

<script setup lang="ts">

interface Props {
  progress: number // 0–100
  size?: number // px
  stroke?: number
  unlocked?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  progress: 0,
  size: 56,
  stroke: 2,
  unlocked: false
})

const mounted = ref(false)

onMounted(() => {
  mounted.value = true
})

const progressBar = computed(() =>
  mounted.value ? Math.floor(props.progress) : 0
)
</script>
