<template>
  <div>
    <h1>Show Menu</h1>
    <p>รายละเอียดเมนู ID: {{ menuId }}</p>
    <p><button @click="navigateTo('/menus')">กลับหน้ารายการ</button></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuId: null
    }
  },
  created() {
    // ดึงค่า ID มาเตรียมไว้ก่อนที่ Component จะปรากฏบนหน้าจอ [cite: 415, 463]
    this.menuId = this.$route.params.menuId
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    }
  }
}
</script>