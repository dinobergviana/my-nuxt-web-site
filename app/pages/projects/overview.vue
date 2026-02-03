<template>
  <section class="w-full min-h-[calc(100vh-var(--header-height))]">
    <h1 class="text-xl font-semibold dark:text-white mb-4">
      {{ $t("projects.title") }}
    </h1>
    <div
      class="hidden md:block overflow-hidden rounded-md border border-gray-200 dark:border-gray-700 shadow-sm"
    >
      <table class="w-full border-collapse">
        <thead>
          <tr class="border-b border-gray-200 dark:border-gray-700">
            <th
              scope="col"
              class="px-6 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-100"
            >
              {{ $t("projects.projectName") }}
            </th>

            <th
              scope="col"
              class="px-6 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-100"
            >
              {{ $t("projects.status") }}
            </th>

            <th
              scope="col"
              class="px-6 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-100"
            >
              {{ $t("projects.actions") }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="project in projects"
            :key="project.id"
            class="border-b border-gray-200 dark:border-gray-700 last:border-b-0"
          >
            <td class="text-sm px-6 py-4 text-gray-600 dark:text-gray-200">
              {{ project.name }}
            </td>

            <td class="text-sm px-6 py-4 flex items-center gap-2">
              <div
                class="flex py-1 items-center gap-2 rounded-full px-2"
                :class="
                  project.status === 'finalizado' ||
                  project.status === 'completed'
                    ? 'bg-green-500/20 text-green-700 dark:text-green-400'
                    : 'bg-orange-500/10 text-orange-400'
                "
              >
                <div
                  class="h-2 w-2 rounded-full"
                  :class="
                    project.status === 'finalizado' ||
                    project.status === 'completed'
                      ? 'bg-emerald-600 dark:bg-emerald-400'
                      : 'bg-amber-600 dark:bg-amber-600'
                  "
                />

                <span class="text-xs dart:text-black">{{ project.label }}</span>
              </div>
            </td>

            <td class="px-6 py-4 text-right">
              <div class="flex justify-start gap-3 text-sm">
                <Tooltip :text="$t('seeDetailsButton')" position="top">
                  <template #content="{ tooltipId }">
                    <button
                      class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition"
                      aria-label="Ver detalhes do projeto"
                      :aria-describedby="tooltipId"
                      @click="setSelectedProject(project)"
                    >
                      <IconPhEye />
                    </button>
                  </template>
                </Tooltip>

                <Tooltip
                  v-if="project.show_github_link"
                  :text="$t('repository')"
                  position="top"
                >
                  <template #content="{ tooltipId }">
                    <a
                      :href="project.github_url"
                      target="_blank"
                      class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition"
                      aria-label="Abrir repositório no GitHub"
                      :aria-describedby="tooltipId"
                    >
                      <IconPhGithubLogo />
                    </a>
                  </template>
                </Tooltip>

                <Tooltip
                  v-if="project.has_access_link"
                  text="Acessar"
                  position="top"
                >
                  <template #content="{ tooltipId }">
                    <a
                      :href="project.access_link"
                      class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition"
                      aria-label="Acessar projeto"
                      :aria-describedby="tooltipId"
                    >
                      <IconPhArrowSquareOut />
                    </a>
                  </template>
                </Tooltip>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- ===== CARDS -->
    <div class="grid gap-4 md:hidden">
      <div
        v-for="project in projects"
        :key="project.id"
        class="rounded-xl border dark:border-white/10 bg-white/5 p-5 shadow-sm"
      >
        <!-- Nome -->
        <h2 class="text-lg font-medium text-gray-700 dark:text-white">
          {{ project.name }}
        </h2>

        <div class="mt-4 space-y-3 text-sm text-gray-400">
          <!-- Status -->
          <div class="flex items-center justify-between">
            <span>Status</span>
            <div
              class="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs"
              :class="statusClass(project.status)"
            >
              <div class="h-2 w-2 rounded-full bg-current" />
              <span>{{ project.label }}</span>
            </div>
          </div>

          <!-- Ações -->
          <div
            class="flex justify-end gap-4 pt-4 border-t dark:border-white/10"
          >
            <div class="flex justify-start gap-3 text-sm">
              <Tooltip text="Ver detalhes" position="top">
                <template #content="{ tooltipId }">
                  <button
                    class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition"
                    aria-label="Ver detalhes do projeto"
                    :aria-describedby="tooltipId"
                    @click="setSelectedProject(project)"
                  >
                    <IconPhEye />
                  </button>
                </template>
              </Tooltip>

              <Tooltip
                v-if="project.show_github_link"
                text="Repositório"
                position="top"
              >
                <template #content="{ tooltipId }">
                  <a
                    :href="project.github_url"
                    target="_blank"
                    class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition"
                    aria-label="Abrir repositório no GitHub"
                    :aria-describedby="tooltipId"
                  >
                    <IconPhGithubLogo />
                  </a>
                </template>
              </Tooltip>

              <Tooltip
                v-if="project.has_access_link"
                text="Acessar"
                position="top"
              >
                <template #content="{ tooltipId }">
                  <a
                    :href="project.access_link"
                    class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition"
                    aria-label="Acessar projeto"
                    :aria-describedby="tooltipId"
                  >
                    <IconPhArrowSquareOut />
                  </a>
                </template>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Modal @close-modal="closeModal" :is-open="isModalOpen">
      <template #modal-title>
        <h3 class="dark:text-gray-100">{{ $t("projectDeatils") }}</h3>
      </template>
      <template #modal-content>
        <div class="mb-2">
          <div class="border-b dark:border-b-gray-600 pb-2 mb-4">
            <h3 class="font-bold mb-2 dark:text-gray-200">
              {{ $t("description") }}
            </h3>

            <p class="mb-2 dark:text-gray-300">
              {{ selectedProject?.details.description }}
            </p>
          </div>

          <div v-if="!!selectedProject?.details.results">
            <h3 class="font-bold mb-2 dark:text-gray-200">
              Resultados - Google PageSpeed Insights
            </h3>

            <div class="border-b dark:border-b-gray-600 pb-4 mb-4">
              <p
                v-for="(item, index) in selectedProject?.details.results
                  .summary"
                :key="`summary-${index}`"
                class="dark:text-gray-300"
                v-html="item"
              />
            </div>

            <div class="mb-2">
              <h3 class="font-bold mb-2 dark:text-gray-100">
                {{ selectedProject?.details.results.keyImprovements.title }}
              </h3>

              <ul class="list-disc list-outside pl-8 space-y-1">
                <li
                  v-for="highlight in selectedProject?.details.results
                    .keyImprovements.highlights"
                >
                  <span v-html="highlight" />
                </li>
              </ul>
            </div>

            <div class="border-b dark:border-b-gray-600 pb-4 mb-4">
              <div
                v-for="action in selectedProject?.details.results
                  .keyImprovements.actionsTaken"
              >
                <div>
                  <h3 class="font-bold my-2 pl-4 dark:text-gray-200">
                    {{ action.title }}
                  </h3>

                  <ul class="list-disc list-outside pl-8 space-y-1">
                    <li v-for="step in action.steps">
                      {{ step }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <div class="my-2 flex items-center gap-2">
                <h3 class="font-bold dark:text-gray-200">
                  {{ $t("experienceModal.analisysBefore") }}
                </h3>
                <a
                  class="m-0 font-semibold text-xs text-gray-600 dark:text-gray-200 border hover:border-green-500 hover:text-green-600 dark:hover:border-green-500 dark:hover:text-green-500 border-gray-400 dark:border-gray-600 dark:bg-gray-700 border-dashed rounded-sm p-1 transition-colors duration-400 ease-out"
                  href="https://pagespeed.web.dev/analysis/https-meu-site-dinoberguevianas-projects-vercel-app/myy1uek5vw?form_factor=desktop"
                  target="_blank"
                >
                  <span>{{ $t("experienceModal.fullAnalisys") }}</span>
                </a>
              </div>
              <NuxtImg src="/images/before.png" class="w-full rounded-md" />
            </div>

            <div class="mb-4">
              <div class="my-4 flex items-center gap-2">
                <h3 class="font-bold dark:text-gray-200">
                  {{ $t("experienceModal.analisysAfter") }}
                </h3>
                <a
                  class="m-0 font-semibold text-xs text-gray-600 dark:text-gray-200 border hover:border-green-600 hover:text-green-600 dark:hover:border-green-500 dark:hover:text-green-500 border-gray-400 dark:border-gray-600 dark:bg-gray-700 border-dashed rounded-sm p-1 transition-colors duration-200 ease-out"
                  href="https://pagespeed.web.dev/analysis/https-www-dinobergueviana-com-br/ymrutvnidu?form_factor=desktop"
                  target="_blank"
                >
                  <span>{{ $t("experienceModal.fullAnalisys") }}</span>
                </a>
              </div>
              <NuxtImg src="/images/after.png" class="w-full rounded-md" />
            </div>

            <div>
              <h3 class="font-bold mb-2 dark:text-gray-200">
                {{ $t("experienceModal.conclusion") }}
              </h3>

              <p
                class="mb-2"
                v-for="item in selectedProject?.details.results.conclusion"
              >
                {{ item }}
              </p>
            </div>
          </div>

          <div>
            <h3 class="font-bold mb-3 dark:text-gray-200">Stack</h3>

            <div class="flex items-center justify-start gap-4">
              <span
                v-for="tech in selectedProject?.details.stacks"
                :key="tech"
                class="p-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-md text-sm"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </template>
    </Modal>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  pageKey: "projects-overview",
});

import { useNavigationStore } from "@/stores/navigation";

import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

import Modal from "@/components/global/modal/modal.vue";

import { PROJECTS_PT, PROJECTS_EN } from "@/consts/projects";

interface ImprovementSection {
  summary: string[];
  keyImprovements: {
    title: string;
    highlights: string[];
    actionsTaken: {
      title: string;
      steps: string[];
      conclusion?: string;
    }[];
  };
  conclusion?: string[];
}

type ProjectStatus =
  | "finalizado"
  | "em-andamento"
  | "completed"
  | "in-progress";

interface Project {
  id: number;
  name: string;
  status: ProjectStatus;
  label: string;
  show_github_link: boolean;
  github_url: string;
  has_access_link: boolean;
  details: {
    description: string;
    stacks: string[];
    results?: ImprovementSection;
  };
  access_link?: string;
}

const navigationStore = useNavigationStore();

const isModalOpen = ref(false);
const selectedProject = ref<Project | null>(null);

const projects = computed(() => {
  return (locale.value === "pt" ? PROJECTS_PT : PROJECTS_EN) as Project[];
});

function closeModal() {
  isModalOpen.value = false;
}

function openModal() {
  isModalOpen.value = true;
}

function setSelectedProject(project: Project) {
  console.log(project);
  navigationStore.registerSection(
    `project-details-${project.name.toLowerCase()}`,
  );
  selectedProject.value = Object.assign(project);
  openModal();
}

const statusClass = (status: string) => {
  if (status === "finalizado" || status === "completed") {
    return "bg-green-500/20 text-green-700 dark:text-green-400";
  }

  return "bg-orange-500/10 text-orange-400";
};
</script>
