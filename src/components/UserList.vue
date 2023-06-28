<template>
  <div>
    <div v-if="users">
      <div v-for="user in users" :key="user.id">
        <p>{{ user.name }}</p>
        <p>{{ user.username }}</p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      users: []
    }
  },
  mounted() {
    fetch('http://localhost:8000/users')
      .then(res => res.json())
      .then(data => this.users = data)
      .catch(err => console.log(err.message))
  }
}
</script>
