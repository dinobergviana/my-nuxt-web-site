<template>
  <div class="fade-in pb-4 text-justify md:pb-0">
    <h2 class="mb-4 font-bold text-gray-700 dark:text-gray-200">
      {{ $t('me.careerTransition.title') }}
    </h2>

    <p class="mb-3 text-gray-600 dark:text-gray-300">
      {{ $t('me.careerTransition.overview.p1.partOne') }}
    </p>

    <p class="mb-3 text-gray-600 dark:text-gray-300">
      {{ $t('me.careerTransition.overview.p2.partOne') }}
      {{ $t('me.careerTransition.overview.p2.partTwo') }}
      <strong
        class="inline-block rounded-md border bg-gray-100 px-2 py-0.5 text-sm leading-none dark:bg-gray-800"
      >
        {{ $t('me.careerTransition.overview.p2.strongText') }}
      </strong>
      {{ $t('me.careerTransition.overview.p2.partThree') }}
      {{ $t('me.careerTransition.overview.p2.partFour') }}
    </p>

    <p class="mb-6 text-gray-600 dark:text-gray-300">
      {{ $t('me.careerTransition.overview.p3.partOne') }}
      <strong
        class="inline-block rounded-md border bg-gray-100 px-2 py-0.5 text-sm leading-none dark:bg-gray-800"
        >{{ $t('me.careerTransition.overview.p3.strongText') }}</strong
      >
      {{ $t('me.careerTransition.overview.p3.partTwo') }}
    </p>

    <NuxtLink
      to="/career-transition"
      class="rounded-md border border-green-600 bg-green-200 px-2 py-1 font-semibold text-green-800 opacity-85 transition-all hover:opacity-100 dark:border-green-600 dark:bg-green-800 dark:text-white"
    >
      <span>
        {{ $t('me.careerTransition.overview.cta') }}
      </span>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup></script>
