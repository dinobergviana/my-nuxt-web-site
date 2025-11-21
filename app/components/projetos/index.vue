<template>
  <section
    class="grid border-t border-gray-300 dark:border-t dark:border-gray-700 md:grid-cols-2 py-8 px-4 md:py-11 md:px-24 text-gray-700 dark:bg-gray-800"
  >
    <div class="flex items-center justify-center mx-auto py-[80px]">
      <h2 class="dark:text-white text-5xl md:text-5xl font-bold m-0 px-4">
        {{ $t("projects.title") }}
      </h2>
    </div>

    <div class="dark:text-white px-4">
      <div class="mb-3 px-1">
        <h3 class="font-bold text-lg">{{ $t("projects.gc.title") }}</h3>
        <p class="text-gray-700 font-semibold dark:text-white">
          {{ $t("projects.gc.description") }}
        </p>
        <p class="dark:text-gray-300">Em construção</p>
        <p>
          <a
            href="https://github.com/dinobergviana/gc-manager"
            class="mb-4 text-blue-600 hover:text-sky-500 dark:text-yellow-500 dark:hover:text-yellow-600 ease-in"
            target="_blank"
            >{{ $t("projects.gc.repository") }}</a
          >
          <!-- <span class="text-gray-700 dark:text-white"> &bull;</span>
          <a
            href="/"
            class="mb-4 text-blue-600 hover:text-sky-500 dark:text-yellow-500 dark:hover:text-yellow-600 ease-in"
          >
            Mais informações</a
          > -->
        </p>
      </div>

      <div class="mb-3 px-1">
        <h3 class="font-bold text-lg">{{ $t("projects.website.title") }}</h3>
        <p class="text-gray-700 font-semibold dark:text-white">
          {{ $t("projects.website.description") }}
        </p>
        <p>{{ $t("projects.website.status") }}</p>
        <a
          href="https://github.com/dinobergviana/meu-site"
          class="mb-4 text-blue-600 hover:text-sky-500 dark:text-yellow-500 dark:hover:text-yellow-600 ease-in"
          target="_blank"
        >
          {{ $t("projects.website.repository") }}</a
        >
      </div>
    </div>
  </section>
</template>
