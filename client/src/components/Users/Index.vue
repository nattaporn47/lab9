<template>
  <div>
    <h1>Get All Users</h1>
    <p><button @click="navigateTo('/user/create')">สร้างผู้ใช้งาน</button></p>
  </div>
</template>

<script>
import axios from "axios"; // Import axios เข้ามาใช้งานโดยตรง

export default {
  data() {
    return {
      users: [],
    };
  },

  // Logic จะเขียนตรงนี้
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
  },

  async created(){
    const response = await axios.get("http://localhost:8081/users")
    this.users = response.data;
    console.log("Fetched users:", this.users);
  }
};
</script>

<style scoped>
/* CSS เฉพาะหน้านี้ */
</style>
