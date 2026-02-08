<template>
  <div>
    <h2>รายการเมนูกาแฟ</h2>
    
    <div v-if="isUserLoggedIn">
      <p>ยินดีต้อนรับ Admin | <button v-on:click="logout">Logout</button></p>
    </div>
    <div v-else>
      <p>บุคคลทั่วไป (เข้าสู่ระบบเพื่อจัดการข้อมูล)</p>
    </div>

    <p>
      <button v-if="isUserLoggedIn" v-on:click="navigateTo('/coffee/create')">
        สร้างเมนูใหม่
      </button>
    </p>

    <h2>จำนวนเมนู {{ coffees.length }}</h2>

    <div v-for="coffee in coffees" v-bind:key="coffee.id">
      <p>id: {{ coffee.id }}</p>
      <p>ชื่อเมนู: {{ coffee.name }}</p>
      <p>ราคา: {{ coffee.price }}</p>
      <p>ประเภท: {{ coffee.type }}</p>
      <p>
        <button v-on:click="navigateTo('/coffee/'+ coffee.id)">ดูข้อมูล</button>
        
        <button v-if="isUserLoggedIn" v-on:click="navigateTo('/coffee/edit/'+ coffee.id)">แก้ไขข้อมูล</button>
        <button v-if="isUserLoggedIn" v-on:click="deleteCoffee(coffee)">ลบข้อมูล</button>
      </p>
      <hr>
    </div>
  </div>
</template>

<script>
import CoffeesService from '../../services/CoffeesService'
import { useAuthenStore } from '../../stores/authen' // 1. import store เข้ามา

export default {
  data () {
    return {
      coffees: []
    }
  },
  // 2. สร้าง computed property เพื่อเช็คสถานะ Login ตลอดเวลา
  computed: {
    isUserLoggedIn () {
      const authenStore = useAuthenStore()
      return authenStore.isUserLoggedIn
    }
  },
  async created () {
    // ดึงข้อมูลกาแฟ (Route นี้เป็น public ใครก็ดูได้)
    try {
      this.coffees = (await CoffeesService.index()).data
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    // 3. เพิ่ม method logout
    logout () {
      const authenStore = useAuthenStore()
      authenStore.logout()
      // เมื่อ logout เสร็จจะรีเฟรชหน้าเดิม หรือเปลี่ยนหน้าก็ได้
      // ในที่นี้ถ้าอยู่หน้าเดิม ปุ่มต่างๆ จะหายไปเองเพราะ v-if
      this.$router.push({ name: 'login' }) 
    },
    navigateTo (route) {
      this.$router.push(route)
    },
    async deleteCoffee (coffee) {
      let result = confirm("คุณต้องการลบข้อมูลใช่หรือไม่?")
      if (result) {
        try {
          await CoffeesService.delete(coffee)
          this.refreshData()
        } catch (err) {
          console.log(err)
          // ถ้า Token หมดอายุ หรือไม่มีสิทธิ์ จะเข้า catch นี้
          if (err.response && err.response.status === 403) {
            alert("คุณไม่มีสิทธิ์ในการลบข้อมูลนี้ หรือ Session หมดอายุ")
            this.logout()
          }
        }
      }
    },
    async refreshData() {
      this.coffees = (await CoffeesService.index()).data
    }
  }
}
</script>
<style scoped>
</style>