<template>
  <section class="mt-10 min-h-[calc(100vh-var(--header-height))]">
    <div class="pb-5 mb-5 w-full">
      <div class="flex items-center justify-center mb-5">
        <img
          class="w-[100px] h-[100px] rounded-full shadow-md"
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

    <!-- Tabs Nav Bar Component -->
    <TabsNavBar :items="meTabs" class="mb-8" />

    <!-- Tab Content -->
    <NuxtPage />
  </section>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import DownloadResumeButton from "@/components/buttons/DownloadResumeButton.vue";
import TabsNavBar, { type TabItem } from "@/components/global/tabs-nav-bar.vue";

const { t } = useI18n();

const meTabs = computed<TabItem[]>(() => [
  { key: "overview", link: "/me", label: t("me.tabs.overview") },
  { key: "career-transition", link: "/me/career-transition", label: t("me.tabs.careerTransition") },
  { key: "curiosities", link: "/me/curiosities", label: t("me.tabs.curiosities") }
]);
</script>
