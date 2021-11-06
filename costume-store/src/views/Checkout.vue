<template>
       <bagList :costumes="bag" />

</template>

<script>
import bagList from "../components/bagList.vue"
export default {
    name: "Checkout",
    components: {
        bagList
    },
    computed: {
        bag(){
            return this.$root.$data.bag;
        }
    },
}
</script>
