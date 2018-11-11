<template>
  <div>{{path}}</div>
</template>
<script>
  export default {
    data() {
      return {
        path: this.$route.params.id || 'default'
      }
    }
  }
</script>
<style>

</style>
