import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App)

app.use(router).use(createPinia(App))
app.mount('#app')
