<template>
    <div class='wrapper'>
      <div class="better">
        <div class="costumes">
            <div class="costume" v-for="costume in costumes" :key="costume.id">
                <div class="info">
                    <h1>{{costume.name}}</h1>
                    <p>{{costume.sale}}</p>
                </div>
                <div class="image">
                    <img :src="costume.path" class="pure-img">
                </div>
                <div class="toggle">
                  <button class="auto" @click="rent(costume)">Rent</button>
                  <button class="auto" @click="buy(costume)">Buy</button>
                </div>
                <button class="auto" @click="rem(costume)">Remove</button>
            </div>
        </div>
      </div>
        <hr>
        <div class="checkout">
          <div class="item" v-for="costume in costumes" :key="costume.id">
          <p class="line">  {{costume.sale}} {{costume.name}}:  ${{getPrice(costume)}}</p>
          </div>
          <div>
          <p class="price"> Total: ${{getTotal()}}</p>
          </div>
          <div class="toggle">
            <button class="auto" @click="rentAll()">Rent All</button>
            <button class="auto" @click="buyAll()">Buy All</button>
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
      rem(item){
        let index = this.$root.$data.bag.findIndex((ite) => item === ite);
        this.$root.$data.bag.splice(index,1);
      },
      rent(item){
        let index = this.$root.$data.bag.findIndex((ite) => item === ite);
        this.$root.$data.bag[index].sale="Renting";
        this.$root.$data.bag.push("update");
        this.$root.$data.bag.pop();
      },
      buy(item){
        let index = this.$root.$data.bag.findIndex((ite) => item === ite);
        this.$root.$data.bag[index].sale="Buying";
        this.$root.$data.bag.push("update");
        this.$root.$data.bag.pop();
      },
      getPrice(item){
        if(item.sale==="Renting"){
          return item.rent;
        }
        else{
          return item.price;
        }
      },
      getTotal(){
        let price = 0;
        for (const item of this.$root.$data.bag){
          if (item.sale==="Buying"){
            price += parseFloat(item.price);

          }
          else{
            price += parseFloat(item.rent);
          }
        }

        return price;
      },
    buyAll(){
      for (const item of this.$root.$data.bag){
        let index = this.$root.$data.bag.findIndex((ite) => item === ite);
        this.$root.$data.bag[index].sale="Buying";
        this.$root.$data.bag.push("update");
        this.$root.$data.bag.pop();
      }
    },
    rentAll(){
      for (const item of this.$root.$data.bag){
        let index = this.$root.$data.bag.findIndex((ite) => item === ite);
        this.$root.$data.bag[index].sale="Renting";
        this.$root.$data.bag.push("update");
        this.$root.$data.bag.pop();
      }
    }
    },
    computed: {

    }

}
</script>

<style scoped>
    .wrapper {

  align-items: center;
  justify-content: center;
}
.better{
  display: flex;
  align-items: center;
  justify-content: center;
}
button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
  width: 100%;
}

button:hover{
  background:#231F20;
}
.toggle{
  display: flex;
}
.toggle button{
  background-color: #3e1c33;
}
.toggle button:hover{
  background-color: #602749;
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

.checkout{

}
</style>
