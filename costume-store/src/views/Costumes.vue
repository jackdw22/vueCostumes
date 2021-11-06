<template>
       <costumeList :costumes="costumes" />

</template>

<script>
import costumeList from "../components/costumeList.vue"
export default {
    name: "Costumes",
    components: {
        costumeList
    },
    computed: {
        costumes(){
            return this.$root.$data.costumes;
        }
    },
}
</script>
