<template>
  <div>
      <!-- appBar -->
      <h2>Items</h2>
        <div class="card-column p-3"> <!--  -->
            <div class="card">+</div> <!-- id="addItem"-->
            <div v-for="item in items" :key="item">
                <Item />
            </div>
        </div>
  </div>
</template>

<script>
import Item from '~/components/Item.vue'

export default {
    components : {
        //appBar
        Item
    },
    data(){
        return{
            items = getIte
        }
    }
}
</script>

<style>
.card-column{
    column-count: 5;
}

.listItems{
    display: flex;
    flex-direction: row;
}

#addItem{
    border: solid 2px;
    width: 150px;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    color: #356869;
    background: #FFFBE6;
}

h2{
    margin: 30px;
}

</style>