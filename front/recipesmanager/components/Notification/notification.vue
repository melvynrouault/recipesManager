<template>
  <div class="notification">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: 'Notification',
  props: {
    message : {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss">
  .notification {
    background-color: rgb(241, 99, 99);
    color: #fff;
    border-radius: 4px;
    padding: 2rem 1rem;
    margin-bottom: 1rem;
    font-size: 1.2rem;
    border: 2px solid rgb(255, 121, 121);
  }
</style>
