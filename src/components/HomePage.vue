<template>
  <div class="max-w-xl pb-8 mx-auto px-5 bg-slate-100">
    <UserList :users="users" @userDeleted="handleUserDeleted" />
    <AddUser :users="users" @add="addUser" />
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
    },
    addUser (user) {
      this.users.push(user);
    }
  }
};
</script>