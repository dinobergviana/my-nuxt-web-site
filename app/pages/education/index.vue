<template>
  <section class="mt-5 w-full">
    <!-- FORMAÇÃO ACADEMINCA -->
    <div class="mb-10">
      <h2 class="text-xl font-semibold dark:text-white mb-4">
        Formação acadêmica
      </h2>

      <div
        class="flex items-center md:gap-5 border-b dark:border-gray-600 pb-5 mb-5"
      >
        <div>
          <img
            src="/images/uni-dom-bosco.jpg"
            alt="Intituição de ensino"
            class="w-[110px] h-[70px] object-cover rounded-full shadow-md hidden md:block"
          />
        </div>
        <div class="text-justify">
          <h2 class="font-semibold dark:text-white mb-1">
            Análise e Desenvolvimento de sistemas
          </h2>
          <p class="text-sm text-gray-700 dark:text-gray-200 mb-1">
            Graduação voltada ao desenvolvimento de sistemas, lógica de
            programação, arquitetura de sistemas, bancos de dados e boas
            práticas de engenharia de software.
          </p>

          <span class="text-xs text-green-600 dark:text-green-500"
            >Finalizado</span
          >

          <span class="text-sm leading-none text-gray-700 dark:text-gray-400">
            &bull;
          </span>
          <span class="font-normal text-xs text-gray-500 dark:text-gray-200"
            >07/2023 - 12/2025</span
          >
        </div>
      </div>

      <div class="flex items-center md:gap-5">
        <div>
          <img
            src="/images/logo_ufmg.png"
            alt="Intituição de ensino"
            class="w-[110px] h-[70px] object-cover rounded-full shadow-md hidden md:block"
          />
        </div>
        <div class="text-justify">
          <h2 class="font-semibold dark:text-white mb-1">
            Música - Violão Clássico
          </h2>
          <p class="text-sm text-gray-700 dark:text-gray-200 mb-1">
            Curso voltado ao estudo da linguagem musical, teoria, performance,
            percepção sonora e processos criativos, integrando técnica,
            expressão artística e conhecimento histórico.
          </p>

          <span class="text-xs text-green-600 dark:text-green-500"
            >Finalizado</span
          >
          <span class="text-sm leading-none text-gray-700 dark:text-gray-400">
            &bull;
          </span>
          <span class="font-normal text-xs text-gray-500 dark:text-gray-200"
            >03/2015 - 07/2019</span
          >
        </div>
      </div>
    </div>

    <div class="pb-5">
      <h2 class="text-xl font-semibold dark:text-white mb-4">Cursos</h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Card 1 -->
        <div
          class="border dark:border-gray-600 bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 flex flex-col gap-4"
        >
          <img
            src="/images/curso-dev.png"
            alt="Vue 2 Course"
            class="w-[70px] h-[70px] object-cover rounded-full shadow-md hidden md:block"
          />

          <div>
            <h3 class="text-lg font-semibold dark:text-white">Curso.dev</h3>
            <p class="text-sm text-gray-600 dark:text-gray-300 mt-1">
              Formação focada em fundamentos de desenvolvimento de software,
              abordando JavaScript, Node.js, backend, arquitetura, testes,
              CI/CD, boas práticas de código e muito mais.
            </p>
          </div>

          <div class="flex flex-wrap gap-2 mt-auto">
            <span
              class="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 dark:text-gray-200"
            >
              Em andamento
            </span>
            <span
              class="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 dark:text-gray-200"
            >
              Felipe Deschamps
            </span>
          </div>
        </div>

        <div
          class="border dark:border-gray-600 bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 flex flex-col gap-4"
        >
          <img
            src="/images/ts-logo.png"
            alt="Typescript Course"
            class="w-[70px] h-[70px] object-cover rounded-full shadow-md hidden md:block"
          />

          <div>
            <h3 class="text-lg font-semibold dark:text-white">TypeScript</h3>
            <p class="text-sm text-gray-600 dark:text-gray-300 mt-1">
              Curso voltado ao uso de TypeScript para aumentar a segurança e
              escalabilidade do código JavaScript por meio de tipagem estática.
            </p>
          </div>

          <div class="flex flex-wrap gap-2 mt-auto">
            <span
              class="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 dark:text-gray-200"
            >
              40h
            </span>
            <span
              class="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 dark:text-gray-200"
            >
              02/2022
            </span>
            <span
              class="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 dark:text-gray-200"
            >
              Alura
            </span>
          </div>
        </div>

        <div
          class="border dark:border-gray-600 bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 flex flex-col gap-4"
        >
          <img
            src="/images/vue-logo.png"
            alt="Logo do curso de Vue 2"
            class="w-[70px] h-[70px] object-cover rounded-full shadow-md hidden md:block"
          />

          <div>
            <h3 class="text-lg font-semibold dark:text-white">Vue.js 2</h3>
            <p class="text-sm text-gray-600 dark:text-gray-300 mt-1">
              Curso focado no desenvolvimento de interfaces reativas utilizando
              Vue 2, abordando componentes, diretivas, estado e boas práticas no
              front-end.
            </p>
          </div>

          <div class="flex flex-wrap gap-2 mt-auto">
            <span
              class="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 dark:text-gray-200"
            >
              40h
            </span>
            <span
              class="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 dark:text-gray-200"
            >
              01/2022
            </span>
            <span
              class="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 dark:text-gray-200"
            >
              Alura
            </span>
          </div>
        </div>

        <div
          class="border dark:border-gray-600 bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 flex flex-col gap-4"
        >
          <img
            src="/images/fullstack-logo.png"
            alt="Fullstack Course"
            class="w-[70px] h-[70px] object-cover rounded-full shadow-md hidden md:block"
          />

          <div>
            <h3 class="text-lg font-semibold dark:text-white">
              Desenvolvimento Fullstack
            </h3>
            <p class="text-sm text-gray-600 dark:text-gray-300 mt-1">
              Formação completa em desenvolvimento web, utilizando Node.js,
              MySQL, HTML, CSS, JavaScript, React e MVC para criação de
              aplicações fullstack.
            </p>
          </div>

          <div class="flex flex-wrap gap-2 mt-auto">
            <span
              class="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 dark:text-gray-200"
            >
              6 meses
            </span>
            <span
              class="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 dark:text-gray-200"
            >
              07/2020 – 01/2021
            </span>
            <span
              class="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 dark:text-gray-200"
            >
              Digital House
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
