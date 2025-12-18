<template>
  <section
    class="min-h-screen grid border-t border-gray-300 dark:border-t dark:border-gray-700 md:grid-cols-2 py-8 px-4 text-gray-700 dark:bg-gray-800"
  >
    <div class="flex items-center justify-center mx-auto py-[80px]">
      <h2 class="dark:text-gray-200 text-5xl md:text-5xl font-bold m-0 px-4">
        {{ $t("education.title") }}
      </h2>
    </div>

    <div class="dark:text-gray-200 flex flex-col justify-center gap-4 p-4">
      <div>
        <h3 class="font-bold text-lg">{{ $t("education.uni.title") }}</h3>
        <p class="text-gray-700 font-semibold dark:text-gray-200">
          {{ $t("education.uni.institution") }}
        </p>
        <p class="dark:text-gray-300">{{ $t("education.uni.period") }}</p>
      </div>

      <div>
        <h3 class="font-bold text-lg">{{ $t("education.curso.title") }}</h3>
        <p class="text-gray-700 font-semibold dark:text-gray-200">
          {{ $t("education.uni.institution") }}
        </p>
        <p class="dark:text-gray-300">{{ $t("education.uni.period") }}</p>
      </div>

      <div>
        <h3 class="font-bold text-lg">Desenvolvimento Full Stack - Node.js</h3>
        <p class="text-gray-700 font-semibold dark:text-gray-200">Digital House</p>
        <p class="dark:text-gray-300">Jun 2020 - Jan 2021</p>
      </div>

      <div>
        <h3 class="font-bold">{{ $t("education.ufmg.title") }}</h3>
        <p class="text-gray-700 font-semibold dark:text-gray-200">
          {{ $t("education.ufmg.institution") }}
        </p>
        <p class="dark:text-gray-300">{{ $t("education.ufmg.period") }}</p>
      </div>
    </div>
  </section>
</template>
