import { createApp } from 'vue'
import { startCurrentDateTimer } from './time'
import { syncState } from './storage'
import App from './App.vue'

import './assets/main.css'


syncState()

startCurrentDateTimer()
document.addEventListener('visibilitychange', () => {
  syncState(document.visibilityState === 'visible')
})

createApp(App).mount('#app')
