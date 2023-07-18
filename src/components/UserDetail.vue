<template>
  <div>
    <div>
       {{ id }}
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      id: this.$route.params.id,
    }
  }

}
</script>

