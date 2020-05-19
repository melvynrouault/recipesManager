<template>
    <div class="card">
        <p>{{ this.name }}</p>
        <hr/>
        <p>{{ this.price }}€</p>
    </div>
</template>

<script>
export default {
    data(){
        return {
            name: 'Pomme de terre',
            price: 2.3
        }
    }
}
</script>

<style>
.card  {
    border: solid 2px;
    width: 150px;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    color: #356869;
    background: #FFFBE6;
    margin-left: 30px;
    margin-right: 30px;
    margin-bottom: 30px;
}

#card p{
    margin: 0 !important;
}

hr {
    width: 75%;
    size: 2px;
    color: #356869;
    margin: 0;
}
</style>