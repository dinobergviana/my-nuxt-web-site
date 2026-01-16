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
        "Evolução do projeto original com foco em melhorar SEO, adotar tecnologias mais alinhadas ao mercado e implementar testes unitários. Desenvolvido com Vue 3, Nuxt e TypeScript, este projeto também foi utilizado como oportunidade de mentoria, auxiliando no desenvolvimento técnico e profissional do meu irmão.",
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
