export const PROJECTS_PT = [
  {
    id: 1,
    name: "Website",
    status: "finalizado",
    label: "Finalizado",
    show_github_link: false,
    github_url: "https://github.com/dinobergviana/my-nuxt-web-site",
    has_access_link: false,
    details: {
      description:
        "Projeto de portfólio desenvolvido para apresentar minhas habilidades como desenvolvedor frontend. Construído com Vue 2, foi meu primeiro projeto publicado do zero, servindo como base de aprendizado prático. Apesar de limitações como SEO e ausência de testes unitários, foi fundamental para consolidar conceitos e boas práticas iniciais.",
      stacks: ["Vue"],
    },
  },
  {
    id: 2,
    name: "Migração do Website",
    status: "finalizado",
    label: "Finalizado",
    show_github_link: false,
    github_url: "https://github.com/dinobergviana/my-nuxt-web-site",
    has_access_link: false,
    access_link: null,
    details: {
      description:
        "Evolução do projeto original com foco em melhorar SEO, adotar tecnologias mais alinhadas ao mercado e implementar testes unitários. Desenvolvido com tecnologias modernas, este projeto também foi utilizado como oportunidade de mentoria, auxiliando no desenvolvimento técnico e profissional do meu irmão.",
      results: {
        summary: [
          "Após a migração do website, foi possível observar melhorias significativas nos indicadores de <span class='font-semibold'>Acessibilidade</span> e <span class='font-semibold'>SEO</span>, mantendo a <span class='font-semibold'>Performance</span> máxima (100) já alcançada anteriormente.",
          "O comparativo abaixo mostra claramente a evolução entre o estado anterior e o atual do site, medida através do Google PageSpeed Insights.",
        ],
        keyImprovements: {
          title: "Principais melhorias alcançadas",
          highlights: [
            "<span class='font-semibold'>Acessibilidade</span>: aumento de <span class='font-semibold'>83</span> para <span class='font-semibold'>91</span>;",
            "<span class='font-semibold'>SEO</span>: aumento de <span class='font-semibold'>75</span> para <span class='font-semibold'>100</span>;",
            "<span class='font-semibold'>Performance</span>: mantida em <span class='font-semibold'>100</span>;",
          ],
          actionsTaken: [
            {
              title: "Acessibilidade",
              steps: [
                "Reestruturação do HTML com foco em semântica correta (uso adequado de header, main, section, nav, entre outros)",
                "Inclusão de atributos de acessibilidade como aria-label e alt em elementos visuais e interativos",
                "Melhoria na hierarquia de títulos e na navegação por leitores de tela",
              ],
              conclusion:
                "Essas mudanças tornam o site mais acessível para usuários com deficiências visuais e também melhor interpretado por mecanismos de busca.",
            },
            {
              title: "SEO",
              steps: [
                "Uso consistente de HTML semântico, facilitando o entendimento do conteúdo pelos crawlers",
                "Ajustes na configuração do nuxt.config.ts, incluindo metadados essenciais para indexação",
                "Melhor definição de títulos, descrições e estrutura da página",
              ],
            },
          ],
        },
        conclusion: [
          "Mesmo com ajustes simples e bem direcionados, a migração foi capaz de gerar um impacto positivo direto na qualidade, acessibilidade e indexação do site, que eram alguns dos principais objetivos do projeto.",
          "O resultado é um website mais inclusivo, melhor ranqueado e tecnicamente mais sólido, sem comprometer a performance.",
          "Como próximo passo, o foco passa a ser a evolução contínua da Acessibilidade, com o objetivo de alcançar 100% de conformidade, reforçando ainda mais o compromisso com inclusão, boas práticas e qualidade técnica.",
        ],
      },
      stacks: ["Vue 3", "Nuxt 4", "Typescript", "Vitest", "Tailwind"],
    },
  },
  {
    id: 3,
    name: "GC Manager",
    status: "em andamento",
    label: "Em andamento",
    show_github_link: true,
    github_url:
      "https://github.com/dinobergviana/https://github.com/dinobergviana/gc-manager",
    has_access_link: false,
    access_link: null,
    details: {
      description:
        "Aplicação desenvolvida com base nos estudos do curso.dev, voltada para a gestão de pequenos grupos da Igreja Angelim. O projeto busca resolver desafios organizacionais e administrativos, utilizando uma stack moderna com foco em escalabilidade, testes automatizados e boas práticas de desenvolvimento.",
      stacks: ["Next", "React", "Node", "Jest", "Postgres", "Docker"],
    },
  },
];

export const PROJECTS_EN = [
  {
    id: 1,
    name: "Website",
    status: "completed",
    label: "Completed",
    show_github_link: false,
    github_url: "https://github.com/dinobergviana/my-nuxt-web-site",
    has_access_link: false,
    details: {
      description:
        "Portfolio project developed to showcase my frontend development skills. Built with Vue 2, it was my first project published from scratch and served as a practical learning foundation. Despite limitations such as SEO issues and the absence of unit tests, it was essential for consolidating core concepts and early best practices.",
      stacks: ["Vue"],
    },
  },
  {
    id: 2,
    name: "Website Migration",
    status: "completed",
    label: "Completed",
    show_github_link: false,
    github_url: "https://github.com/dinobergviana/my-nuxt-web-site",
    has_access_link: false,
    access_link: null,
    details: {
      description:
        "Evolution of the original project focused on improving SEO, adopting technologies more aligned with market standards, and implementing unit tests. This project was also used as a mentoring opportunity, supporting my brother’s technical and professional growth.",
      results: {
        summary: [
          "After the website migration, it was possible to observe significant improvements in the <span class='font-semibold'>Accessibility</span> and <span class='font-semibold'>SEO</span> metrics, while maintaining the maximum <span class='font-semibold'>Performance</span> score (100) previously achieved.",
          "The comparison below clearly shows the evolution between the previous and current state of the website, measured using Google PageSpeed Insights.",
        ],
        keyImprovements: {
          title: "Key improvements achieved",
          highlights: [
            "<span class='font-semibold'>Accessibility</span>: increased from <span class='font-semibold'>83</span> to <span class='font-semibold'>91</span>;",
            "<span class='font-semibold'>SEO</span>: increased from <span class='font-semibold'>75</span> to <span class='font-semibold'>100</span>;",
            "<span class='font-semibold'>Performance</span>: maintained at <span class='font-semibold'>100</span>;",
          ],
          actionsTaken: [
            {
              title: "Accessibility",
              steps: [
                "HTML restructuring with a focus on correct semantic usage (proper use of header, main, section, nav, among others)",
                "Addition of accessibility attributes such as aria-label and alt to visual and interactive elements",
                "Improved heading hierarchy and navigation for screen readers",
              ],
              conclusion:
                "These changes make the website more accessible for users with visual impairments and also easier to interpret by search engines.",
            },
            {
              title: "SEO",
              steps: [
                "Consistent use of semantic HTML, making content easier for crawlers to understand",
                "Adjustments to the nuxt.config.ts configuration, including essential metadata for indexing",
                "Improved definition of titles, descriptions, and overall page structure",
              ],
            },
          ],
        },
        conclusion: [
          "Even with simple and well-targeted adjustments, the migration was able to generate a direct positive impact on the quality, accessibility, and indexing of the website, which were some of the main goals of the project. The result is a more inclusive website, better ranked in search engines, and technically more solid, without compromising performance.",
          "As a next step, the focus shifts to the continuous improvement of Accessibility, with the goal of reaching 100% compliance, further reinforcing the commitment to inclusion, best practices, and technical quality.",
        ],
      },

      stacks: ["Vue 3", "Nuxt 4", "TypeScript", "Vitest", "Tailwind"],
    },
  },
  {
    id: 3,
    name: "GC Manager",
    status: "in progress",
    label: "In progress",
    show_github_link: true,
    github_url: "https://github.com/dinobergviana/gc-manager",
    has_access_link: false,
    access_link: null,
    details: {
      description:
        "Application developed based on studies from the curso.dev program, aimed at managing small groups at Igreja Angelim. The project addresses organizational and administrative challenges using a modern stack, with a focus on scalability, automated testing, and development best practices.",
      stacks: ["Next.js", "React", "Node.js", "Jest", "PostgreSQL", "Docker"],
    },
  },
];
