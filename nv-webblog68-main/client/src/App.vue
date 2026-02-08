<template>
  <div id="app">
    <coffee-header />

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  /* margin-top: 20px; <--- แนะนำให้ลบหรือ comment ออกครับ เพราะ Navbar เรามี margin ในตัวแล้ว */
}

/* แถม: ลบขอบขาวรอบๆ จอ เพื่อให้ Navbar ชิดขอบสวยงาม */
body {
  margin: 0;
  padding: 0;
}
</style>