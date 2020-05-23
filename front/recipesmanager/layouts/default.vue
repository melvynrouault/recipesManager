<template>
  <div>
    <navBar />
    <nuxt keep-alive :keep-alive-props="{ max: 10 }" />
  </div>
</template>

<script>
import navBar from '~/components/nav/Navbar';
export default {
  components: {
    navBar
  }
}
</script>
<style>

</style>
