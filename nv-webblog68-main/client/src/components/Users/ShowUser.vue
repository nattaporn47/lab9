<template>
  <div>
    <h1>Show User</h1>
    <div v-if="user">
        <p><b>User ID:</b> {{ user.id }}</p>
        <p><b>ชื่อ-นามสกุล:</b> {{ user.name }} - {{ user.lastname }}</p>
        <p><b>Email:</b> {{ user.email }}</p>
        <p><b>Status:</b> {{ user.status }}</p>
        <p><b>Created At:</b> {{ user.createdAt }}</p>
    </div>
    <p>
        <button v-on:click="navigateTo('/users')">กลับ</button>
    </p>
  </div>
</template>

<script>
import UsersService from '../../services/UsersService'

export default {
    data () {
        return {
            user: null
        }
    },
    async created () {
        try {
            var userId = this.$route.params.userId
            this.user = (await UsersService.show(userId)).data
        } catch (error) {
            console.log(error)
        }
    },
    methods: {
        navigateTo (route) {
            this.$router.push(route)
        }
    }
}
</script>
<style scoped>
</style>