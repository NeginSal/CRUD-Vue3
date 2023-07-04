<template>
  <div>
    <UserList :users="users"/>
    <AddUser :users="users"/>
  </div>
</template>

<script>
import  UserList  from "./UserList.vue";
import  AddUser  from "./AddUser.vue";
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
    axios
      .get('http://localhost:8000/users')
      .then((res) => { this.users = res.data })
      .catch(err => console.log(err))
  },
};
</script>

<style lang="scss" scoped>
</style>