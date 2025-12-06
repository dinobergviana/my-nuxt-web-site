import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Hero from "@/components/hero/hero.vue";

const globalComponentsMock = {
  IconPhLinkedinLogo: {
    template: "<svg></svg>",
  },
  IconPhGithubLogo: {
    template: "<svg></svg>",
  },
  IconPhWhatsappLogo: {
    template: "<svg></svg>",
  },
};

describe("Hero component", () => {
  const wrapper = mount(Hero, {
    global: {
      mocks: {
        $t: (msg: string) => {
          const translations: Record<string, string> = {
            welcome: "Olá, eu sou",
            role: "Programador",
          };
          return translations[msg] || msg;
        },
      },
      stubs: {
        DownloadResumeButton: {
          template: "<button>Download</button>",
        },
      },
    },
    components: globalComponentsMock,
  });

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
      "https://www.linkedin.com/in/dinobergue-viana-28574218b/",
    );
    expect(links[1]?.attributes("href")).toBe(
      "https://github.com/dinobergviana",
    );
    expect(links[2]?.attributes("href")).toBe(
      "https://api.whatsapp.com/send?phone=5586998055574",
    );
  });

  it("links abrem em nova aba (target='_blank')", () => {
    const links = wrapper.findAll("a.media-link");
    links.forEach((link) => {
      expect(link.attributes("target")).toBe("_blank");
    });
  });
});
