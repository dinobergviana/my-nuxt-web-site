<template>
  <div class="text-justify fade-in pb-4 md:pb-0">
    <h2 class="text-gray-700 dark:text-gray-200 font-bold mb-4">
      {{ $t("me.careerTransition.title") }}
    </h2>

    <p class="text-gray-600 dark:text-gray-300 mb-3">
      {{ $t("me.careerTransition.overview.p1.partOne") }}
    </p>

    <p class="text-gray-600 dark:text-gray-300 mb-3">
      {{ $t("me.careerTransition.overview.p2.partOne") }}
      {{ $t("me.careerTransition.overview.p2.partTwo") }}
      <strong
        class="inline-block px-2 py-0.5 border rounded-md text-sm leading-none bg-gray-100 dark:bg-gray-800"
      >
        {{ $t("me.careerTransition.overview.p2.strongText") }}
      </strong>
      {{ $t("me.careerTransition.overview.p2.partThree") }}
      {{ $t("me.careerTransition.overview.p2.partFour") }}
    </p>

    <p class="text-gray-600 dark:text-gray-300 mb-3">
      {{ $t("me.careerTransition.overview.p3.partOne") }}
      <strong
        class="inline-block px-2 py-0.5 border rounded-md text-sm leading-none bg-gray-100 dark:bg-gray-800"
        >{{ $t("me.careerTransition.overview.p3.strongText") }}</strong
      >
      {{ $t("me.careerTransition.overview.p3.partTwo") }}
    </p>
  </div>
</template>

<script lang="ts" setup></script>
