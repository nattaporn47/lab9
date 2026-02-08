<template>
  <div class="container">
    <h1>Edit Menu</h1>
    
    <p class="text-id">กำลังแก้ไขเมนู ID: {{ menuId }}</p>
    
    <p><button class="btn-create" @click="navigateTo('/menus')">ยกเลิก</button></p>
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
    this.menuId = this.$route.params.menuId
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
  /* จัดหน้า */
  .container {
    padding: 20px;
    font-family: Arial, sans-serif;
  }

  /* หัวข้อ h1 สีฟ้า */
  h1 {
    color: #17e5e2; 
    margin-bottom: 20px;
  }

  /* --- 2. ส่วนที่เพิ่มใหม่: เปลี่ยนสีข้อความ ID --- */
  .text-id {
    color: #f39c12; /* สีส้ม (แก้ไขเป็นสีที่ชอบได้เลย) */
    font-size: 18px; /* ปรับตัวหนังสือให้ใหญ่ขึ้นนิดนึง */
    font-weight: bold; /* ทำตัวหนา */
    margin-bottom: 20px; /* เว้นช่องว่างด้านล่าง */
  }

  /* ปุ่มยกเลิกสีแดง */
  .btn-create {
    background-color: #ff4757; 
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .btn-create:hover {
    background-color: #ff6b81; 
  }
</style>