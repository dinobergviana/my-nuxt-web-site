<template>
  <header class="flex w-full border-b dark:border-b-gray-700 h-header">
    <div class="w-full flex items-center">
      <!-- Área de navegação -->
      <AchievementRing
        class="ml-4"
        :size="48"
        :progress="(9 / 9) * 100"
        :unlocked="9 >= 9"
      >

      <!-- <IconPhMedal class="h-8 w-8" :class="9 >= 9 ? 'text-yellow-400' : 'text-slate-300'" weight="duotone" /> -->
      <img src="/images/silver-trophy.png" class="object-cover h-14 w-14" />
      </AchievementRing>
      <div class="flex-1 flex justify-center">
        <nav>
          <ul
            class="flex gap-4 md:gap-6 items-center text-sm md:text-md text-gray-100"
          >
            <li>
              <NuxtLink
                to="/"
                class="text-sm text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-white transition-colors duration-200 ease-out"
                active-class="text-gray-600 dark:text-white font-semibold"
              >
                {{ $t("header.nav.home") }}
              </NuxtLink>
            </li>

            <li>
              <NuxtLink
                to="/experiences"
                class="text-sm text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-white transition-colors duration-200 ease-out"
                active-class="text-gray-600 dark:text-white font-semibold"
              >
                {{ $t("header.nav.experiences") }}
              </NuxtLink>
            </li>

            <li>
              <NuxtLink
                to="/projects"
                class="text-sm text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-white transition-colors duration-200 ease-out"
                active-class="text-gray-600 dark:text-white font-semibold"
              >
                {{ $t("header.nav.projects") }}
              </NuxtLink>
            </li>

            <li>
              <NuxtLink
                to="/education"
                class="text-sm text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-white transition-colors duration-200 ease-out"
                active-class="text-gray-600 dark:text-white font-semibold"
              >
                {{ $t("header.nav.education") }}
              </NuxtLink>
            </li>

            <li>
              <NuxtLink
                to="/me"
                class="text-sm text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-white transition-colors duration-200 ease-out"
                active-class="text-gray-600 dark:text-white font-semibold"
              >
                {{ $t("header.nav.me") }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>

      <div class="hidden md:flex md:items-center md:gap-2">
        <div>
          <button
            v-if="theme === 'light'"
            class="p-1 rounded-md hover:bg-gray-200 text-gray-500 hover:text-gray-800"
            @click="changeTheme('dark')"
          >
            <IconPhSun class="w-5 h-5" />
          </button>

          <button
            v-else
            class="p-1 rounded-md hover:dark:bg-gray-700 text-gray-400 hover:text-gray-100"
            @click="changeTheme('light')"
          >
            <IconPhMoon class="w-5 h-5" />
          </button>
        </div>

        <div class="mr-2">
          <LangSelect />
        </div>
      </div>

      <MenuDropDown class="mr-5 md:hidden" />
    </div>
  </header>
</template>

<script setup lang="ts">
import LangSelect from "@/components/lang-select/index.vue";
import MenuDropDown from "@/components/dropdown-menu/index.vue";
import AchievementRing  from "@/components/medal/index.vue"
import { useNavigationStore } from "@/stores/navigation";

const { theme, toggleTheme } = useTheme();
const { setLocale } = useI18n();
const navigation = useNavigationStore();

const changeTheme = (value: "light" | "dark") => {
  if (theme.value !== value) toggleTheme();
};

const changeLang = (value: "pt" | "en") => {
  setLocale(value);
};
</script>
