<template>
  <section class="mt-5 w-full">
    <!-- ACADEMIC BACKGROUND SECTION -->
    <div>
      <h2 class="text-xl font-semibold dark:text-white mb-4">
        {{ $t("education.title") }}
      </h2>

      <div
        v-for="item in education"
        :key="item.id"
        class="flex items-center md:gap-5 border-b dark:border-gray-600 pb-5 mb-5"
      >
        <div>
          <img
            :src="item.institutionImage"
            alt="Intituição de ensino"
            class="max-w-[70px] h-[70px] rounded-full shadow-md hidden md:block"
          />
        </div>
        <div class="text-justify">
          <h2 class="font-semibold dark:text-white mb-1">
            {{ item.title }}
          </h2>
          <p class="text-sm text-gray-700 dark:text-gray-200 mb-1">
            {{ item.description }}
          </p>

          <span class="text-xs text-green-600 dark:text-green-500">{{
            item.status
          }}</span>

          <span class="text-sm leading-none text-gray-700 dark:text-gray-400">
            &bull;
          </span>
          <span class="font-normal text-xs text-gray-500 dark:text-gray-200">{{
            item.period
          }}</span>
        </div>
      </div>
    </div>

    <!-- COURSES SECTION -->
    <div class="pb-5">
      <h2 class="text-xl font-semibold dark:text-white mb-4">
        {{ $t("education.courses") }}
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="item in courses"
          :key="item.id"
          class="border dark:border-gray-600 bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 flex flex-col gap-4"
        >
          <img
            :src="item.image"
            alt="Vue 2 Course"
            class="w-[70px] h-[70px] object-cover rounded-full shadow-md hidden md:block"
          />

          <div>
            <h3 class="text-lg font-semibold dark:text-white">
              {{ item.title }}
            </h3>
            <p class="text-sm text-gray-600 dark:text-gray-300 mt-1">
              {{ item.description }}
            </p>
          </div>

          <div class="flex flex-wrap gap-2 mt-auto">
            <span
              v-for="(tag, index) in item.tags"
              :key="`${tag}-${index}`"
              :class="tag.classes"
            >
              {{ tag.label }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

import {
  EDUCATION_PT,
  EDUCATION_EN,
  COURSES_PT,
  COURSES_EN,
} from "@/consts/education";

const { locale } = useI18n();

const education = computed(() => {
  return (
    locale.value === "pt" ? EDUCATION_PT : EDUCATION_EN
  ) as EducationItem[];
});

const courses = computed(() => {
  return (locale.value === "pt" ? COURSES_PT : COURSES_EN) as CourseItem[];
});
</script>
