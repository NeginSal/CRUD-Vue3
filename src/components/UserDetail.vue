<template>
  <div>
    <div>
      <p>{{ user.name }}</p>
      <p>{{ user.username }}</p>
    </div>
  </div>
</template>

<script>

export default {
  props: ['user'],
}
</script>

