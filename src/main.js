import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import ui from '@nuxt/ui/vue-plugin'
import App from './App.vue'
import Portfolio from '@/components/layout/Portfolio.vue'
import '@/assets/styles.css'

const router = createRouter({
    history: createWebHistory(),
    routes: [{ path: '/', component: Portfolio }]
})

const app = createApp(App)
app.use(router)
app.use(ui)
app.mount('#app')
