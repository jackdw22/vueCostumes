<template>
  <div class="home">
    <div id="welcome">
      <img src="../assets/images/home/witches.jpg" alt="witches" class="pure-img">
      <h1>Welcome to Christy's Costumes</h1>
    </div>
    <div class="otherPages">
    <div class="otherPage">
      <a href="pages/hat.html">
        <img src="../assets/images/home/witchHat.jpg" alt="witchHat">
        <h3>Witch Hats</h3>
        <p>Who said witches have to be scary? Witches can be hippies, fabously pink, or anything else! Choose one of our homemade witch hats or request your own to add a fun twist to being a witch</p>
      </a>
    </div>
    <div class="otherPage">
      <a href="pages/costumes.html">
      <img src="../assets/images/home/mike.jpg" alt="two boys dressed up">
      <h3>Shop Costumes</h3>
      <p>View the whole collection and become your favorite hero, tv character, or even monster!</p>
</a>
    </div>
    <div class="otherPage">
      <a href="pages/about.html">
      <img src="../assets/images/home/Christy.jpg" alt="Christy and Lexi">
      <h3>Who we are</h3>
      <p>We love the happiest and spookiest time of the year, Halloween. Click below to learn more about us and our story!</p>
</a>
    </div>


  </div>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",


};
</script>

<style scoped>
  img{
    max-width: 80%;
    margin: 0 auto;
  }

  h3{
  text-align: center;
  margin: 0 1em;
}

.otherPage img{
  margin: 15px 0;
}

p{
  text-align: center;
  margin: 0 1em;
}

.otherPage{
  margin-bottom: 4em;
}

@media (min-width: 700px) {
  .otherPages{
    display: grid;
    grid-template-columns: repeat(3, 3fr);
    grid-gap: 20px;
    margin: 20px;
  }
  .othe img{
    height: 100%;
    width: 100%;
    object-fit: cover;
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
