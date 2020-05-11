<template>
<div class="col-md-4 col-lg-3 col-sm-12">
  <div class="cardContainer">
    <div class="cardHeader">
      <p>{{ name }}</p>
      <figure>
        <img :src="require(`@/assets/img/${imgUrl}.jpg`)" :alt="name">
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
      <hr>
    </div>
    <div class="cardFooter">
      <p>{{ descrip }}</p>
    </div>
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
      type: Number,
      default: 0
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
  background-color: #35686988;
}
.cardHeader {
  p{
    font-weight: bold;
    font-size:2.1rem;
  }
}
.cardContainer p {
  color: white;
}

.iconsCardBody {
  height: 25px;
  width: 25px;
}

.difficulty, .rate, .duration, .price {
  margin-left: 7%;
  display: inline-flex;
}

</style>
