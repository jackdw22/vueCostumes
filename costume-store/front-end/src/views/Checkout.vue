<template>
  <div v-if="this.$root.$data.bag.length!==0">
       <bagList :costumes="bag" />
  </div>
  <div v-else>
    <h1> Your Cart is Empty </h1>
    <router-link to="/costumes">
      <h2>Start Shopping</h2>
    </router-link>
  </div>
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
