<template>
  <section
    class="relative bg-white dark:bg-gray-900 relative flex flex-col items-center justify-center h-[calc(100vh-2.5rem)] px-4 transition-colors duration-300 ease-in-out"
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
            href="https://www.linkedin.com/in/dinobergue-viana-28574218b/"
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

    <NuxtLink to="/experiencias" class="absolute right-50 bottom-5 cursor-pointer animated-link">
      <Tooltip text="Iniciar" position="top">
        <template #content>
          <IconPhArrowCircleRight
            class="w-10 h-10 text-gray-600 dark:text-gray-300"
          />
        </template>
      </Tooltip>
    </NuxtLink>
  </section>
</template>

<script setup lang="ts">
import Tooltip from "../global/tooltip/tooltip.vue";
</script>

<style scoped>
.media-link {
  text-decoration: none;
  opacity: 0.7;
}

.media-link:hover {
  opacity: 1;
}

.animated-link {
  --fade-duration: 1s;
  --wait-before-bounce: 5s;
  --bounce-duration: 5s;
  --period: calc(var(--wait-before-bounce) + var(--bounce-duration));

  display: inline-block;
  will-change: transform, opacity;
  opacity: 0;
  transform: translateY(40px);

  animation:
    fadeInUp var(--fade-duration) ease-out forwards,
    periodicBounce var(--period) ease-in-out infinite;

  animation-delay: 0s, calc(var(--fade-duration) + var(--wait-before-bounce));
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes periodicBounce {
  0% {
    transform: translateY(0);
  }

  5% {
    transform: translateY(-20px);
  }

  10% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(0);
  }
}
</style>
