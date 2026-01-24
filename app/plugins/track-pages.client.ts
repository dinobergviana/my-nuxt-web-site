import { useNavigationStore } from '@/stores/navigation'

export default defineNuxtPlugin(() => {
  const router = useRouter()
  const navigationStore = useNavigationStore()

  router.afterEach((to) => {
    const pageKey =
      (to.meta.pageKey as string) ??
      to.name?.toString() ??
      to.path

    navigationStore.registerPage(pageKey)
  })
})
