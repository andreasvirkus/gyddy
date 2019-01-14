<template>
  <div class="app">
    <header class="app__header">
      <img alt="Gyddy" class="logo" src="./assets/logo.svg">
      <span class="logo__text">Gyddy</span>
      <nav class="app__nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </nav>
    </header>
    <router-view class="app__content"/>

    <footer class="app__footer">
      <a href="mailto:write@andreasvirkus.me">Contact</a>
    </footer>
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
}
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #223;
  color: #fefefe;

  &__header {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }
  &__nav {
    margin-left: auto;
    padding: 30px;
  }
  &__content {
    flex: 1;
  }
  &__footer {
    padding: 2rem;
  }
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

  &__text {
    font-family: monospace;
    padding-left: .5rem;
    font-size: 1.25rem;
  }
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
