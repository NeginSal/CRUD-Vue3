<template>
  <div v-if="users">
    <div v-for="user in users" :key="user.id">
      <div>
        <p>{{ user.name }}</p>
        <p>{{ user.username }}</p>
      </div>
      <div>
        <p>EDIT</p>
        <p @click="deleteUser(user.id)">DELETE</p>
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
    }
  }


}
</script>
