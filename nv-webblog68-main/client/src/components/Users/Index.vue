<template>
  <div>
    <h1>Get All Users</h1>
    <p><button v-on:click="navigateTo('/user/create')">สร้างผู้ใช้งาน</button></p>
    <hr>
    <div v-if="users.length">
        <div><b>จำนวนผู้ใช้งาน:</b> {{ users.length }}</div>
        <div v-for="user in users" v-bind:key="user.id">
            <div><b>id:</b> {{ user.id }}</div>
            <div><b>ชื่อ-นามสกุล:</b> {{ user.name }} - {{ user.lastname }}</div>
            <div><b>email:</b> {{ user.email }}</div>
            <div><b>status:</b> {{ user.status }}</div>
            <div>
                <button v-on:click="navigateTo('/user/'+user.id)">ดูข้อมูล</button>
                <button v-on:click="navigateTo('/user/edit/'+user.id)">แก้ไขข้อมูล</button>
                <button v-on:click="deleteUser(user)">ลบข้อมูล</button>
            </div>
            <hr>
        </div>
    </div>
  </div>
</template>

<script>
import UsersService from '../../services/UsersService' // เรียกใช้ Service

export default {
    data () {
        return {
            users: []
        }
    },
    async created () {
        try {
            this.users = (await UsersService.index()).data
        } catch (error) {
            console.log(error)
        }
    },
    methods: {
        navigateTo (route) {
            this.$router.push(route)
        },
        async deleteUser (user) {
            let result = confirm("คุณต้องการลบข้อมูลใช่หรือไม่?")
            if (result) {
                try {
                    await UsersService.delete(user)
                    this.refreshData()
                } catch (err) {
                    console.log(err)
                }
            }
        },
        async refreshData() {
            this.users = (await UsersService.index()).data
        }
    }
}
</script>
<style scoped>
</style>