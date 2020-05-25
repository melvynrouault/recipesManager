<template>
  <div>
    <p>{{ this.user }}</p>
    <h1>My Account</h1>
    <div>
      <div class="userInfos">
        <p>Name: </p>
        <p></p>
      </div>
      <div class="userInfos">
        <p>Email: </p>
        <p></p>
      </div>
    </div>
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

<style lang="scss">
  .userInfos {
    & > p {
      display: inline-block;
    }
  }
</style>n