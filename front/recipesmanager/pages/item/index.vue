<template>
<div>
    <div class="row">
        <ItemCardComponent v-for="item of items" :key="item._id"
            :name="item.name"
            :price="item.price"
            :imgName="item.imgName"
        />
    </div>
</div>
</template>

<script>

import ItemCardComponent from '~/components/card/ItemCardComponent.vue';

export default {
data() {
    return {
        items: {},
    }
},
components: {
    ItemCardComponent,
},
async fetch ({ store, params }) {
    await store.dispatch('item/getAllItems');
},
created() {
    this.items = this.$store.getters['item/getAllItems'];
    console.log(this.items)
},
}
</script>

<style>

</style>