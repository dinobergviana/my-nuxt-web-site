<template>
  <section
    class="min-h-screen grid border-t border-gray-300 dark:border-t dark:border-gray-700 md:grid-cols-2 py-8 px-4 text-gray-700 dark:bg-gray-800"
  >
    <div class="flex items-center justify-center mx-auto py-[80px]">
      <h2 class="dark:text-white text-5xl md:text-5xl font-bold m-0 px-4">
        {{ $t("experiences.title") }}
      </h2>
    </div>

    <div class="dark:text-white flex flex-col justify-center gap-4 p-4">
      <div>
        <h3 class="font-bold text-lg">Enjoei</h3>
        <p class="text-gray-700 font-semibold dark:text-white">
          {{ $t("experiences.enjoei.role") }}
        </p>
        <p class="dark:text-gray-300">{{ $t("experiences.enjoei.period") }}</p>
        <span class="dark:text-gray-300">{{ $t("experiences.enjoei.workedWith") }}:</span>
        <i class="dark:text-gray-300"> Vue.js</i>
        <i class="dark:text-gray-300">, Vuex</i>
        <i class="dark:text-gray-300">, Typescript</i>
        <i class="dark:text-gray-300">, RailsVitest</i>
        <i class="dark:text-gray-300">, Vue Test Utils</i>
      </div>

      <div>
        <h3 class="font-bold text-lg">Educacross</h3>
        <p class="text-gray-700 font-semibold dark:text-white">
          {{ $t("experiences.educacross.role") }}
        </p>
        <p class="dark:text-gray-300">{{ $t("experiences.educacross.period") }}</p>
        <span class="dark:text-gray-300">{{ $t("experiences.educacross.workedWith")}}:</span>
        <i class="dark:text-gray-300"> Vue.js</i>
        <i class="dark:text-gray-300">, Vuex</i>
        <i class="dark:text-gray-300">, Bootstrap Vue</i>
        <i class="dark:text-gray-300">, Vuexy</i>
      </div>

      <div>
        <h3 class="font-bold text-lg">Warren Investimentos</h3>
        <p class="text-gray-700 font-semibold dark:text-white">
          {{ $t("experiences.warren.role") }}
        </p>
        <p class="dark:text-gray-300">{{ $t("experiences.warren.period") }}</p>
        <span class="dark:text-gray-300">{{ $t("experiences.warren.workedWith") }}:</span>
        <i class="dark:text-gray-300"> Vue.js</i>
        <i class="dark:text-gray-300">, Vuex</i>
        <i class="dark:text-gray-300">, Vuex.js</i>
        <i class="dark:text-gray-300">, Typescript</i>
      </div>

      <div>
        <h3 class="font-bold">BoxTi</h3>
        <p class="text-gray-700 font-semibold dark:text-white">{{ $t("experiences.boxti.role") }}</p>
        <p class="dark:text-gray-300">{{ $t("experiences.boxti.period") }}</p>
        <span class="dark:text-gray-300">{{ $t("experiences.boxti.workedWith") }}:</span>
        <i class="dark:text-gray-300"> HTML</i>
        <i class="dark:text-gray-300">, CSS</i>
        <i class="dark:text-gray-300">, Javascript</i>
        <i class="dark:text-gray-300">, Vue.js</i>
        <i class="dark:text-gray-300">, PHP</i>
        <i class="dark:text-gray-300">, Node.js</i>
        <i class="dark:text-gray-300">, MySQL</i>
      </div>
    </div>
  </section>
</template>
