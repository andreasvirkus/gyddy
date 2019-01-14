<template>
  <div id="app">
    <header>
      <img alt="Gyddy" class="logo" src="./assets/logo.svg">
      <nav id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </nav>
    </header>
    <router-view/>
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height: 100vh;
  background-color: #223;
  padding: 1rem;
  color: #fefefe;
}
#nav {
  padding: 30px;
}
a {
  font-weight: bold;
  color: cornflowerblue;
  &.router-link-exact-active {
    color: cornflowerblue;
  }
}
.logo {
  height: 3rem;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
