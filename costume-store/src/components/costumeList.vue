<template>
    <div class='wrapper'>
        <div class="costumes">
            <div class="costume" v-for="costume in costumes" :key="costume.id">
                <div class="info">
                    <h1>{{costume.name}}</h1>
                </div>
                <div class="image">
                    <img :src="'/assets/images/shop/'+costume.image" class="pure-img">
                </div>
                <button class="auto" @click="add(costume)">Add to Cart</button>
            </div>
        </div>

    </div>
</template>


<script>
export default {
    name: 'costumeList',
    props: {
        costumes: Array
    },
    methods: {
      add(item){
        item.sale="Buying";
        let index = this.$root.$data.bag.findIndex((ite) => item === ite);
        console.log(index);
        if (index===-1){
        this.$root.$data.bag.push(item);
      }
      }
    }

}
</script>

<style scoped>
    .wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.costumes{
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

img{
  max-height:100%; max-width:100%;
  min-height:100%; min-width:100%;
}

.costume{
  margin: 10px;
  margin-top: 50px;
  width: 300px;
  border-color: black;
  border: solid 1px;
}
button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
  width: 100%;
}

button:hover{
  background:231F20;
}

</style>
