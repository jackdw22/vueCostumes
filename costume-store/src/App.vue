<template>
  <div id="app">
    <nav id="hamnav" class="pure-menu pure-menu-horizontal">
      <router-link to="/" id ="logo">
          <h2>Christy's Costumes</h2>
      </router-link>
      <label for="hamburger">&#9776;</label>
      <input type="checkbox"  id="hamburger"/>

      <div id="hamItems">
          <router-link to="/about" class="pure-menu-link">
            <p>About</p>
          </router-link>
          <router-link to="/contact" class="pure-menu-link"> 
            <p>Contact Us!</p>
          </router-link>
           <router-link to="/hats" class="pure-menu-link"> 
              <p>Witch Hats</p>
           </router-link>
           <router-link to="/costumes" class="pure-menu-link"> 
              <p>Costumes</p>
            </router-link>
            <router-link to="/contact" class="pure-menu-link"> 
              <i class="fas fa-shopping-bag"></i>
            </router-link>
      </div>
    </nav>
    <router-view />
  </div>
</template>

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
</style>
