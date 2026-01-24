<template>
  <section class="h-[calc(100dvh-(70px+1rem))] px-4">
    <div class="mb-4">
      <span
        class="block text-sm font-medium text-gray-600 dark:text-gray-200 mb-1"
        >{{ $t("experiences.position") }}</span
      >

      <h2 class="text-xl font-medium dark:text-white">
        {{ experiences.educacross.role }}
        <span
          class="hidden md:inline text-sm leading-none text-gray-700 dark:text-gray-500"
        >
          &bull;
        </span>
        <span class="font-normal text-xs"
          >{{ experiences.educacross.period.start }} -
          {{ experiences.educacross.period.end }}</span
        >
      </h2>
    </div>

    <div class="mb-4">
      <h2 class="text-gray-700 dark:text-gray-100 font-semibold mb-2">
        {{ $t("experiences.aboutTheCompany") }}
      </h2>
      <p class="text-gray-600 dark:text-gray-200">
        {{ experiences.educacross.description }}
      </p>
    </div>

    <div>
      <h2 class="text-gray-700 dark:text-gray-100 font-semibold mb-2">
        {{ $t("experiences.contributions") }}
      </h2>
      <ul class="list-disc list-outside pl-4 space-y-1">
        <li
          class="text-gray-600 dark:text-gray-200"
          v-for="action in experiences.educacross.actions"
        >
          <span>{{ action }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";

definePageMeta({
  pageKey: "experiences-educacross",
});

import {
  EXPERIENCES_DETAILS_PT,
  EXPERIENCES_DETAILS_EN,
} from "@/components/experiences/experience-details";

const { locale } = useI18n();

const experiences = computed(() => {
  return locale.value === "pt"
    ? EXPERIENCES_DETAILS_PT
    : EXPERIENCES_DETAILS_EN;
});
</script>
