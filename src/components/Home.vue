<template>
  <div>
    <UserList/>
    <AddUser/>
  </div>
</template>

<script>
import  UserList  from "./UserList.vue";
import  AddUser  from "./AddUser.vue";

export default {
  components: {
    UserList,
    AddUser,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>