import { ref } from 'vue'
import { PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE } from './constants'
import TheActivities from './pages/TheActivities.vue'
import TheProgress from './pages/TheProgress.vue'
import TheTimeline from './pages/TheTimeline.vue'
import type { PageName } from './types'
import { isPageValid } from './validators'

export const routes = {
  [PAGE_ACTIVITIES]: TheActivities,
  [PAGE_PROGRESS]: TheProgress,
  [PAGE_TIMELINE]: TheTimeline
}

export const currentPage = ref(normalizePageHash())

export function navigate(page: PageName) {
  document.body.scrollIntoView()
  currentPage.value = page
}

export function normalizePageHash(): PageName {
  const page = window.location.hash.slice(1)

  if (isPageValid(page)) {
    return page as PageName
  }

  window.location.hash = PAGE_TIMELINE

  return PAGE_TIMELINE
}
