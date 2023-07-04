<template>
  <div>
    <div v-if="users">
      <div v-for="user in users" :key="user.id">
        <UserDetail :user="user" @delete="handleDelete" />
      </div>

    </div>
  </div>
</template>

<script>
import axios from 'axios';
import UserDetail from './UserDetail.vue';

export default {
  components: {
    UserDetail,
  },
  props:['users'],
  // data() {
  //   return {
  //     users: []
  //   }
  // },
  // mounted() {
  //   axios
  //     .get('http://localhost:8000/users')
  //     .then((res) => { this.users = res.data })
  //     .catch(err => console.log(err))
  // },
  methods: {
    handleDelete(id) {
      this.users = this.users.filter((user) => { return user.id !== id })
    },
  },
}
</script>
