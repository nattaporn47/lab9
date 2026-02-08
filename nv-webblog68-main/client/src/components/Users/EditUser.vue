<template>
  <div>
    <h1>Edit User</h1>
    <form v-on:submit.prevent="editUser">
        <p>Name: <input type="text" v-model="user.name"></p>
        <p>Lastname: <input type="text" v-model="user.lastname"></p>
        <p>Email: <input type="text" v-model="user.email"></p>
        <p>Password: <input type="password" v-model="user.password"></p>
        <p>Status: <input type="text" v-model="user.status"></p>
        <p><button type="submit">Edit User</button></p>
    </form>
  </div>
</template>

<script>
import UsersService from '../../services/UsersService'

export default {
    data () {
        return {
            user: {
                name: '',
                lastname: '',
                email: '',
                password: '',
                status: ''
            }
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
        async editUser () {
            try {
                await UsersService.put(this.user)
                this.$router.push({
                    name: 'users'
                })
            } catch (err) {
                console.log(err)
            }
        }
    }
}
</script>
<style scoped>
</style>