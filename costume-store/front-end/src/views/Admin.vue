<template>
  <div>
    <h1>Admin Page</h1>
    <div class="toggle">
      <input type="button" name="Add Item" value="Add Item" @click="itemMe">
      <input type="button" name="Add Promo" value="Add Promo Code" @click="promoMe">
    </div>
    <div v-if="addWhat==true">
    <div class="pure-g">
      <div class="pure-u-1-2">
        <h2>{{buttonVal}} Stuff</h2>
        <div class="upload">
          <div class="pure-g">
              <p class="pure-u">Type</p>
            <select class="pure-u" v-model="type" name="types">
              <option value = "hat">Hat</option>
              <option value = "costume">Costume</option>
            </select>
          </div>
          <div class="pure-g">
            <p class="pure-u">Title:  </p>
          <input class="pure-u" v-model="name" placeholder="Title">
        </div>
        <div class="pure-g">
          <p class="pure-u">Price:</p>
          <input class="pure-u" v-model="price" placeholder="Price">
        </div>
        <div class="pure-g">
          <p class="pure-u">Rent Price:</p>
          <input class="pure-u" v-model="rent" placeholder="Rent">
        </div>
        <div v-if="!item">
        <input type="file" accept="image/*" name="photo" @change="fileChanged">
      </div>
        <button @click="doThing()">{{buttonVal}}</button>
          <!--add immage area -->
        </div>
      </div>
      <div class="pure-u-1-2">
        <div class="items" v-if="items.length>0">
        <h2>Delete/Edit Stuff</h2>
        <table class="pure-table editTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Rent Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr class="item" v-for="item in items" :key="item.id" @click="selectItem(item)">
            <td>{{item.name}}</td><td>{{item.price}}</td><td>{{item.rent}}</td>
            <td><input type="button" @click="deleteItem(item)" value="Delete"></td>
          </tr>
        </tbody>
        </table>
        </div>
      </div>
    </div>
      <div class="costume" v-if="item">
        <input type="button" @click="deselect" value="Deselect Item">
          <div class="info">
              <h1>{{item.name}}</h1>
          </div>
          <div class="image">
              <img :src="item.path" class="pure-img">
          </div>
          <div>
            <p>Price: {{item.price}}</p>
            <p>Rent Price: {{item.rent}}</p>
          </div>
      </div>
    </div>
    <div v-else>
      <p>Promo Code</p>
      <input class="pure-u" v-model="code" placeholder="Code">
      <p>Discount Amount</p>
      <input v-model="discount" placeholder="Discount">
      <br>
      <input type="button" @click="addPromo" value="Submit">
      <div v-if="promo">
        <p>Promo Code: {{promo.code}}</p>
        <p>Discount: {{promo.discount}}</p>
      </div>
      <div v-if="promos.length>0">
        <div class="promos">
          <p>Current Promos</p>
            <table class="pure-table promoTable">
              <thead>
                <tr>
                  <th>Code</th>
                  <th>Discount</th>
                  <th></th>
                </tr>
              </thead>
            <tbody>
              <tr v-for="promo in promos" :key="promo.id">
                <td>{{promo.code}}</td><td>{{promo.discount}}</td>
                <td><input type="button" @click="deletePromo(promo)" value="Delete"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  </div>
  </div>


</template>
<style scoped>

.upload {

}
.editTable {
  margin: 0 auto;
}

.editTable tbody tr:hover{
  background-color: #D3D3D3;
  color: #f6921d;
}
.promoTable {
  margin: 0 auto;
}

.promoTable tbody tr:hover{
  background-color: #D3D3D3;
  color: #f6921d;
}

</style>

<script>
import axios from 'axios';
export default {
    name: "Admin",
    data(){
      return{
      type:"",
      file:null,
      name:"",
      price:"",
      rent:"",
      item:null,
      items:null,
      addWhat:true,
      code:"",
      discount:"",
      promo:null,
      promos:null,
      }
    },
    computed: {
      buttonVal(){
        if(this.item){
          return "Edit";
        }
        else{
          return "Upload";
        }
      }
    },
    created(){
      this.getItems();
      this.getPromos();
    },
    methods:{
      fileChanged(event){
        this.file = event.target.files[0];
      },
      doThing(){
        if(this.item){
          this.editItem();
        }
        else{
          this.addItem();
        }
      },
      async addItem(){
    //  await axios.post('/api/testme',this.name);
      const formData = new FormData();
      //TODO add data validation for inputs
      formData.append('photo', this.file, this.file.name);
       let r1 = await axios.post('/api/photos', formData);
       let r2 = await axios.post('/api/items',{
          type: this.type,
          name: this.name,
          price: this.price,
          rent: this.rent,
          path: r1.data.path
        });
        console.log(r1.data.path);
        this.item = r2.data;
        this.items.append(this.item); 

      },
      selectItem(item){
        this.item = item;
        this.type = item.type;
        this.name = item.name;
        this.price = item.price;
        this.rent = item.rent;
      },
      async getItems(){
        try {
          let response = await axios.get("/api/items");
          this.items = response.data;
          this.item=null;
          return true;
        }
        catch (error) {
          //console.log(error);
        }
      },
      async deleteItem(item){
        try {
          await axios.delete('/api/items/'+item._id);
          this.getItems();
          this.clearVals();
        }
        catch(error){
          console.log(error);
        }
      },
      async editItem(){

        try{

           await axios.put('/api/items/'+this.item._id, {
                type: this.type,
                name: this.name,
                price: this.price,
                rent: this.rent,

          });
          this.getItems();
          this.clearVals();

        }
        catch(error){
          console.log(error);
        }
      },
      clearVals(){
        this.type="";
        this.name="";
        this.price="";
        this.rent="";
        this.path="";
      },
      async getPromos(){
        try {
          let response = await axios.get("/api/promos");
          this.promos = response.data;
          this.promo=null;
        }
        catch (error) {
          //console.log(error);
        }
      },
      async addPromo(){
        let response = await axios.post('/api/promos',{
          code:this.code,
          discount:this.discount
        });
        this.promo = response.data;
        this.getPromos();
        this.code="";
        this.discount="";
      },
      async deletePromo(promo){
        try{
          await axios.delete('/api/promos/'+promo._id);
          this.getPromos();
        }
        catch(error){
          console.log(error);
        }
      },
      itemMe(){this.addWhat=true;},
      promoMe(){this.addWhat=false;},
      deselect(){this.item=null; this.clearVals();},
    },
    components: {

    },

}
</script>
