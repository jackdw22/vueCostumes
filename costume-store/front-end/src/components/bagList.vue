<template>
    <div class='wrapper'>
      <div class="better" v-if="submit === false">
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
        <div class="checkout" v-if="submit === false">
          <div class="item" v-for="costume in costumes" :key="costume.id">
          <p class="line">  {{costume.sale}} {{costume.name}}:  ${{getPrice(costume)}}</p>
          </div>
          <div>
          <p class="price"> Total: ${{getTotal()}}</p>
          <input type="text" v-model="promo" placeholder="Promo Code">
          <button id='promo' @click="applyDiscount()">Apply</button>
          </div>
          <div class="toggle">
            <button class="auto" @click="rentAll()">Rent All</button>
            <button class="auto" @click="buyAll()">Buy All</button>
          </div>

          <button @click="toggleSubmit()">Checkout</button>
        </div>

         <div class="final" v-if="submit">
            <h1>One more Step...</h1>
            <h3>Add your payment/shipping info below</h3>
            <form class="pure-form pure-form-stacked" id="billing">
              <fieldset>
              <div class="pure-g">
                  <div class="pure-u">
                      <label for="multi-first-name">First Name</label>
                      <input type="text" id="multi-first-name" class="pure-u-23-24" required=""/>
                  </div>
                  <div class="pure-u">
                      <label for="multi-last-name">Last Name</label>
                      <input type="text" id="multi-last-name" class="pure-u-23-24" required="" />
                  </div>
                  <div class="pure-u pure-u-md-1-3">
                      <label for="multi-email">E-Mail</label>
                      <input type="email" id="multi-email" class="pure-u-23-24" required="" />
                  </div>
                  <div class="pure-u pure-u-md-1-3">
                      <label for="multi-city">address</label>
                      <input type="text" id="multi-city" class="pure-u-23-24" required=""/>
                  </div>
                  <div class="pure-u pure-u-md-1-3">
                      <label for="multi-city">City</label>
                      <input type="text" id="multi-city" class="pure-u-23-24" required=""/>
                  </div>
                  <div class="pure-u pure-u-md-1-5">
                      <label for="multi-city">State</label>
                      <input type="text" id="multi-city" class="pure-u-23-24" required=""/>
                  </div>
                  <div class="pure-u-1">
                      <label for="multi-city">Card #</label>
                      <input type="text" id="multi-city" class="pure-u-23-24" required=""/>
                  </div>


        </div>
        <label for="multi-terms" class="pure-checkbox">
            <input type="checkbox" id="multi-terms" /> Receive offers and news from Christy's Costumes
        </label>
        <button type="submit" class="pure-button pure-button-primary">Submit</button>
    </fieldset>

            </form>



        </div>
    </div>

</template>


<script>
import axios from 'axios';
export default {
    name: 'costumeList',
    props: {
        costumes: Array
    },
    data(){
      return{
        submit: false,
        promo: '',
        discount: 1,
        promos: [],
      }
    },
      created(){
      this.getPromos();
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
          return item.rent * this.discount;
        }
        else{
          return item.price * this.discount;
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

        return price * this.discount;
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
    },
    toggleSubmit(){
      if(this.submit){
        this.submit = false;
      }else{
        this.submit = true;
      }
    },
     async getPromos() {
        try {
          let response = await axios.get('/api/promos');
          this.promos = response.data;
          return true;
        }catch (error){
          console.log(error);
        }
      },
      applyDiscount(){
        for (const promo of this.promos){
          if (promo.code === this.promo){
          //  console.log(100 - promo.discount.slice(0,-1));
         //   console.log(promo.discount);
            this.discount = (100 - promo.discount) / 100;
          }
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

#promo{
  display: inline;
  width: 75px;
  margin-left: 5px;
  border-radius: 3pt;
  font-size: 12pt;
  height: 25px;
  margin-bottom: 5px;

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

#billing{
  text-align: left;
  width: 90%;
  margin: 0 auto;
  }

</style>
