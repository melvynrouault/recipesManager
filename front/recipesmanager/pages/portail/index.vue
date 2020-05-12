<template>
  <div class="row">
    <div class="title col-md-12">
      <h1>Welcome to recipe Manager !!</h1>
    </div>
      <div class="panel col-md-5 col-sm-12">
        <h2> Welcome Back !<br>sign in !</h2>
        <form class="form" action="post" @submit.prevent="Login" id="form_login">
          <Notif v-if="login.error != null" :message="login.error" />
          <input v-model="login.email" type="email" name="email" placeholder="Email..." required>
          <input v-model="login.pswd" type="password" name="password" placeholder="Password..." required>
        </form>
        <button form="form_login" class="btn">Let's go !</button>
      </div>
      <div class="panel col-md-5 offset-md-2 col-sm-12">
        <h2>First time here ?<br>Please sign up !</h2>
        <form class="form" action="post" @submit.prevent="Register" id="form_resgister">
          <Notif v-if="register.error != null" :message="register.error" />
          <input v-model="register.firstName" type="text" name="name"  placeholder="Name..." required>
          <input v-model="register.email" type="email" name="email" placeholder="Email..." required>
          <input v-model="register.pswd" type="password" name="password" placeholder="Password..." required>
          <input v-model="register.pswdConfirm" type="password" name="confirmPassword" placeholder="Confirm your password..." required>
        </form>
        <button form="form_resgister" type="submit" class="btn">Let's go !</button>
      </div>
  </div>
</template>

<script>

import Notif from "~/components/Notification/notification"

export default {
  components: {
    Notif
  },
  layout: 'portail',

  data () {
    return {
      login: {
        email: '',
        pswd: '',
        error: null
      },
      register: {
        firstName: '',
        email: '',
        pswd: '',
        pswdConfirm: '',
        error: null
      }
    }
  },
  methods: {
     async Login() {
      let data = {
        email: this.login.email,
        pswd: this.login.pswd
      }
      try {
        await this.$axios.post('/login', data )
          .then((resp) => {
          const token = resp.data.token
          localStorage.setItem('authToken', token)
          this.$auth.setUser(resp.data)
        })
        // this.$store.dispatch('getAllStores', null, {root:true})
        // this.$store.dispatch('aliments/getListAliments')
        this.$router.push('/')

      } catch (e) {
        this.login.error = "Email ou mot de passe invalide, réessayer."
        setTimeout(() => { 
          this.login.error = null;
        }, 3000);
      }
    },
     async Register () {
      let data = {
        firstName: this.register.firstName,
        email: this.register.email,
        pswd: this.register.pswd,
        pswdConfirm: this.register.pswdConfirm,
      }
      console.log(data);
      try {
        this.$axios.post('/register', data )
        this.$router.push('/')
      } catch (e) {
        this.register.error = "Les mots de passe ne sont pas identiques."
        setTimeout(() => { 
          this.register.error = null;
        }, 3000);
      }
    }
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