<template>
  <form @submit.prevent="handleSubmit">
    <div class='flex flex-col justify-center items-center '>
      <div class='mb-2'>
        <input class='px-3 py-1 rounded-full border border-gray-600' v-model="name" placeholder="Name" />
      </div>
      <div class='mb-2'>
        <input class='px-3 py-1 rounded-full border border-gray-600' v-model="username" placeholder="UserName" />
      </div>
      <div class='mb-2'>
        <button class="bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 rounded-full">
          Add
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    'users': []
  },
  data() {
    return {
      name: '',
      username: ''
    }
  },
  methods: {
    handleSubmit() {
      axios
        .post("http://localhost:8000/users", {
          name: this.name,
          username: this.username,
        })
        .then((response) => {
          const data = response.data;
          this.$emit('add', data);
          this.name = "";
          this.username = "";
        });
    },
  }
}
</script>
