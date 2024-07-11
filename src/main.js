import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/main.scss'

import store from './store/store.js'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
