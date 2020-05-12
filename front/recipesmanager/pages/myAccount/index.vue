<template>
  <div>
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

}
</script>

<style lang="scss">
  .userInfos {
    & > p {
      display: inline-block;
    }
  }
</style>