<template>
  <div>
    <h1>Create an item</h1>
    <div>
      <div class="div_form_add_item">
        <h2>Please fill the form !</h2>
        <br/>
        <form class="form" action="post" id="form_add_item" @submit.prevent="AddItem">    
          <input v-model="item.name" type="text" name="text" placeholder="Name..." required>
          <input v-model="item.price" type="number" name="price" placeholder="Price..." required>
          <!-- récupérer le nom du fichier -->
          <!-- this.imgName = nom du fichier -->
          <!-- <input type="file" id="picture" name="picture" accept="image/png, image/jpeg" @click="download"> -->
        </form>
        <br/>
        <button form="form_add_item" class="btn">Create !</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: {
        name: '',
        price: '',
        imgName: 'image.png'
      }
    }
  },
  middleware: 'auth',
  methods: {
    async AddItem() {
      let data = {
          name: this.item.name,
          price: this.item.price,
          imgName: this.item.imgName,
        }
        try {
          this.$axios.post('/item/new', data )
          .then((response)=>{
            this.$router.push('/items');
          })
          .catch(error=>{
            return error;
          })
        } catch (e) {
        }
    }
  }
}
</script>

<style lang="scss">
  .div_form_add_item {
    & > p {
      display: inline-block;
    }
  }

  .form {
  //min-height: 15rem;
  input{
    display: block;
    margin: 10px;
    width: 200px;
    background-color:#B9E4C9;
    border: 1px solid #FD5523;
    padding: .4rem .8rem;
  }
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
</style>