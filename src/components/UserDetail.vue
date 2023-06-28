<template>
  <div>
    <p>{{ user.name }}</p>
    <p>{{ user.username }}</p>

  </div>
</template>

<script>
export default {

  props:['user']
}
</script>

