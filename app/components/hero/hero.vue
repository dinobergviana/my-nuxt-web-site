<template>
  <section
    class="bg-white dark:bg-gray-900 relative flex flex-col items-center justify-center h-screen px-4 transition-colors duration-300 ease-in-out"
    id="hero"
  >
    <div class="mb-2 text-center">
      <h1 class="font-bold text-5xl dark:text-white">
        {{ $t("welcome") }} Dinobergue Viana
      </h1>
    </div>
    <div class="mb-2 text-gray-600 dark:text-gray-300">
      <span> {{ $t("role") }} </span>
    </div>
    <div class="flex items-center justify-center gap-2">
      <Tooltip text="LinkedIn" position="bottom">
        <template #content="{ tooltipId }">
          <a
            :aria-describedby="tooltipId"
            href="https://www.linkedin.com/in/dinobergue-viana-de-sousa/"
            target="_blank"
            class="media-link"
          >
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
            href="https://github.com/dinobergviana"
            target="_blank"
            class="media-link"
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
            href="https://api.whatsapp.com/send?phone=5586998055574"
            target="_blank"
            class="media-link"
          >
            <IconPhWhatsappLogo
              class="w-6 h-6 text-gray-600 dark:text-gray-300"
            />
          </a>
        </template>
      </Tooltip>
    </div>

    <DownloadResumeButton />
  </section>
</template>

<script setup lang="ts">
import Tooltip from "../global/tooltip/tooltip.vue";
import DownloadResumeButton from "../buttons/DownloadResumeButton.vue";
</script>

<style scoped>
.media-link {
  text-decoration: none;
  opacity: 0.7;
}

.media-link:hover {
  opacity: 1;
}
</style>
