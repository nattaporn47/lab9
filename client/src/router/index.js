import { createRouter, createWebHistory } from 'vue-router'

// Import Components
import UserIndex from '@/components/Users/Index.vue'
import UserCreate from '@/components/Users/CreateUser.vue'
import UserEdit from '@/components/Users/EditUser.vue'
import UserShow from '@/components/Users/ShowUser.vue'
import Login from '@/components/Login.vue'

// Blogs
import BlogIndex from '@/components/Blogs/Index.vue'
import BlogCreate from '@/components/Blogs/CreateBlog.vue'
import BlogEdit from '@/components/Blogs/EditBlog.vue'
import BlogShow from '@/components/Blogs/ShowBlog.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/users',
      name: 'users',
      component: UserIndex
    },
    {
      path: '/user/create',
      name: 'users-create',
      component: UserCreate
    },
    {
      path: '/user/edit/:userId',
      name: 'user-edit',
      component: UserEdit
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: UserShow
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    // blogs
    {
        path: '/blogs',
        name: 'blogs',
        component: BlogIndex
    },
    {
        path: '/blog/create',
        name: 'blogs-create', // แก้ไขชื่อให้สื่อความหมาย
        component: BlogCreate
    },
    {
        path: '/blog/edit/:blogId',
        name: 'blog-edit',
        component: BlogEdit
    },
    {
        path: '/blog/:blogId',
        name: 'blog',
        component: BlogShow
    }
  ],
})

export default router
