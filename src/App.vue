<template>
  <div class="app">
    <header class="app__header">
      <router-link to="/" class="f-center">
        <img alt="Gyddy" class="logo" src="./assets/logo.svg">
        <span class="logo__text">Gyddy</span>
      </router-link>

      <nav class="app__nav">
        <router-link to="/about">
          <img alt="Source code" class="icon-m" src="./assets/github.svg">
        </router-link>
      </nav>
    </header>
    <router-view class="app__content" :key="$route.fullPath"/>

    <footer class="app__footer">
      <a href="mailto:write@andreasvirkus.me">Contact</a>
    </footer>
  </div>
</template>

<style src="./styles/variables.css"></style>
<style src="./styles/utils.scss" lang="scss"></style>
<style src="./styles/global.scss" lang="scss"></style>
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
  background-color: var(--color-background);
  color: var(--color-content);

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
  color: var(--color-content);
}
.logo {
  height: 3rem;

  &__text {
    font-family: monospace;
    padding-left: .5rem;
    font-size: 1.25rem;
  }
}

// Move these to global.scss file
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

// Move these to utils.scss file
.icon-m {
  height: 1rem;
  width: 1rem;
}
.f-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
