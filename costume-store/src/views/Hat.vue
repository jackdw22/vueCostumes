<template>
       <costumeList :costumes="costumes" />
    
</template>

<script>
import costumeList from "../components/costumeList.vue"
export default {
    name: "Hats",
    components: {
        costumeList
    },
    computed: {
        costumes(){
            return this.$root.$data.costumes.filter(costume => costume.type === "hat")
        }
    },
}
</script>