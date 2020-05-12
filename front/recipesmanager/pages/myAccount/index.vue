<template>
  <div>
    <pre>{{ getUser() }}</pre>
    <p>{{ this.user }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: '',
    }
  },
  created() {
    this.$store.dispatch('user/fetchUser');
  },
  methods: {
    getUser() {
      this.user = this.$store.getters['user/getOneUser'];
    }
  }
}
</script>

<style>

</style>