import { defineStore } from "pinia";

const TOTAL_PAGES_WITH_SECTIONS = 12; // numero de paginas disponiveis no site

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
        TOTAL_PAGES_WITH_SECTIONS) *
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
