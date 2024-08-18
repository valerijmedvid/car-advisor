import { createApp } from 'vue'

import App from './App.vue'
import './index.css'
import router from './router'

const myApp = createApp(App)

myApp.use(router)

myApp.mount('#app')
