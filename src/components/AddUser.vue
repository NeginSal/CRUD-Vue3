<template>
  <form @submit.prevent="handleSubmit">
    <div className='flex flex-col justify-center items-center sm:flex-row sm:justify-evenly'>
      <div className='mb-2'>
        <input className='px-3 py-1 rounded-full border border-gray-600' v-model="name" />
      </div>
      <div className='mb-2'>
        <input className='px-3 py-1 rounded-full border border-gray-600' v-model="username" />
      </div>
      <div className='mb-2'>
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 rounded-full">
          Add
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  props: ['users'],
  data() {
    return {
      name: '',
      username: ''
    }
  },
  methods: {
    handleSubmit() {
      let newUser = {
        name: this.name,
        username: this.username
      }
      console.log(this.name, this.username)
      axios
        .post('http://localhost:8000/users',newUser )
        .then(() => {this.user = this.users.push(newUser) })
        .catch((err) => console.log(err))
      // axios.post("http://localhost:8000/users", newUser)
      //   .then(response => this.user = response.data.id)
    

        
    }
  }
}
</script>
