<template>
  <div>
    <h1>Login ร้านกาแฟ</h1>
    <form v-on:submit.prevent="onLogin">
      <p>Email: <input type="text" v-model="email" /></p>
      <p>Password: <input type="password" v-model="password" /></p>
      <p><button type="submit">Login</button></p>
      <div v-if="error" style="color:red">{{error}}</div>
    </form>
  </div>
</template>

<script>
// แก้ไขบรรทัด Import ตรงนี้ครับ
import AuthenService from '../services/AuthenService' // เปลี่ยนจาก @ เป็น ..
import { useAuthenStore } from '../stores/authen'     // เปลี่ยนจาก @ เป็น ..

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async onLogin () {
      try {
        const response = await AuthenService.login({
          email: this.email,
          password: this.password
        })
        
        const authenStore = useAuthenStore()
        authenStore.setToken(response.data.token)
        authenStore.setUser(response.data.user)

        // ล็อกอินเสร็จให้เด้งไปหน้ารายการกาแฟ
        this.$router.push({ name: 'coffees' }) 

      } catch (error) {
        console.log(error)
        this.error = error.response?.data?.error
      }
    }
  }
}
</script>