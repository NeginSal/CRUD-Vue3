<template>
  <div>
    <div>
      <p>{{ user.name }}</p>
      <p>{{ user.username }}</p>
    </div>
    <div>
      <p>EDIT</p>
      <p @click="deleteUser(user.id)">DELETE</p>
    </div>


  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['user'],

  methods: {
    deleteUser(id) {
      axios
        .delete('http://localhost:8000/users/' + id)
        .then(() => this.$emit('delete', this.user.id))
        .catch((err) => console.log(err))
    }
  }
}
</script>

