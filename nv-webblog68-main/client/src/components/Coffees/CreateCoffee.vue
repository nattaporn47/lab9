<template>
  <div>
    <h1>สร้างเมนูกาแฟ</h1>
    <form v-on:submit.prevent="createCoffee">
      <p>ชื่อเมนู: <input type="text" v-model="coffee.name"></p>
      <p>ราคา: <input type="number" v-model="coffee.price"></p>
      <p>ประเภท: <input type="text" v-model="coffee.type"></p>
      <p><button type="submit">บันทึก</button></p>
    </form>
  </div>
</template>

<script>
import CoffeesService from '../../services/CoffeesService'

export default {
  data () {
    return {
      coffee: {
        name: '',
        price: '',
        type: ''
      }
    }
  },
  methods: {
    async createCoffee () {
      try {
        await CoffeesService.post(this.coffee)
        this.$router.push({ name: 'coffees' })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>