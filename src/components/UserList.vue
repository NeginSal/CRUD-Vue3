<template>
  <div v-if="users.length" class='py-5'>
    <div v-for="user in  users " :key="user.id" class='flex justify-between border-b-4'>
      <div class="flex ">
        <router-link :to="'/users/' + user.id">
          <p class='my-3 px-3'>{{ user.name }}</p>
        </router-link>
        <p class='my-3 px-3'>{{ user.username }}</p>
      </div>
      <div class="flex ">
        <p @click="updateUser(user.id)" class='mx-2 my-3 px-2 py-1 text-green-800
     hover:bg-green-400 hover:rounded-md hover:border hover:border-green-800'>EDIT</p>
        <p @click="deleteUser(user.id)" class='my-3 px-2 py-1 text-red-800 
     hover:bg-red-400 hover:rounded-md hover:border hover:border-red-800'>DELETE</p>
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

  props: ['users'],
  methods: {
    deleteUser(id) {
      axios
        .delete(`http://localhost:8000/users/${id}`)
        .then(() => {
          this.$emit('userDeleted', id)
        })
        .catch((error) => { console.log(error) })
    },
    updateUser(id) {
      this.$router.push(`/user/${id}`)
    }
  }
}
</script>
