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

        <button type="button" class="px-2 py-1 border dark:border-gray-600 dark:bg-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-600" @click="setExperienceDetails(exp.title)">
          <span class="text-sm font-medium">Ver detalhes</span>
        </button>
      </div>
    </div>

    <Modal @close-modal="toggleModal" :is-open="isModalOpen">
      <template #modal-title>
<div class="md:flex md:items-baseline md:gap-2">
  <span class="mb-2 md:mb-0 block text-md leading-none">
    {{ currentDetails?.title ?? '' }}
  </span>
  <span class="mb-2 md:mb-0 md:inline block text-sm leading-none text-gray-600 dark:text-gray-400">
    {{ currentDetails.role }}
  </span>
  <span class="hidden md:inline text-sm leading-none text-gray-700 dark:text-gray-400">
    &bull;
  </span>
  <span class="md:inline block text-sm leading-none text-gray-600 dark:text-gray-400">
    {{ currentDetails.period }}
  </span>
</div>

      </template>
    </Modal>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import Modal from "../global/modal/modal.vue";
import { EXPERIENCES } from "./experiences"
import { EXPERIENCES_DETAILS } from "./experience-details"

const isModalOpen = ref<boolean>(false)
const experienceTitle = ref<string>("")

const currentDetails = computed(() => {
  const key = experienceTitle.value as keyof typeof EXPERIENCES_DETAILS;
  return EXPERIENCES_DETAILS[key];
});

function setExperienceDetails(experience: string) {
  experienceTitle.value = experience
  toggleModal()
}

function toggleModal() {
  isModalOpen.value = !isModalOpen.value
}
</script>
