<template>
  <p>{{ id }}</p>
  <form @submit.prevent="handleSubmit">
    <input v-model="name" required />
    <input v-model="username" required />
    <button>Update User</button>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      id: this.$route.params.id,
      name: "",
      username: ""
    }
  },
  mounted() {
    axios
      .get('http://localhost:8000/users/' + this.id)
      .then((user) => {
        this.name = user.data.name;
        this.username = user.data.username;
      })
  },
  methods: {
    handleSubmit() {
      axios
        .put('http://localhost:8000/users/' + this.id, {
          name: this.name,
          username: this.username,
        })
        .then(() => {
          this.$router.push("/");
        })
    }
  },
}


</script>

