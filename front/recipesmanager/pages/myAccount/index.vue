<template>
  <div>
    <h1>My Account</h1>
    <div>
      <div class="userInfos">
        <p>Name: {{ this.user.firstName }}</p>
        <p></p>
      </div>
      <div class="userInfos">
        <p>Email: {{ this.user.email }}</p>
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
  // async fetch({store, params}) {
  //     await store.dispatch
  // },
  async created() {
    await this.$store.dispatch('user/fetchUser');
    this.user = this.$store.getters['user/getOneUser'];
    console.log(JSON.stringify(this.user))
  },
}
</script>

<style lang="scss">
  .userInfos {
    & > p {
      display: inline-block;
    }
  }
</style>n