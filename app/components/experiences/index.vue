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
      <div v-for="exp in EXPERIENCES" :key="exp.title">
        <h3 class="font-bold text-lg">{{ exp.company }}</h3>
        <p class="text-gray-700 font-semibold dark:text-white">
          {{ $t(`experiences.${[exp.title]}.role`) }}
        </p>
        <p class="dark:text-gray-300 mb-2 mb-2">{{ $t("experiences.enjoei.period") }}</p>

        <button type="button" class="px-2 py-1 border dark:border-gray-600 dark:bg-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-600" @click="handleOpenModal(exp.title)">
          <span class="text-sm font-medium">Ver detalhes</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { EXPERIENCES } from "./experiences"

function handleOpenModal(experience: string) {
  console.log(experience)
}
</script>
