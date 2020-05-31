<template>
<div class="col-md-4 col-lg-2 col-sm-12">
  <div class="cardContainer addcard">
    <nuxt-link :to="'/recipe'">
    <div class="cardAddBody">
        <figure>
            <img class="plus" :src="require(`@/assets/img/add.png`)">
        </figure>
    </div>
    </nuxt-link>
  </div>
</div>

</template>

<script>
export default {
  props: {
    name: {
        type: String,
        default:''
    },
    price: {
        type: Number,
        default: 0
    },
    imgName: {
        type: String,
        default: ''
    }
  },
}
</script>
<style lang="scss">

.addcard{
    height: 24rem;
}

.cardContainer {
  background-color: #B9E4C9;
  margin-bottom: 2.5rem;
  a {
    text-decoration: none;
    color: inherit;
  }
  &:hover {
    .plus{
      transform: scale(1.2) translateZ(0);
    }
  }
}

.cardAddHeader p,
.cardAddBody {
  padding: .8rem;
}

.cardAddHeader {
    figure {
      display: flex;
  }

  p{
    font-weight: bold;
    font-size:2.1rem;
  }
  p, figure {
    margin-bottom: 0;
    overflow: hidden;
  }
}

.cardAddBody {
  display: flex;
  justify-content: space-between;
  text-align: center;
  position: relative;
  font-size: 1.2rem;
  height: 100%;
  &:after {
    content:'';
    position: absolute;
    display: block;
    margin: 0 auto;
    bottom: 0;
    left:0;
    right: 0;
    width: 85%;
    height: 1px;
    background-color:#FD5523;
  }

  .plus {
    transition: .1s ease all;
    height: 80%;
    margin-top: 20px;
  }
}


</style>
