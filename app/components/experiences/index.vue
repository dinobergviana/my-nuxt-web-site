<template>
  <section
    class="min-h-screen grid border-t border-gray-300 dark:border-none md:grid-cols-2 py-8 px-4 text-gray-700 dark:bg-gray-800"
  >
    <!-- Left Title -->
    <div class="flex items-center justify-center mx-auto py-[80px]">
      <h2 class="dark:text-white text-5xl font-bold m-0 px-4">
        {{ $t("experiences.title") }}
      </h2>
    </div>

    <!-- Timeline Right Side -->
    <div
      class="dark:text-white flex flex-col justify-center gap-8 p-4 relative pl-8 border-l border-dashed border-gray-400/30 dark:border-gray-200/30"
    >
      <div v-for="exp in EXPERIENCES" :key="exp.title" class="relative">
        <!-- Timeline Dot -->
        <span
          class="absolute left-[-36.5px] top-[11px] h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-400 shadow"
        ></span>

        <!-- Company -->
        <h3 class="font-bold text-lg">{{ exp.company }}</h3>

        <!-- Role -->
        <p class="text-gray-700 font-semibold dark:text-white">
          {{ $t(`experiences.${[exp.title]}.role`) }}
        </p>

        <!-- Period -->
        <p class="text-gray-600 dark:text-gray-300 mb-3">
          {{ $t("experiences.enjoei.period") }}
        </p>

        <!-- Button -->
        <button
          type="button"
          class="px-2 py-1 bg-blue-100 hover:bg-blue-200 dark:bg-gray-700 dark:border-gray-600 rounded-md dark:hover:bg-gray-600 transition-colors"
          @click="setExperienceDetails(exp.title)"
        >
          <span class="text-sm font-medium">Ver detalhes</span>
        </button>
      </div>
    </div>

    <!-- Modal -->
    <Modal @close-modal="toggleModal" :is-open="isModalOpen">
      <template #modal-title>
        <div class="md:flex md:items-baseline md:gap-2">
          <span class="mb-2 md:mb-0 block text-md leading-none">
            {{ currentDetails?.title ?? "" }}
          </span>
          <span
            class="mb-2 md:mb-0 md:inline block text-sm leading-none text-gray-600 dark:text-gray-400"
          >
            {{ currentDetails.role }}
          </span>
          <span
            class="hidden md:inline text-sm leading-none text-gray-700 dark:text-gray-400"
          >
            &bull;
          </span>
          <span
            class="md:inline block text-sm leading-none text-gray-600 dark:text-gray-400 font-normal"
          >
            {{ currentDetails.period }}
          </span>
        </div>
      </template>

      <template #modal-content>
        <div class="mb-2">
          <h5 class="font-bold mb-2">Sobre a empresa</h5>
          <p class="mb-2">{{ currentDetails.description }}</p>
        </div>

        <div class="mb-2">
          <h5 class="font-bold mb-2">Atividades</h5>
          <ul class="list-disc list-outside pl-4 space-y-1">
            <li v-for="action in currentDetails.actions" :key="action">
              <span>{{ action }}</span>
            </li>
          </ul>
        </div>

        <div>
          <h5 class="font-bold mb-2">Projetos de impacto</h5>
          <ul class="list-disc list-outside pl-4 space-y-4">
            <li
              v-for="project in currentDetails.main_projects"
              :key="project.title"
              class="space-y-1"
            >
              <p class="font-semibold leading-tight">
                {{ project.title }}
              </p>
              <p class="text-sm text-gray-700 dark:text-gray-300 leading-snug">
                {{ project.description }}
              </p>
            </li>
          </ul>
        </div>
      </template>
    </Modal>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import Modal from "../global/modal/modal.vue";
import { EXPERIENCES } from "./experiences";
import { EXPERIENCES_DETAILS } from "./experience-details";

const isModalOpen = ref(false);
const experienceTitle = ref("");

const currentDetails = computed(() => {
  const key = experienceTitle.value as keyof typeof EXPERIENCES_DETAILS;
  return EXPERIENCES_DETAILS[key];
});

function setExperienceDetails(experience: string) {
  experienceTitle.value = experience;
  toggleModal();
}

function toggleModal() {
  isModalOpen.value = !isModalOpen.value;
}
</script>
