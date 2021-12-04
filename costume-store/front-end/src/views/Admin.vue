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
        <h2>Upload Stuff</h2>
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

        <input type="file" accept="image/*" name="photo" @change="fileChanged">
        <button @click="addItem">Upload</button>
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
          </tr>
        </thead>
        <tbody>
          <tr class="item" v-for="item in items" :key="item.id" @click="selectItem(item)">
            <td>{{item.name}}</td><td>{{item.price}}</td><td>{{item.rent}}</td>
          </tr>
        </tbody>
        </table>
        </div>
      </div>
    </div>
      <div class="costume" v-if="item">
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
    </div>
  </div>


</template>
<style scoped>

.upload {

}
.editTable{
  margin: 0 auto;
}
.editTable tbody tr:hover{
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
      addWhat:false,
      code:"",
      discount:"",
      promo:null,
      }
    },
    computed: {

    },
    created(){
      this.getItems();
    },
    methods:{
      fileChanged(event){
        this.file = event.target.files[0];
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

      },
      selectItem(item){
        this.item = item;
      },
      async getItems(){
        try {
          let response = await axios.get("/api/items");
          this.items = response.data;
          console.log(this.items);
          console.log(this.items.length);
          return true;
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
      },
      itemMe(){this.addWhat=true;},
      promoMe(){this.addWhat=false;},
    },
    components: {

    },

}
</script>
