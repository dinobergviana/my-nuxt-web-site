import { mount } from "@vue/test-utils";
import { describe, it, expect, beforeEach } from "vitest";
import Experiencias from "./index.vue";

describe("Seção Experiencias", () => {
  let wrapper: ReturnType<typeof mount>;

  beforeEach(() => {
    wrapper = mount(Experiencias);
  });

  it("renderiza corretamente o componente", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('exibe o título principal "experiências"', () => {
    const title = wrapper.find("h2");
    expect(title.exists()).toBe(true);
    expect(title.text()).toBe("experiências");
  });

  it("renderiza todas as experiências profissionais", () => {
    const companies = ["Enjoei", "Educacros", "Warren Investimentos", "BoxTi"];
    companies.forEach((nome) => {
      expect(wrapper.text()).toContain(nome);
    });
  });

  it("exibe cargos e períodos de cada experiência", () => {
    const expectedTexts = [
      "Desenvolvedor Frontend",
      "Desenvolvedor",
      "Mai 2024 - Mai 2025",
      "Set 2022 - Abr 2024",
      "Jan 2022 - Ago 2022",
      "Mar 2021- Dez 2021",
    ];

    expectedTexts.forEach((texto) => {
      expect(wrapper.text()).toContain(texto);
    });
  });

  it("exibe as tecnologias usadas em cada experiência", () => {
    const tecnologies = [
      "Vue.js",
      "Vuex",
      "Typescript",
      "Bootstrap Vue",
      "Node.js",
      "PHP",
      "MySQL",
    ];
    tecnologies.forEach((tech) => {
      expect(wrapper.text()).toContain(tech);
    });
  });

  it("mantém a estrutura HTML e classes conforme esperado (snapshot)", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("possui classes principais de layout", () => {
    const section = wrapper.find("section");
    expect(section.classes()).toContain("grid");
    expect(section.classes()).toContain("min-h-screen");
  });

  it("usa classes de modo escuro corretamente", () => {
    const elementsWithDarkMode = wrapper.findAll('[class*="dark:"]');
    expect(elementsWithDarkMode.length).toBeGreaterThan(0);
  });
});
