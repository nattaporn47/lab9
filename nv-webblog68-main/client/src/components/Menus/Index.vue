<template>
  <div class="container">
    <h1>Get All Menus</h1>
    <p><button class="btn-create" @click="navigateTo('/menu/create')">สร้างเมนูกาแฟ</button></p>
  </div>
</template>

<script>
export default {
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
  /* จัดกึ่งกลางและเว้นขอบ */
  .container {
    padding: 20px;
    font-family: Arial, sans-serif;
  }

  /* เปลี่ยนสีหัวข้อ h1 */
  h1 {
    color: #17e5e2; /* สีน้ำเงินเข้ม */
    margin-bottom: 20px;
  }

  /* ตกแต่งปุ่ม */
  .btn-create {
    background-color: #42b983; /* สีเขียวแบบ Vue */
    color: white;              /* สีตัวหนังสือในปุ่ม */
    border: none;
    padding: 10px 20px;        /* ความอ้วนของปุ่ม (บนล่าง ซ้ายขวา) */
    font-size: 16px;
    border-radius: 5px;        /* ทำมุมมน */
    cursor: pointer;           /* เปลี่ยนเมาส์เป็นรูปมือ */
    transition: background-color 0.3s; /* เอฟเฟกต์ตอนเปลี่ยนสี */
  }

  /* เปลี่ยนสีตอนเอาเมาส์ไปชี้ (Hover) */
  .btn-create:hover {
    background-color: #3aa876; /* สีเขียวเข้มขึ้น */
  }
</style>