<template>
  <div class="row">
    <div class="title col-md-12">
      <h1>Welcome to recipe Manager !!</h1>
    </div>
      <div class="panel col-md-5 col-sm-12">
        <h2> Welcome Back !<br>sign in !</h2>
        <form class="form" action="post">
          <input type="email" name="email" placeholder="Email...">
          <input type="password*" name="password" placeholder="Password...">
        </form>
        <span class="btn">Let's go !</span>
      </div>
      <div class="panel col-md-5 offset-md-2 col-sm-12">
        <h2>First time here ?<br>Please sign up !</h2>
        <form class="form" action="post">
          <input type="text" name="name"  placeholder="Name...">
          <input type="email" name="email" placeholder="Email...">
          <input type="password*" name="password" placeholder="Password...">
        </form>
        <span class="btn">Let's go !</span>
      </div>
  </div>
</template>

<script>
import Navbar from '~/components/nav/Navbar.vue';

export default {
  components: {
    Navbar,
  }
}
</script>

<style lang="scss">
.title {
  text-align: center;
  margin: 3.6rem 0 7rem;
  color: #356869;
  h1 {
      font-size: 4.2rem;
  }
}
.form {
  min-height: 15rem;
  input{
    display: block;
    margin: 0 auto 2.4rem;
    width: 100%;
    background-color:#B9E4C9;
    border: 1px solid #FD5523;
    padding: .4rem .8rem;
  }
}
.panel, .or {
  text-align: center;
}

.panel {
  background-color: #B9E4C9;
  padding: 4rem 6rem;
  margin-bottom: 3.6rem;
  h2 {
    font-size: 2.1rem;
    color: #356869;
    font-weight: bold;
    margin-bottom: 5rem;
  }
  .btn {
    width: 15rem;
    background-color: #FD5523;
    color: #fff;
    font-size: 1.6rem;
    font-weight: bold;
    margin: 0 auto;
    transition: .4s ease all;
    &:hover {
      background-color: rgb(255, 131, 93);
    }
  }
}
</style>