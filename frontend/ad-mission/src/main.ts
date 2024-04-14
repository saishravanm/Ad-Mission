import './assets/main.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { useAuthStore } from './stores/auth'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

const authStore = useAuthStore()
authStore.loadAuthStateFromLocalStorage()
authStore.loadUser()

app.mount('#app')
