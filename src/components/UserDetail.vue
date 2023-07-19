<template>
  <div>
    <p>{{ user ? user.name : '' }}</p>
    <p>{{ user ? user.username : '' }}</p>
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

