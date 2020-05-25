<template>
  <div>
    <p>{{ this.user }}</p>
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
  mounted() {
    this.$store.dispatch('user/fetchUser');
    setTimeout(() => { 
      this.user = this.$store.getters['user/getOneUser'];
      console.log(JSON.stringify(this.user))
    }, 50);
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