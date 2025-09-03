<template>
  <div class="relative inline-block group">
    <slot name="content"></slot>

    <span
      class="absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-200 px-2 py-1 rounded text-sm whitespace-nowrap z-10"
      :class="[backgroundColor, textColor, positionClasses]"
    >
      {{ text }}
    </span>

  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps({
  tooltipPosition: {
    type: String as () => "top" | "right" | "bottom" | "left",
    default: "top",
  },
  backgroundColor: {
    type: String,
    default: "bg-black",
  },
  textColor: {
    type: String,
    default: "text-white",
  },
  text: {
    type: String,
    required: true,
  },
});

const positionClasses = computed(() => {
  switch (props.tooltipPosition) {
    case "right":
      return "top-1/2 left-full ml-2 -translate-y-1/2";
    case "bottom":
      return "top-full left-1/2 mt-2 -translate-x-1/2";
    case "left":
      return "top-1/2 right-full mr-2 -translate-y-1/2";
    default:
      return "-top-8 left-1/2 -translate-x-1/2";
  }
});
</script>
