<template>
  <div>
    <img src="../assets/images/home/ghostbusting.jpg" alt="witches" class="pure-img" id="mainImg">
    <div class = 'info'>
        <h2>Family, Fun, and Costumes</h2>
        <p>It all started 20 years ago when Christy and James got their first costumes as a married couple and over the years that costume collection has continued to grow and grow. Overtime friends and family started asking Christy for costumes every year so she decided to the collection with everyone!</p>
        <div id="toStore"> 
          <router-link to="/costumes" id="hype">
              <p>Check out the Collection!</p>
          </router-link>
        </div>
      </div>
      <h1>Meet the team</h1>
    <div class="otherPages">
      <div class="otherPage">
          <h2>Christy</h2>
          <img src="../assets/images/home/witchHat.jpg" alt="witchHat" class="pure-img">
          <p>The Queen of Halloween herself. The only thing she loves more than Halloween is helping others find the perfect Halloween costumes for individuals, couples, and whole families</p>
      </div>
      <div class="otherPage">
        <router-link to="/costumes">
        <h2>James</h2>
          <img src="../assets/images/home/mike.jpg" alt="two boys dressed up" class="pure-img">
          <p>The muscle behind the whole organization. This guy has been there for Christy since day one lifting bins, trying on costumes, and providing capital</p>
        </router-link>
      </div>
      <div class="otherPage">
          <h2>The Kids</h2>
          <img src="../assets/images/home/Christy.jpg" alt="Christy and Lexi" class="pure-img">
          <p>From models to delivery the kids fill many hats wherever Christy needs them. They love Halloween and pride themselves on having the best costumes at every party</p>
        
      </div>
  </div>
  <div id="toStore"> 
    <router-link to="/costumes" id="hype">
        <p>Contact us!</p>
    </router-link>
  </div>

    </div>
  
  
</template>



<style scoped>


.info{
  background-color:lightgray;
  padding: 20px; 
}

#toStore{
  background-color: white; 
  width: 70%;
  margin: 0 auto;  
  font-size: 20pt;
  color: black; 
  border: 2px solid black; 

}

#hype {
  margin: auto; 
  text-decoration: none; 
}

.otherPage img{
  margin: 15px 0;
}
.otherPage{
  margin-bottom: 4em;
  background-color:lightgray
}

.otherPage h2{
  padding-top: 15px; 
}

@media (min-width: 700px) {
  .otherPages{
    display: grid;
    grid-template-columns: repeat(3, 3fr);
    grid-gap: 20px;
    margin: 20px;
  }


#mainImg{
    max-width: 80%;
    margin: 0 auto; 
    padding-bottom: 8%;
    padding-top: 6%; 
  }
}

a{
  text-decoration: none;
  color: black;
}
a:hover{
  color: orange;
  font-weight: bold;
}
</style>