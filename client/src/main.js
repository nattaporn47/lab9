//main.js
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'
import BackHeader from './components/Header.vue' // Import Component เข้ามา
import CKEditor from '@ckeditor/ckeditor5-vue' // [เพิ่ม] Import CKEditor Plugin

const app = createApp(App) // สร้าง App
const pinia = createPinia()

pinia.use(piniaPluginPersistedstate) // ใช้ Plugin
app.use(pinia) // ใช้งาน Pinia

app.use(CKEditor) // [เพิ่ม] เปิดใช้งาน CKEditor ผ่าน app instance [2]

app.use(router) // ใช้งาน Router

// ลงทะเบียน Global Component ใน Vue 3 [2]
app.component('back-header', BackHeader)

app.mount('#app') // แปะลงไปที่ id="app" ใน index.html