import { ref } from 'vue'
import { normalizePageHash } from './functions'
import { PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE } from './constants'
import TheActivities from './pages/TheActivities.vue'
import TheTimeline from './pages/TheTimeline.vue'
import TheProgress from './pages/TheProgress.vue'

export const routes = {
  [PAGE_ACTIVITIES]: TheActivities,
  [PAGE_PROGRESS]: TheProgress,
  [PAGE_TIMELINE]: TheTimeline
}

export const currentPage = ref(normalizePageHash())

export function navigate(page) {
  document.body.scrollIntoView()
  currentPage.value = page
}
