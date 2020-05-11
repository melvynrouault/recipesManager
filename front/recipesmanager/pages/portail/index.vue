<template>
  <div>
    <div>
      <h1>Welcome to recipe Manager !!</h1>
    </div>
    <div class="containerForm col-md-12">
      <div class="col-md-6">
        <div class="col-md-3">
        <h2>First time here ?<br>Please sign up !</h2>
        </div>
        <div class="col-md-2"></div>
        <div class="col-md-3">
          <b-form-group
            id="fieldset-1"
            description="Let us know your name."
            label="Enter your name"
            label-for="input-1"
            :invalid-feedback="invalidFeedback"
            :valid-feedback="validFeedback"
            :state="state">
            <b-form-input id="input-1" v-model="name" :state="state" trim></b-form-input>
          </b-form-group>
        </div>
      </div>
      <div></div>
      <div class="col-md-6">
        <div class="col-md-3">
        <h2> Welcome Back !<br>sign in !</h2>
        </div>
        <div class="col-md-2"></div>
        <div class="col-md-3">
          <b-form-group
            id="fieldset-1"
            description="Let us know your name."
            label="Enter your name"
            label-for="input-1"
            :invalid-feedback="invalidFeedback"
            :valid-feedback="validFeedback"
            :state="state">
            <b-form-input id="input-1" v-model="name" :state="state" trim></b-form-input>
          </b-form-group>
        </div>
      </div>
          
    </div>
    <div>
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue';

export default {
  components: {
    Navbar,
  }
}
</script>

<style>
.containerForm {
  display: inline-flex;
}
</style>