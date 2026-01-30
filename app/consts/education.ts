export const EDUCATION_PT: EducationItem[] = [
  {
    id: "ads",
    title: "Análise e Desenvolvimento de Sistemas",
    institutionImage: "/images/uni-dom-bosco.jpg",
    description:
      "Graduação voltada ao desenvolvimento de sistemas, lógica de programação, arquitetura de sistemas, bancos de dados e boas práticas de engenharia de software.",
    status: "Finalizado",
    period: "07/2023 - 12/2025",
  },
  {
    id: "music",
    title: "Música - Violão Clássico",
    institutionImage: "/images/logo_ufmg.png",
    description:
      "Curso voltado ao estudo da linguagem musical, teoria, performance, percepção sonora e processos criativos, integrando técnica, expressão artística e conhecimento histórico.",
    status: "Finalizado",
    period: "03/2015 - 07/2019",
  },
];

const TAG_BASE_CLASSES =
  "px-2 py-1 text-xs font-semibold rounded-md bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200";
const TAG_STATUS_COMPLETED_CLASSES =
  "bg-green-300 text-green-900 dark:bg-green-800 dark:text-white";
const TAG_STATUS_IN_PROGRESS_CLASSES =
  "bg-orange-200 dark:bg-orange-400 dark:text-white";

export const EDUCATION_EN: EducationItem[] = [
  {
    id: "ads",
    title: "Systems Analysis and Development",
    institutionImage: "/images/uni-dom-bosco.jpg",
    description:
      "Undergraduate degree focused on systems development, programming logic, system architecture, databases, and software engineering best practices.",
    status: "Completed",
    period: "07/2023 - 12/2025",
  },
  {
    id: "music",
    title: "Music – Classical Guitar",
    institutionImage: "/images/logo_ufmg.png",
    description:
      "Degree focused on the study of musical language, theory, performance, sound perception, and creative processes, integrating technique, artistic expression, and historical knowledge.",
    status: "Completed",
    period: "03/2015 - 07/2019",
  },
];

export const COURSES_PT: CourseItem[] = [
  {
    id: "curso-dev",
    title: "Curso.dev",
    image: "/images/curso-dev.png",
    description:
      "Formação focada em fundamentos de desenvolvimento de software, abordando JavaScript, Node.js, backend, arquitetura, testes, CI/CD, boas práticas de código e muito mais.",
    tags: [
      {
        label: "Em andamento",
        classes: [TAG_BASE_CLASSES, TAG_STATUS_IN_PROGRESS_CLASSES],
      },
      {
        label: "Felipe Deschamps",
        classes: [TAG_BASE_CLASSES],
      },
    ],
  },
  {
    id: "typescript",
    title: "TypeScript",
    image: "/images/ts-logo.png",
    description:
      "Curso voltado ao uso de TypeScript para aumentar a segurança e escalabilidade do código JavaScript por meio de tipagem estática.",
    tags: [
      {
        label: "Finalizado",
        classes: [TAG_BASE_CLASSES, TAG_STATUS_COMPLETED_CLASSES],
      },
      {
        label: "40h",
        classes: [TAG_BASE_CLASSES],
      },
      {
        label: "02/2022",
        classes: [TAG_BASE_CLASSES],
      },
      {
        label: "Alura",
        classes: [TAG_BASE_CLASSES],
      },
    ],
  },
  {
    id: "vue-2",
    title: "Vue.js 2",
    image: "/images/vue-logo.png",
    description:
      "Curso focado no desenvolvimento de interfaces reativas utilizando Vue 2, abordando componentes, diretivas, estado e boas práticas no front-end.",
    tags: [
      {
        label: "Finalizado",
        classes: [TAG_BASE_CLASSES, TAG_STATUS_COMPLETED_CLASSES],
      },
      {
        label: "40h",
        classes: [TAG_BASE_CLASSES],
      },
      {
        label: "01/2022",
        classes: [TAG_BASE_CLASSES],
      },
      {
        label: "Alura",
        classes: [TAG_BASE_CLASSES],
      },
    ],
  },
  {
    id: "fullstack",
    title: "Desenvolvimento Fullstack",
    image: "/images/fullstack-logo.png",
    description:
      "Formação completa em desenvolvimento web, utilizando Node.js, MySQL, HTML, CSS, JavaScript, React e MVC para criação de aplicações fullstack.",
    tags: [
      {
        label: "Finalizado",
        classes: [TAG_BASE_CLASSES, TAG_STATUS_COMPLETED_CLASSES],
      },
      { label: "6 meses", classes: [TAG_BASE_CLASSES] },
      {
        label: "07/2020 – 01/2021",
        classes: [TAG_BASE_CLASSES],
      },
      {
        label: "Digital House",
        classes: [TAG_BASE_CLASSES],
      },
    ],
  },
];

export const COURSES_EN: CourseItem[] = [
  {
    id: "curso-dev",
    title: "Curso.dev",
    image: "/images/curso-dev.png",
    description:
      "Program focused on software development fundamentals, covering JavaScript, Node.js, backend development, architecture, testing, CI/CD, code best practices, and more.",
    tags: [
      {
        label: "In progress",
        classes: [TAG_BASE_CLASSES, TAG_STATUS_IN_PROGRESS_CLASSES],
      },
      {
        label: "Felipe Deschamps",
        classes: [TAG_BASE_CLASSES],
      },
    ],
  },
  {
    id: "typescript",
    title: "TypeScript",
    image: "/images/ts-logo.png",
    description:
      "Course focused on using TypeScript to improve JavaScript code safety and scalability through static typing.",
    tags: [
      {
        label: "Completed",
        classes: [TAG_BASE_CLASSES, TAG_STATUS_COMPLETED_CLASSES],
      },
      { label: "40h", classes: [TAG_BASE_CLASSES] },
      { label: "02/2022", classes: [TAG_BASE_CLASSES] },
      { label: "Alura", classes: TAG_BASE_CLASSES },
    ],
  },
  {
    id: "vue-2",
    title: "Vue.js 2",
    image: "/images/vue-logo.png",
    description:
      "Course focused on building reactive interfaces using Vue 2, covering components, directives, state management, and front-end best practices.",
    tags: [
      {
        label: "Completed",
        classes: [TAG_BASE_CLASSES, TAG_STATUS_COMPLETED_CLASSES],
      },
      { label: "40h", classes: [TAG_BASE_CLASSES] },
      { label: "01/2022", classes: [TAG_BASE_CLASSES] },
      { label: "Alura", classes: [TAG_BASE_CLASSES] },
    ],
  },
  {
    id: "fullstack",
    title: "Fullstack Development",
    image: "/images/fullstack-logo.png",
    description:
      "Comprehensive web development program using Node.js, MySQL, HTML, CSS, JavaScript, React, and MVC architecture to build fullstack applications.",
    tags: [
      {
        label: "Completed",
        classes: [TAG_BASE_CLASSES, TAG_STATUS_COMPLETED_CLASSES],
      },
      { label: "6 months", classes: [TAG_BASE_CLASSES] },
      {
        label: "07/2020 – 01/2021",
        classes: [TAG_BASE_CLASSES],
      },
      {
        label: "Digital House",
        classes: [TAG_BASE_CLASSES],
      },
    ],
  },
];
