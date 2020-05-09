<template>
<div class="col-md-3">
  <div class="cardContainer">
    <div class="cardHeader">
      <p>Title</p>
    </div>
    <div class="cardBody">
      <div class="difficulty">
        <img src="../assets/img/muscle.png" alt="" class="iconsCardBody">
        <p>2/5 </p>
      </div>
      <div class="rate">
        <img src="../assets/img/star.png" alt="" class="iconsCardBody">
        <p>4.5/5 </p>
      </div>
      <div class="duration">
        <img src="../assets/img/duration.png" alt="" class="iconsCardBody">
        <p>30 min </p>
      </div>
      <div class="price">
        <img src="../assets/img/price.png" alt="" class="iconsCardBody">
        <p>5€</p>
      </div>
      <hr>
    </div>
    <div class="cardFooter">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti pariatur modi itaque dolorem soluta rem magni eos repellat suscipit laboriosam, adipisci dolore minima, enim illum aspernatur voluptatum dignissimos impedit minus?</p>
    </div>
  </div>
</div>
  <!-- <b-card img-src="~/assets/img/ramen.jpg" img-alt="ramen" class="ramenImg" img-top>
    <b-card-text class="cardtext">
      Some quick example text to build on the card and make up the bulk of the card's content.
    </b-card-text>
  </b-card>  -->
</template>
<style>

.cardContainer {
  height: 400px;
  width: 400px;
  background-image: url("../assets/img/ramen.jpg");
  background-size: contain;
  background-repeat: no-repeat;
}

.cardContainer p {
  color: white;
}
.cardHeader {
  height: 100px;
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
