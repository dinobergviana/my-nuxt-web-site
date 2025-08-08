import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Hero from "@/components/hero/hero.vue"; // ajuste o caminho conforme o seu projeto
import {
  PhLinkedinLogo,
  PhGithubLogo,
  PhWhatsappLogo,
} from "@phosphor-icons/vue";

describe("Hero component", () => {
  const wrapper = mount(Hero);

  it("renderiza o título principal corretamente", () => {
    expect(wrapper.text()).toContain("Olá, eu sou Dinobergue Viana");
  });

  it("renderiza o subtítulo corretamente", () => {
    expect(wrapper.text()).toContain("Programador");
  });

  it("tem links corretos para as redes sociais", () => {
    const links = wrapper.findAll("a.media-link");
    expect(links).toHaveLength(3);

    expect(links[0]?.attributes("href")).toBe(
      "https://www.linkedin.com/in/dinobergue-viana-28574218b/"
    );
    expect(links[1]?.attributes("href")).toBe(
      "https://github.com/dinobergviana"
    );
    expect(links[2]?.attributes("href")).toBe(
      "https://api.whatsapp.com/send?phone=5586998055574"
    );
  });

  it("links abrem em nova aba (target='_blank')", () => {
    const links = wrapper.findAll("a.media-link");
    links.forEach((link) => {
      expect(link.attributes("target")).toBe("_blank");
    });
  });

  it("renderiza os ícones do Phosphor corretamente", () => {
    // Verifica se os componentes foram renderizados
    expect(wrapper.findComponent(PhLinkedinLogo).exists()).toBe(true);
    expect(wrapper.findComponent(PhGithubLogo).exists()).toBe(true);
    expect(wrapper.findComponent(PhWhatsappLogo).exists()).toBe(true);
  });
});
