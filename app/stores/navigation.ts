import { defineStore } from 'pinia'

const TOTAL_PAGES = 10 // numero de paginas disponiveis no site

export const useNavigationStore = defineStore('navigation', () => {
  // state
  const accessedPages = ref<string[]>([])
  const accessedSections = ref<string[]>([])

  // getters
  const accessedPagesList = computed(() => accessedPages.value)
  const accessedSectionsList = computed(() => accessedSections.value)

  const currentProgressBarValue = computed(() => accessedPages.value.length / TOTAL_PAGES * 100)

  // helpers
  const isPageAlreadAccessed = (pageKey: string) => {
    return accessedPages.value.includes(pageKey)
  }

  const isSectionAlreadAccessed = (sectionKey: string) => {
    return accessedSections.value.includes(sectionKey)
  }

  // action
  function registerPage(pageKey: string) {
    if (!isPageAlreadAccessed(pageKey)) {
      accessedPages.value.push(pageKey)
    }
  }

  function registerSection(sectionKey: string) {
    if (!isSectionAlreadAccessed(sectionKey)) {
      accessedSections.value.push(sectionKey)
    }
  }

  return {
    accessedPages,
    accessedPagesList,
    currentProgressBarValue,
    accessedSectionsList,
    registerPage,
    registerSection
  }
})
