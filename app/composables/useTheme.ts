import { ref, watch, onMounted } from "vue";

const theme = ref<"light" | "dark">("light");

export function useTheme() {
  const applyTheme = (value: "light" | "dark") => {
    const html = document.documentElement;

    if (value === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  };

  watch(theme, (newTheme) => {
    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  });

  onMounted(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    if (saved === "dark" || saved === "light") {
      theme.value = saved;
    }
    applyTheme(theme.value);
  });

  return {
    theme,
    toggleTheme: () => {
      theme.value = theme.value === "light" ? "dark" : "light";
    },
  };
}
