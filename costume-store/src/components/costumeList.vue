<template>
    <div class='wrapper'>
        <div class="costumes">
            <div class="costume" v-for="costume in costumes" :key="costume.id">
                <div class="info">
                    <h1>{{costume.name}}</h1>
                </div>
                <div class="image">
                    <img :src="'shop/'+costume.image">
                </div>
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

}
</script>

<style scoped>
    .wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.costume{
  margin: 10px;
  margin-top: 50px;
  width: 200px; 
}


</style>