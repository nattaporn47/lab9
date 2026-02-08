<template>
  <div>
    <h1>แก้ไขเมนูกาแฟ</h1>
    <form v-on:submit.prevent="editCoffee">
      <p>ชื่อเมนู: <input type="text" v-model="coffee.name"></p>
      <p>ราคา: <input type="number" v-model="coffee.price"></p>
      <p>ประเภท: <input type="text" v-model="coffee.type"></p>
      <p><button type="submit">แก้ไขข้อมูล</button></p>
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
  async created () {
    try {
      let coffeeId = this.$route.params.coffeeId
      this.coffee = (await CoffeesService.show(coffeeId)).data
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    async editCoffee () {
      try {
        await CoffeesService.put(this.coffee)
        this.$router.push({ name: 'coffees' })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>