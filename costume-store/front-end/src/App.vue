<template>
  <div id="app">
    <nav id="hamnav" class="pure-menu pure-menu-horizontal">
      <router-link to="/" id ="logo">
          <h2>Christy's Costumes</h2>
      </router-link>
      <label for="hamburger">&#9776;</label>
      <input type="checkbox"  id="hamburger"/>

      <div id="hamItems">
        <router-link to="/admin" class="pure-menu-link">
          <p>Admin</p>
        </router-link>
          <router-link to="/about" class="pure-menu-link">
            <p>About</p>
          </router-link>
           <router-link to="/hats" class="pure-menu-link">
              <p>Witch Hats</p>
           </router-link>
           <router-link to="/costumes" class="pure-menu-link">
              <p>Costumes</p>
            </router-link>
            <router-link to="/checkout" class="pure-menu-link">
              <i class="fas fa-shopping-bag"></i>
              <div>{{size}} </div>
            </router-link>
      </div>
    </nav>
    <router-view />
    <div class='footer'>
      <div class = 'footPart'>
        <p>Jacob Richmond / Jack Wheatley</p>
        <p>#111-222-3333</p>
      </div>
      <div class='footPart'>
        <a href="http://" target="_blank" rel="noopener noreferrer"><i class="fab fa-3x fa-facebook"></i></a>
        <a href="http://https://github.com/jackdw22/vueCostumes" target="_blank" rel="noopener noreferrer"><i class="fab fa-3x fa-github"></i></a>
        <a href="http://" target="_blank" rel="noopener noreferrer"><i class="fab fa-3x fa-instagram"></i></a>



    </div>
  </div>
  </div>
</template>

<script>
export default{
  computed: {
    size(){
      return this.$root.$data.bag.length;
    }
  }
}

/*
#3e1c33 - Dark Purple
#602749 - Light Purple
#b14623 - Darker orange
#f6921d - Lighter orange
*/




</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

}
nav{
  background-color: lightgray;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#hamnav {
  width: 100%;
  display:flex;
  justify-content: space-between;

}
.footer{
  background-color: #602749;
}
.footPart{
  color: #f6921d;
}

#hamItems{
  display:flex;
  justify-content: flex-start;
}

#hamitems a {
  flex-grow: 1;
  flex-basis: 0;
  padding: 10px;
  color: white;
  text-decoration: none;
  text-align: center;
}

#hamnav label, #hamburger {
  display:none;
}

@media screen and (max-width: 768px){
  #hamitems a{
    box-sizing: border-box;
    display:block;
    width: 100%;
    border-top: 1px solid black;
  }
  #hamnav label{
    display: inline;
    color: black;
    font-style: normal;
    font-size:1.2em;
    padding: 15px;
  }
  #hamItems{
    display:none;
  }
  #hamnav input:checked ~ #hamItems{
    display: block;
  }


}
#logo{
    text-decoration: none;
    display:inline;
    margin-left: 10px;
  }

  i{
    margin-top: 15px;
    font-size: 13pt;
  }
  .footPart{
    text-align:center;
    margin: auto;
  }

  .footPart a{
    color: inherit;
    width: 20px;
  }

  @media (min-width: 700px) {
  .footer{
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    grid-gap: 20px;
    margin: 20px;
  }
}

</style>
