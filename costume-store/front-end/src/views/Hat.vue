<template>
       <costumeList :costumes="costumes" />

</template>

<script>
import costumeList from "../components/costumeList.vue"; 
import axios from 'axios'; 
export default {
    name: "Hats",
    components: {
        costumeList
    },
    created(){
      this.getCostumes();
    },
    data (){
        return {
            costume: [],
        }
    }, 
    computed: {
        costumes(){
            return this.costume.filter(costume => costume.type === "hat");
        }
    },
    methods: {
       async getCostumes() {
        try {
          let response = await axios.get('/api/items');
          this.costume = response.data;
          return true; 
        }catch (error){
          console.log(error); 
        }
      },  
    },
   
}
</script>
