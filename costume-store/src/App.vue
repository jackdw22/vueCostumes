<template>
  <div id="app">
    <div class = "nav">
    <div class="pure-menu pure-menu-horizontal">
        <ul class="pure-menu-list">
            <li class="pure-menu-item">
                <router-link to="/" class="pure-menu-link">
                  <h3>Christy's Costumes</h3>
                </router-link>
            </li>
            <li class="pure-menu-item">
                <router-link to="/about" class="pure-menu-link">
                  <p>About Us</p>
                </router-link>
            </li>
            <li class="pure-menu-item">
                <router-link to="/contact" class="pure-menu-link"> 
                  <p>Contact Us!</p>
                </router-link>
            </li>

            <li class="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
                <a href="#" id="menuLink1" class="pure-menu-link">Shop</a>
                <ul class="pure-menu-children">
                    <li class="pure-menu-item">
                        <router-link to="/hats"> 
                          <p>Witch Hats</p>
                        </router-link>
                    </li>
                    <li class="pure-menu-item">
                        <router-link to="/costumes"> 
                          <p>Costumes</p>
                        </router-link>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
    </div> 
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
</style>
