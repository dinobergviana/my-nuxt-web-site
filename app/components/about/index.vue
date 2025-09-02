<template>
  <section
    class="border-t border-gray-300 dark:border-t dark:border-gray-700 bg-white dark:bg-gray-800 font-inter font-medium min-h-screen grid grid-cols-1 md:grid-cols-2 py-8 px-4 md:py-11 md:px-24 text-gray-700"
    id="about"
  >
    <div class="flex items-center justify-center m-0 p-0">
      <h2 class="dark:text-white text-5xl md:text-5xl font-bold m-0 p-0">
        {{ $t("about.title") }}
      </h2>
    </div>

    <div
      class="flex items-center justify-center text-justify text-base md:text-lg md:m-0 p-4"
    >
      <div>
        <p class="dark:text-white mb-4">
          {{ $t("about.p1.partOne") }}
          <strong>{{ $t("about.p1.strongText") }}</strong>
          {{ $t("about.p1.partTwo") }}
        </p>

        <p class="dark:text-white mb-4">
          {{ $t("about.p2.partOne") }}
          <strong>{{ $t("about.p2.strongTextOne") }}</strong>
          {{ $t("about.p2.partTwo") }}
          <strong>{{ $t("about.p2.strongTextTwo") }}</strong>
          {{ $t("about.p2.partThree") }}
          <strong class="text-blue-600 hover:text-sky-500 ease-in"
            ><a href="https://www.digitalhouse.com/br" target="_blank">{{
              $t("about.p2.strongTextLink.text")
            }}</a></strong
          >.
        </p>

        <p class="dark:text-white mb-4">
          {{ $t("about.p3.partOne") }}
          <strong>{{ $t("about.p3.strongTextOne") }}</strong>
          <strong class="text-blue-600 hover:text-sky-500"
            ><a href="https://curso.dev/">
              {{ $t("about.p3.strongTextLinkOne.text") }}
            </a></strong
          >
          {{ $t("about.p3.partTwo") }}
          <strong class="text-blue-600 hover:text-sky-500"
            ><a href="https://filipedeschamps.com.br/">{{
              $t("about.p3.strongTextLinkTwo.text")
            }}</a></strong
          >
        </p>

        <div>
          <small class="dark:text-gray-400 text-gray-500">{{
            $t("about.p4.partOne")
          }}</small>
        </div>
      </div>
    </div>
  </section>
</template>
