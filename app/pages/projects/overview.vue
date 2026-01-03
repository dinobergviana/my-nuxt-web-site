

<template>
  <h2 class="text-xl font-semibold dark:text-white">Meus projetos</h2>
  <section class="w-full">
    <!-- ===== TABLE (md+) ===== -->
    <div class="overflow-hidden rounded-xl border border-gray-100 dark:border-gray-700">
  <table class="w-full border-collapse">
    <!-- thead (se existir) -->

    <!-- tbody -->
    <tbody>
      <tr
        v-for="project in projects"
        :key="project.id"
        class="border-b border-gray-100 dark:border-gray-700
               last:border-b-0"
      >
        <td class="px-6 py-4 text-gray-900 dark:text-gray-100">
          {{ project.name }}
        </td>

        <td class="px-6 py-4">
          <span
            class="inline-flex items-center gap-2 text-sm"
            :class="project.status === 'finalizado'
              ? 'text-emerald-600 dark:text-emerald-400'
              : 'text-amber-600 dark:text-amber-400'"
          >
            <span
              class="h-2 w-2 rounded-full"
              :class="project.status === 'finalizado'
                ? 'bg-emerald-600 dark:bg-emerald-400'
                : 'bg-amber-600 dark:bg-amber-400'"
            />
            {{ project.status }}
          </span>
        </td>

        <td class="px-6 py-4 text-right">
          <div class="flex justify-end gap-3 text-sm">
            <button
              class="text-gray-600 hover:text-gray-900
                     dark:text-gray-400 dark:hover:text-white transition"
            >
              Ver detalhes
            </button>
            <button
              class="text-sky-600 hover:text-sky-500
                     dark:text-sky-400 dark:hover:text-sky-300 transition"
            >
              Acessar
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>


    <!-- ===== CARDS (< md) ===== -->
    <div class="grid gap-4 md:hidden">
      <div
        v-for="project in projects"
        :key="project.id"
        class="rounded-xl border border-white/10 bg-white/5 p-5"
      >
        <!-- Nome -->
        <h3 class="text-lg font-medium text-white">
          {{ project.name }}
        </h3>

        <div class="mt-4 space-y-3 text-sm text-gray-400">
          <!-- Status -->
          <div class="flex items-center justify-between">
            <span>Situação</span>
            <span
              class="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium"
              :class="statusClass(project.status)"
            >
              <span class="h-2 w-2 rounded-full bg-current"></span>
              {{ project.status }}
            </span>
          </div>

          <!-- Ações -->
          <div class="flex justify-end gap-4 pt-4 border-t border-white/10">
            <button class="text-gray-400 hover:text-white transition">
              Ver detalhes
            </button>
            <button class="text-blue-400 hover:text-blue-300 transition">
              Acessar
            </button>
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
    name: 'my-nuxt-website',
    status: 'Em andamento',
  },
  {
    id: 2,
    name: 'dashboard-admin',
    status: 'Finalizado',
  },
  {
    id: 3,
    name: 'landing-page',
    status: 'Em andamento',
  },
]

const statusClass = (status: string) => {
  if (status === 'Finalizado') {
    return 'bg-green-500/10 text-green-400'
  }

  return 'bg-emerald-500/10 text-emerald-400'
}
</script>