<template>
  <div class="nv-navbar">
    <ul class="nav">
      <li><router-link :to="{name: 'coffees'}">เมนูกาแฟ</router-link></li>

      <li v-if="isUserLoggedIn"><router-link :to="{name: 'users'}">จัดการผู้ใช้งาน</router-link></li>
      
      <li v-if="!isUserLoggedIn"><router-link :to="{name: 'login'}">เข้าสู่ระบบ</router-link></li>

      <li v-if="isUserLoggedIn"><a href="#" v-on:click.prevent="logout">ออกจากระบบ</a></li>
    </ul>
    <div class="clearfix"></div>
  </div>
</template>

<script>
import { useAuthenStore } from '../stores/authen'

export default {
  computed: {
    isUserLoggedIn () {
      const authenStore = useAuthenStore()
      return authenStore.isUserLoggedIn
    }
  },
  methods: {
    logout () {
      const authenStore = useAuthenStore()
      authenStore.logout()
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style scoped>
.nv-navbar {
  background-color: #17c8aa; /* สีน้ำตาลกาแฟ */
  width: 100%;             /* กว้างเต็มจอ */
  padding: 15px 20px;      /* เพิ่มช่องว่างขอบซ้ายขวา */
  margin-bottom: 20px;
  box-sizing: border-box;  /* สำคัญ: เพื่อให้นับรวม padding ในความกว้าง */
  position: fixed;         /* (ทางเลือก) ถ้าอยากให้เมนูติดค้างบนสุดตลอดเวลา */
  top: 0;
  left: 0;
  z-index: 1000;           /* ให้ลอยอยู่เหนือเนื้อหาอื่น */
}

.nv-navbar ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;           /* ใช้ Flexbox จัดเมนูแนวนอนง่ายกว่า */
  gap: 15px;               /* ระยะห่างระหว่างปุ่มเมนู */
}

.nv-navbar li a {
  padding: 10px 15px;
  text-decoration: none;
  color: white;
  font-weight: bold;
  border-radius: 4px;      /* มุมมนนิดๆ */
  transition: background-color 0.3s;
}

.nv-navbar li a:hover {
  background-color: #28d4bd;
  color: #22e4eb;
}

.nv-navbar li a.router-link-active {
  background-color: #0d6063;
  color: gold;
}
</style>