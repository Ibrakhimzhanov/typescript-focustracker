import { ref } from 'vue'
import { NAV_ITEMS } from './constants'
import TheActivities from './pages/TheActivities.vue'
import TheProgress from './pages/TheProgress.vue'
import TheTimeline from './pages/TheTimeline.vue'
import { PageName } from './types'

export const routes = {
  [PageName.ACTIVITIES]: TheActivities,
  [PageName.PROGRESS]: TheProgress,
  [PageName.TIMELINE]: TheTimeline
}

export const currentPage = ref(normalizePageHash())

export function navigate(page: PageName) {
  document.body.scrollIntoView()
  currentPage.value = page
}

export function normalizePageHash(): PageName {
  const page = window.location.hash.slice(1)

  if (NAV_ITEMS.some((navItems) => navItems.page === page)) {
    return page as PageName
  }

  window.location.hash = PageName.TIMELINE

  return PageName.TIMELINE
}
