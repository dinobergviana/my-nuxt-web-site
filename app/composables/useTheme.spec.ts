import { describe, it, expect, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import { defineComponent, h, nextTick } from "vue";
import { useTheme } from "@/composables/useTheme";

describe("useTheme composable (via test component)", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.className = "";
  });

  function mountHook(callback: (ctx: ReturnType<typeof useTheme>) => void) {
    return mount(
      defineComponent({
        setup() {
          const ctx = useTheme();
          callback(ctx);
          return () => h("div");
        },
      }),
    );
  }

  it("inicia com tema 'light'", () => {
    mountHook(({ theme }) => {
      expect(theme.value).toBe("light");
    });
  });

  it("alterna entre light e dark", async () => {
    let toggle: () => void;
    let themeValue: any;

    mountHook(({ toggleTheme, theme }) => {
      toggle = toggleTheme;
      themeValue = theme;
    });

    toggle!();
    await nextTick();
    expect(themeValue.value).toBe("dark");

    toggle!();
    await nextTick();
    expect(themeValue.value).toBe("light");
  });

  it("aplica a classe 'dark' ao alternar para dark", async () => {
    let toggle: () => void;

    mountHook(({ toggleTheme }) => {
      toggle = toggleTheme;
    });

    toggle!();
    await nextTick();
    expect(document.documentElement.classList.contains("dark")).toBe(true);
  });

  it("alterna o tema corretamente", async () => {
    localStorage.setItem("theme", "light");

    let toggle: () => void;
    let currentTheme: Ref<"light" | "dark">;

    mountHook(({ toggleTheme, theme }) => {
      toggle = toggleTheme;
      currentTheme = theme;
    });

    await nextTick();

    toggle!();
    await nextTick();
    await nextTick();

    expect(currentTheme!.value).toBe("dark");
    expect(localStorage.getItem("theme")).toBe("dark");

    toggle!();
    await nextTick();
    await nextTick();

    expect(currentTheme!.value).toBe("light");
    expect(localStorage.getItem("theme")).toBe("light");
  });
});
