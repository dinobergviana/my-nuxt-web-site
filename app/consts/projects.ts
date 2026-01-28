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
    status: "em andamento",
    label: "Em andamento",
    show_github_link: false,
    github_url: "https://github.com/dinobergviana/my-nuxt-web-site",
    has_access_link: false,
    access_link: null,
    details: {
      description:
        "Evolução do projeto original com foco em melhorar SEO, adotar tecnologias mais alinhadas ao mercado e implementar testes unitários. Desenvolvido com tecnologias modernas, este projeto também foi utilizado como oportunidade de mentoria, auxiliando no desenvolvimento técnico e profissional do meu irmão.",
      results: {
        summary: [
          "Após a migração do website, foi possível observar melhorias significativas nos indicadores de Acessibilidade e SEO, mantendo a Performance máxima (100) já alcançada anteriormente.",
          "O comparativo abaixo mostra claramente a evolução entre o estado anterior e o atual do site, medida através do Google PageSpeed Insights.",
        ],
        keyImprovements: {
          title: "Principais melhorias alcançadas",
          highlights: [
            "Acessibilidade: aumento de 83 para 90",
            "SEO: aumento de 75 para 100",
            "Performance: mantida em 100",
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
        ],
      },
      stacks: ["Vue 3", "Nuxt", "Typescript", "Vitest"],
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
    status: "in progress",
    label: "In progress",
    show_github_link: false,
    github_url: "https://github.com/dinobergviana/my-nuxt-web-site",
    has_access_link: false,
    access_link: null,
    details: {
      description:
        "Evolution of the original project focused on improving SEO, adopting technologies more aligned with market standards, and implementing unit tests. Developed with Vue 3, Nuxt, and TypeScript, this project was also used as a mentoring opportunity, supporting my brother’s technical and professional growth.",
      stacks: ["Vue 3", "Nuxt", "TypeScript", "Vitest"],
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
