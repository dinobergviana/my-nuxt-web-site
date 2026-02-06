import { defineStore } from "pinia";

const MAIN_PAGES = 5; // total de areas principais do site

export const useNavigationStore = defineStore("navigation", () => {
  // state
  const accessedPages = ref<string[]>([]);
  const accessedSections = ref<string[]>([]);

  // getters
  const accessedPagesList = computed(() => accessedPages.value);
  const accessedSectionsList = computed(() => accessedSections.value);

  const currentProgressBarValue = computed(() =>
    Math.ceil(
      ((accessedPages.value.length + accessedSectionsList.value.length) /
        MAIN_PAGES) *
        100,
    ),
  );

  // helpers
  const isPageAlreadAccessed = (pageKey: string) => {
    return accessedPages.value.includes(pageKey);
  };

  const isSectionAlreadAccessed = (sectionKey: string) => {
    return accessedSections.value.includes(sectionKey);
  };

  // action
  function registerPage(pageKey: string) {
    if (!isPageAlreadAccessed(pageKey)) {
      accessedPages.value.push(pageKey);
    }
  }

  function registerSection(sectionKey: string) {
    if (!isSectionAlreadAccessed(sectionKey)) {
      accessedSections.value.push(sectionKey);
    }
  }

  return {
    accessedPages,
    accessedPagesList,
    currentProgressBarValue,
    accessedSections,
    accessedSectionsList,
    registerPage,
    registerSection,
  };
});
