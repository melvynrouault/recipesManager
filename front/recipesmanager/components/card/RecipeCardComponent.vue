<template>
<div class="col-md-4 col-lg-3 col-sm-12">
  <div class="cardContainer">
    <nuxt-link :to=" '/recipe/' + name">
    <div class="cardHeader">
      <p>{{ name }}</p>
      <figure>
        <img class="img_card" :src="require(`@/assets/img/${imgUrl}.jpg`)" :alt="name">
      </figure>
    </div>
    <div class="cardBody">
      <div class="difficulty">
        <img src="../../assets/img/muscle.png" alt="" class="iconsCardBody">
        <p>{{ dificultyNote }}/5 </p>
      </div>
      <div class="rate">
        <img src="../../assets/img/star.png" alt="" class="iconsCardBody">
        <p>  {{ likeNote }}/5 </p>
      </div>
      <div class="duration">
        <img src="../../assets/img/duration.png" alt="" class="iconsCardBody">
        <p>{{ duration }}min </p>
      </div>
      <div class="price">
        <img src="../../assets/img/price.png" alt="" class="iconsCardBody">
        <p>{{ globalPrice }}</p>
      </div>
    </div>
    <div class="cardFooter">
      <p>{{ descrip }}</p>
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
      default:'Ramen'
    },
    imgUrl: {
      type: String,
      default: 'ramen'
    },
    dificultyNote: {
      type: Number,
      default: 0
    },
    likeNote: {
      type: Number,
      default: 0
    },
    duration: {
      type: Number,
      default: 0
    },
    globalPrice: {
      type: String,
      default: ''
    },
    descrip: {
      type: String,
      default: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sunt unde non voluptas. Eligendi expedita iste voluptatem optio veritatis molestiae.'
    }
  }
}
</script>
<style lang="scss">

.cardContainer {
  background-color: #3568697a;
  margin-bottom: 2.5rem;
  a {
    text-decoration: none;
  }
  p {
    color: #fff;
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
  & > div {
    width: 25%;
    img {
      vertical-align: bottom;
      margin-right: .4rem;
    }
    p {
      margin-bottom: 0;
    }
    & > img, p{
      display: inline-flex;
    }
  }
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
.iconsCardBody {
  height: 2.5rem;
  width: 2.5rem;
}


</style>
