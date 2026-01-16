<template>
  <section class="mt-10">
    <div class="pb-5 mb-5 w-full border-b dark:border-gray-600">
      <div class="flex items-center justify-center mb-5">
        <img
          class="w-[100px] h-[100px] rounded-full shadow-md border"
          src="/images/pixel-me.png"
          alt="Minha foto"
        />
      </div>

      <div class="flex items-center justify-center gap-2 mb-4">
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

      <div class="flex items-center justify-center">
        <DownloadResumeButton class="text-center" />
      </div>
    </div>

    <div class="text-justify">
      <h2 class="text-gray-700 dark:text-gray-200 font-bold mb-2">
        {{ $t("me.title") }}
      </h2>
      <p class="text-gray-600 dark:text-gray-300 mb-2">
        {{ $t("me.p1") }}
        <a
          href="http://curso.dev/"
          target="_blank"
          class="text-blue-500 dark:text-yellow-300 dark:hover:text-yellow-500 hover:text-blue-600 font-semibold"
          >curso.dev</a
        >.
      </p>

      <p class="text-gray-600 dark:text-gray-300 mb-2">
        {{ $t("me.p2") }}
      </p>

      <p class="text-gray-600 dark:text-gray-300 mb-3">
        {{ $t("me.p3") }}
      </p>

      <div class="w-full">
        <small class="dark:text-gray-400 text-gray-500">{{
          $t("about.p4.partOne")
        }}</small>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import DownloadResumeButton from "@/components/buttons/DownloadResumeButton.vue";
</script>
