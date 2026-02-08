import { createRouter, createWebHistory } from 'vue-router'

// --- Import Component เดิม ---
import CoffeeIndex from '../components/Coffees/Index.vue'
import CoffeeCreate from '../components/Coffees/CreateCoffee.vue'
import CoffeeEdit from '../components/Coffees/EditCoffee.vue'
import Login from '../components/Login.vue'

// --- 1. เพิ่ม Import Component ของ Users (สำคัญมาก!) ---
import UserIndex from '../components/Users/Index.vue'
import UserCreate from '../components/Users/CreateUser.vue'
import UserEdit from '../components/Users/EditUser.vue'
import UserShow from '../components/Users/ShowUser.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    // --- ส่วนของ Coffee ---
    {
      path: '/coffees',
      name: 'coffees',
      component: CoffeeIndex
    },
    {
      path: '/coffee/create',
      name: 'coffee-create',
      component: CoffeeCreate
    },
    {
      path: '/coffee/edit/:coffeeId',
      name: 'coffee-edit',
      component: CoffeeEdit
    },
    // --- 2. เพิ่ม Routes สำหรับ Users ตรงนี้ครับ ---
    {
      path: '/users',
      name: 'users',
      component: UserIndex
    },
    {
      path: '/user/create', // <--- Route นี้สำคัญ ใช้สร้าง User ใหม่
      name: 'user-create',
      component: UserCreate
    },
    {
      path: '/user/edit/:userId',
      name: 'user-edit',
      component: UserEdit
    },
    {
      path: '/user/:userId',
      name: 'user-show',
      component: UserShow
    }
  ]
})

export default router