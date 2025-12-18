<template>
  <section
    class="min-h-screen grid border-t border-gray-300 dark:border-t dark:border-gray-700 md:grid-cols-2 py-8 px-4 text-gray-700 dark:bg-gray-800"
    id="about"
  >
    <div class="flex items-center justify-center mx-auto py-[80px]">
      <h2 class="dark:text-gray-200 text-5xl md:text-5xl font-bold m-0 p-0">
        {{ $t("about.title") }}
      </h2>
    </div>

    <div
      class="flex flex-col items-center justify-center md:text-lg md:m-0 p-4"
    >
      <div>
        <p class="dark:text-gray-200 mb-4">
          {{ $t("about.p1.partOne") }}
          <strong>{{ $t("about.p1.strongText") }}</strong>
          {{ $t("about.p1.partTwo") }}
        </p>
      </div>

      <div>
        <p class="dark:text-gray-200 mb-4">
          {{ $t("about.p2.partOne") }}
          <strong>{{ $t("about.p2.strongTextOne") }}</strong>
          {{ $t("about.p2.partTwo") }}
          <strong>{{ $t("about.p2.strongTextTwo") }}</strong>
          {{ $t("about.p2.partThree") }}
          <strong
            class="text-blue-600 hover:text-sky-500 dark:text-yellow-500 dark:hover:text-yellow-600 ease-in"
            ><a href="https://www.digitalhouse.com/br" target="_blank">{{
              $t("about.p2.strongTextLink.text")
            }}</a></strong
          >.
        </p>
      </div>

      <div class="w-full">
        <p class="dark:text-gray-200 mb-4">
          {{ $t("about.p3.partOne") }}
          <strong>{{ $t("about.p3.strongTextOne") }}</strong>
          <strong
            class="text-blue-600 hover:text-sky-500 dark:text-yellow-500 dark:hover:text-yellow-600"
            ><a href="https://curso.dev/">
              {{ $t("about.p3.strongTextLinkOne.text") }}
            </a></strong
          >
          {{ $t("about.p3.partTwo") }}
          <strong
            class="text-blue-600 hover:text-sky-500 dark:text-yellow-500 dark:hover:text-yellow-600"
            ><a href="https://filipedeschamps.com.br/">{{
              $t("about.p3.strongTextLinkTwo.text")
            }}</a></strong
          >
        </p>
      </div>

      <div class="w-full">
        <small class="dark:text-gray-400 text-gray-500">{{
          $t("about.p4.partOne")
        }}</small>
      </div>
    </div>
  </section>
</template>
