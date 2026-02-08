import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
import './style.css'

// --- 1. เพิ่มบรรทัดนี้: นำเข้าไฟล์ Navbar ---
import CoffeeHeader from './components/CoffeeHeader.vue' 

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)

// --- 2. เพิ่มบรรทัดนี้: ลงทะเบียนเป็น Global Component ---
app.component('coffee-header', CoffeeHeader) 

app.mount('#app')