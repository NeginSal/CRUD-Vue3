<template>
  <div>
    <div v-if="users">
      <div v-for="user in users" :key="user.id">
        <UserDetail :user="user" />
      </div>

    </div>
  </div>
</template>

<script>
import UserDetail from './UserDetail.vue'
export default {
  components: {
    UserDetail,
  },
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
