import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueQueryPlugin } from '@tanstack/vue-query'
import Vue3Lottie from 'vue3-lottie'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(VueQueryPlugin)
app.use(Vue3Lottie)
app.use(router)

app.mount('#app')
