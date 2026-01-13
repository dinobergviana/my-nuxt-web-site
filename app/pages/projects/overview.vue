<template>
  <h2 class="text-xl font-semibold dark:text-white mb-4">Meus projetos</h2>
  <section class="w-full">
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
              Nome do projeto
            </th>

            <th
              scope="col"
              class="px-6 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-100"
            >
              Status
            </th>

            <th
              scope="col"
              class="px-6 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-100"
            >
              Ações
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
                  project.status === 'finalizado'
                    ? 'bg-green-500/10 text-green-600 dark:text-green-400'
                    : 'bg-orange-500/10 text-orange-400'
                "
              >
                <div
                  class="h-2 w-2 rounded-full"
                  :class="
                    project.status === 'finalizado'
                      ? 'bg-emerald-600 dark:bg-emerald-400'
                      : 'bg-amber-600 dark:bg-amber-600'
                  "
                />

                <span class="text-xs dart:text-black">{{ project.label }}</span>
              </div>
            </td>

            <td class="px-6 py-4 text-right">
              <div class="flex justify-start gap-3 text-sm">
                <Tooltip text="Ver detalhes" position="top">
                  <template #content="{ tooltipId }">
                    <button
                      class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition"
                      aria-label="Ver detalhes do projeto"
                      :aria-describedby="tooltipId"
                    >
                      <IconPhEye />
                    </button>
                  </template>
                </Tooltip>

                <Tooltip text="Repositório" position="top">
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
        <h3 class="text-lg font-medium text-gray-700 dark:text-white">
          {{ project.name }}
        </h3>

        <div class="mt-4 space-y-3 text-sm text-gray-400">
          <!-- Status -->
          <div class="flex items-center justify-between">
            <span>Status</span>
            <span
              class="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium"
              :class="statusClass(project.status)"
            >
              <span class="h-2 w-2 rounded-full bg-current"></span>
              {{ project.label }}
            </span>
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
                  >
                    <IconPhEye />
                  </button>
                </template>
              </Tooltip>

              <Tooltip text="Repositório" position="top">
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
  </section>
</template>

<script setup lang="ts">
const projects = [
  {
    id: 1,
    name: "Website",
    status: "finalizado",
    label: "Finalizado",
    github_url: "https://github.com/dinobergviana/my-nuxt-web-site",
    has_access_link: false,
  },
  {
    id: 2,
    name: "Migração do Website",
    status: "em andamento",
    label: "Em andamento",
    github_url: "https://github.com/dinobergviana/my-nuxt-web-site",
    has_access_link: false,
    access_link: "#",
  },
  {
    id: 3,
    name: "GC Manager",
    status: "em andamento",
    label: "Em andamento",
    github_url:
      "https://github.com/dinobergviana/https://github.com/dinobergviana/gc-manager",
    has_access_link: false,
    access_link: "#",
  },
];

const statusClass = (status: string) => {
  if (status === "finalizado") {
    return "bg-green-500/10 text-green-600 dark:text-green-400";
  }

  return "bg-orange-500/10 text-orange-400";
};
</script>
