<template>
  <div class="flex items-center justify-center">
    <form @submit.prevent="handleSubmit">
      <div class='flex flex-col justify-center items-center bg-slate-100 p-10 mt-10 rounded-md'>
        <input v-model="name" class='my-2 px-5 py-1 rounded-full border border-gray-600' />
        <input v-model="username" class='my-2 px-5 py-1 rounded-full border border-gray-600' />
      </div>
      <div class="flex my-2 mx-20">
        <button class='text-white mx-1 px-5 py-1 rounded-full bg-blue-500 hover:bg-blue-700'>Update User</button>
        <button class='text-white mx-1 px-5 py-1 rounded-full bg-blue-500 hover:bg-blue-700'
          @click="backToHome">Cancel</button>
      </div>

    </form>
  </div>
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
    },
    backToHome() {
      this.$router.push('/')
    }
  },
}


</script>

