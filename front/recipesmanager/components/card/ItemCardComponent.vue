<template>
<div class="col-md-4 col-lg-2 col-sm-12">
  <div class="cardContainer">
    <!-- <nuxt-link :to=" '/item/' + name"> -->
    <div class="cardHeader">
      <p>{{ name }}</p>
      <figure>
        <img class="img_card" :src="require(`@/assets/img/img_aliment/${imgName}`)" :alt="name">
      </figure>
    </div>
    <div class="cardBody">
      <div class="price">
        <p>Price : {{ price }}$</p>
      </div>
    </div>
    <!-- </nuxt-link> -->
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

.cardContainer {
  background-color: #B9E4C9;
  margin-bottom: 2.5rem;
  a {
    text-decoration: none;
    color: inherit;
  }
  &:hover {
    .img_card{
      transform: scale(1.2) translateZ(0);
    }
  }
}

.cardHeader p,
.cardBody,
.cardFooter {
  padding: .8rem;
}

.cardHeader {
  .img_card {
    transition: .1s ease all;
    width: 100%;
    min-height: 15rem;
    max-height: 15rem;
    object-fit: cover;
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

.cardBody {
  display: flex;
  justify-content: space-between;
  text-align: center;
  position: relative;
  font-size: 1.2rem;
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
}


</style>
