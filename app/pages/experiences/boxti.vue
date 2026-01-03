<template>
  <section class="h-[calc(100dvh-(70px+1rem))] px-4">
    <div class="mb-4">
      <span class="block text-sm font-medium text-gray-600 dark:text-gray-200 mb-1">Cargo</span>
    
      <h2 class="text-xl font-medium dark:text-white">
        {{ EXPERIENCES_DETAILS_PT.boxti.role }}
        <span
          class="hidden md:inline text-sm leading-none text-gray-700 dark:text-gray-500"
        >
          &bull;
        </span>
        <span class="font-normal text-xs ">{{ EXPERIENCES_DETAILS_PT.boxti.period.start }} - {{ EXPERIENCES_DETAILS_PT.boxti.period.end }}</span>
      </h2>
    </div>

    <div class="mb-4">
      <h2 class="text-gray-700 dark:text-gray-100 font-semibold mb-2 ">Sobre a empresa</h2>
      <p class="text-gray-600 dark:text-gray-200">{{ EXPERIENCES_DETAILS_PT.boxti.description }}</p>
    </div>

    <div>
      <h2 class="text-gray-700 dark:text-gray-100 font-semibold mb-2">Principais atividades</h2>
      <ul class="list-disc list-outside pl-4 space-y-1">
        <li class="text-gray-600 dark:text-gray-200" v-for="action in EXPERIENCES_DETAILS_PT.boxti.actions">
          <span>{{ action }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { EXPERIENCES_DETAILS_PT } from "@/components/experiences/experience-details"
</script>
