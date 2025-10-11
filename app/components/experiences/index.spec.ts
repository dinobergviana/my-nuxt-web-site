import { mount } from "@vue/test-utils";
import { createI18n } from "vue-i18n";
import { describe, it, expect } from "vitest";
import Experiencias from "./index.vue";

function createI18nSetup(
  lang: "pt" | "en" = "pt",
  fallbackLang: "en" | "pt" = "en",
) {
  return createI18n({
    legacy: false,
    locale: lang,
    fallbackLocale: fallbackLang,
    messages: {
      pt: {
        experiences: {
          title: "experiências",
          enjoei: {
            role: "Desenvolvedor Frontend",
            period: "Set 2022 - Abr 2024",
            workedWith: "Trabalhei com: Vue 3, TypeScript e testes unitários",
          },
          educacross: {
            role: "Desenvolvedor Frontend",
            period: "Set 2022 - Abr 2024",
            workedWith: "Trabalhei com",
          },
          warren: {
            role: "Desenvolvedor - JR",
            period: "",
            workedWith: "Trabalhei com",
          },
          boxti: {
            role: "Desenvolvedor - Trainee",
            period: "",
            workedWith: "Trabalhei com",
          },
        },
      },
      en: {
        experiences: {
          title: "experiences",
          enjoei: {
            role: "Frontend Developer",
            period: "Set 2022 - Abr 2024",
            workedWith: "I worked with: Vue 3, TypeScript e testes unitários",
          },
          educacross: {
            role: "Frontend Developer",
            period: "Sep 2022 - Apr 2024 ",
            workedWith: "I worked with",
          },
          warren: {
            role: "Frontend Developer - JR",
            period: "Jan 2022 - Ago 2022",
            workedWith: "I worked with",
          },
          boxti: {
            role: "Trainee Developer",
            period: "Mar 2021- Dez 2021",
            workedWith: "I worked with",
          },
        },
      },
    },
  });
}

describe("Seção Experiencias", () => {
  it("renderiza com textos corretamente em português", () => {
    const i18n = createI18nSetup("pt", "en");
    const wrapper = mount(Experiencias, {
      global: {
        plugins: [i18n],
      },
    });

    expect(wrapper.find("h2").text()).toBe("experiências");
    expect(wrapper.text()).toContain("Desenvolvedor Frontend");
  });

  it("renderiza com textos corretamente em inglês", () => {
    const i18n = createI18nSetup("en", "pt");

    const wrapper = mount(Experiencias, {
      global: {
        plugins: [i18n],
      },
    });

    expect(wrapper.find("h2").text()).toBe("experiences");
    expect(wrapper.text()).toContain("Frontend Developer");
  });
});
