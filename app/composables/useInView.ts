import { ref, onMounted, onBeforeUnmount } from "vue";

export function useInView() {
  const el = ref<HTMLElement | null>(null);
  const isVisible = ref(false);

  let observer: IntersectionObserver;

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (!entry) return;

        if (entry.isIntersecting) {
          isVisible.value = true;
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    if (el.value) observer.observe(el.value);
  });

  onBeforeUnmount(() => observer?.disconnect());

  return { el, isVisible };
}
