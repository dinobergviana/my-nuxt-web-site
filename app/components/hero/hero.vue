<template>
  <section
    class="bg-white dark:bg-gray-900 relative flex flex-col items-center justify-center min-h-[calc(100vh-var(--header-height))] px-4 transition-colors duration-300 ease-in-out"
    id="hero" 
  >
    <div class="text-center mb-3">
      <h1 class="font-bold text-5xl dark:text-gray-200" id="hero-title">
        {{ $t("welcome") }} Dinobergue Viana
      </h1>
    </div>

    <div class="mb-6 md:mb-2 text-gray-600 dark:text-gray-300">
      <span> {{ $t("role") }} </span>
    </div>

    <div class="flex items-center justify-center gap-2 mb-2 md:mb-0">
      <Tooltip text="LinkedIn" position="bottom">
        <template #content="{ tooltipId }">
          <a
            :aria-describedby="tooltipId"
            aria-label="Perfil no LinkedIn (abre em nova aba)"
            href="https://www.linkedin.com/in/dinobergue-viana-de-sousa/"
            target="_blank"
            class="media-link opacity-70 hover:opacity-100"
            rel="noopener noreferrer"
          >
            <span class="sr-only">Perfil no GitHub</span>
            <IconPhLinkedinLogo
              class="w-6 h-6 text-gray-600 dark:text-gray-300"
            />
          </a>
        </template>
      </Tooltip>

      <Tooltip text="Github" position="bottom">
        <template #content="{ tooltipId }">
          <a
            :aria-describedby="tooltipId"
            aria-label="Perfil no GitHub (abre em nova aba)"
            href="https://github.com/dinobergviana"
            target="_blank"
            class="media-link opacity-70 hover:opacity-100"
          >
            <IconPhGithubLogo
              class="w-6 h-6 text-gray-600 dark:text-gray-300"
            />
          </a>
        </template>
      </Tooltip>

      <Tooltip text="Whatsapp" position="bottom">
        <template #content="{ tooltipId }">
          <a
            :aria-describedby="tooltipId"
            aria-label="Contato via (abre em nova aba)"
            href="https://api.whatsapp.com/send?phone=5586998055574"
            target="_blank"
            class="media-link opacity-70 hover:opacity-100"
          >
            <IconPhWhatsappLogo
              class="w-6 h-6 text-gray-600 dark:text-gray-300"
            />
          </a>
        </template>
      </Tooltip>
    </div>

    <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mt-4">
      <DownloadResumeButton class="text-center" />

      <div class="relative flex items-center gap-1">
        <div class="relative flex items-center justify-center w-4 h-4">
        <div
          class="absolute inset-0 rounded-full bg-green-600/50 dark:bg-green-400/50 pulse"
        />

        <div
          class="w-1.5 h-1.5 rounded-full bg-green-600 dark:bg-green-400 z-10"
        />
      </div>

      <span role="status" class="text-green-600 dark:text-green-400 text-sm font-semibold">
        {{ $t("availableForNewProjects") }}
      </span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Tooltip from "../global/tooltip/tooltip.vue";
import DownloadResumeButton from "../buttons/DownloadResumeButton.vue";
</script>

<style scoped>
@keyframes pulse-animation {
  0% {
    scale: 0;
    opacity: 0;
  }

  25% {
    scale: 0.2;
    opacity: 0.5;
  }

  50% {
    scale: 0.4;
    opacity: 1;
  }

  75% {
    scale: 0.8;
    opacity: 0.5;
  }

  100% {
    scale: 1;
    opacity: 0;
  }
}

.pulse {
  animation: pulse-animation ease-in-out 1s infinite;
}
</style>
