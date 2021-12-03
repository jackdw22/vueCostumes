<template>
  <div>
    <h1>Admin Page</h1>
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
          <input class="pure-u" v-model="price" placehold = "Price">
        </div>
        <div class="pure-g">
          <p class="pure-u">Rent Price:</p>
          <input class="pure-u" v-model="rent" placehold = "Rent">
        </div>

        <input type="file" accept="image/*" name="photo" @change="fileChanged">
        <button @click="addItem">Upload</button>
          <!--add immage area -->
        </div>
      </div>
      <div class="pure-u-1-2">
        <h2>Delete Stuff</h2>
      </div>
    </div>
  </div>


</template>
<style scoped>

.upload {

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
      }
    },
    methods:{
      fileChanged(event){
        this.file = event.target.files[0];
      },
      async addItem(){
    //  await axios.post('/api/testme',this.name);
      const formData = new FormData();
      formData.append('photo', this.file, this.file.name)
      console.log('herehere');
       let r1 = await axios.post('/api/photos', formData);
       console.log('postyyy');
       let r2 = await axios.post('/api/items',{
          type: this.type,
          name: this.name,
          price: this.price,
          rent: this.rent,
          path: r1.data.path
        });
        console.log(r1.data.path);
        return r2;

      }
    },
    components: {

    },
    computed: {

    },
}
</script>
