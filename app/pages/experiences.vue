<template>
  <section class="mt-5">
    <h2 class="text-xl font-semibold dark:text-white mb-4">
      {{ $t("experiences.title") }}
    </h2>
    <TabsNavBar :items="experienceTabs" class="mb-4" />
    <NuxtPage />
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import TabsNavBar, { type TabItem } from "@/components/global/tabs-nav-bar.vue";
import { EXPERIENCES } from "@/components/experiences/experiences-data";

definePageMeta({
  redirect: "/experiences/big-data-health",
});

const experienceTabs = computed<TabItem[]>(() =>
  EXPERIENCES.map((exp) => ({
    key: exp.title,
    link: exp.link,
    label: exp.company_name,
    iconPath: exp.img_path,
    iconAlt: exp.img_alt || `Logo da ${exp.company_name}`,
  }))
);
</script>
