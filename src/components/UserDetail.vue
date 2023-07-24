<template>
  <div class="max-w-xl pb-8 mx-auto px-5 bg-slate-100">
    <div class="flex flex-col text-center py-5 ">
      <p class='px-3 py-3 border-b-4'>Name : {{ user ? user.name : '' }}</p>
      <p class='px-3 py-3'>UserName : {{ user ? user.username : '' }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      user: null,
      id: this.$route.params.id
    }
  },
  mounted() {
    this.fetchUser();
  },
  methods: {
    fetchUser() {
      axios
        .get('http://localhost:8000/users/' + this.id)
        .then((res) => { this.user = res.data })
        .catch(err => console.log(err))
    }
  }
}
</script>

