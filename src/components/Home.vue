<template>
  <div>
    <UserList :users="users" @userDeleted="handleUserDeleted" />
    <AddUser :users="users" />
  </div>
</template>

<script>
import UserList from "./UserList.vue";
import AddUser from "./AddUser.vue";
import axios from 'axios';

export default {
  components: {
    UserList,
    AddUser,
  },
  data() {
    return {
      users: []
    }
  },
  mounted() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      axios
        .get('http://localhost:8000/users')
        .then((res) => { this.users = res.data })
        .catch(err => console.log(err))
    },
    handleUserDeleted(userId) {
      this.users = this.users.filter((user) => user.id !== userId);
    }
  }
};
</script>

<style lang="scss" scoped></style>