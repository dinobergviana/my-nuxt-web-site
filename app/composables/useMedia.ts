import { ref, onMounted, onUnmounted, computed } from "vue";

// Mesmos valores do Tailwind (default config)
const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

export function useMedia() {
  const width = ref<number>(0);

  const updateWidth = () => {
    width.value = window.innerWidth;
  };

  onMounted(() => {
    if (process.client) {
      updateWidth();
      window.addEventListener("resize", updateWidth);
    }
  });

  onUnmounted(() => {
    if (process.client) {
      window.removeEventListener("resize", updateWidth);
    }
  });

  const isSm = computed(() => width.value >= BREAKPOINTS.sm);
  const isMd = computed(() => width.value >= BREAKPOINTS.md);
  const isLg = computed(() => width.value >= BREAKPOINTS.lg);
  const isXl = computed(() => width.value >= BREAKPOINTS.xl);
  const is2xl = computed(() => width.value >= BREAKPOINTS["2xl"]);

  const currentBreakpoint = computed(() => {
    if (width.value >= BREAKPOINTS["2xl"]) return "2xl";
    if (width.value >= BREAKPOINTS.xl) return "xl";
    if (width.value >= BREAKPOINTS.lg) return "lg";
    if (width.value >= BREAKPOINTS.md) return "md";
    if (width.value >= BREAKPOINTS.sm) return "sm";
    return "xs";
  });

  return {
    width,
    currentBreakpoint,
    isSm,
    isMd,
    isLg,
    isXl,
    is2xl,
  };
}
