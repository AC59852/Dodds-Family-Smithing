import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/reset.css'
import './assets/css/main.css'
import './registerServiceWorker'
import router from './router'

createApp(App).use(router).mount('#app')
