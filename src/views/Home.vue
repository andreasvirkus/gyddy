<template>
  <div class="home">
    <section class="home__actions">
      <router-link
        class="home__link"
        :to="{ name: 'workouts' }">Set up</router-link>
      <router-link
        class="home__link"
        :to="{ name: 'train' }">Work out</router-link>
      <router-link
        class="home__link"
        :to="{ name: 'about' }">About</router-link>
    </section>
  </div>
</template>

<style lang="scss">
.home {
  &__actions {
    display: flex;
    flex-direction: column;
    max-width: 30rem;
    margin: 1rem auto;
  }

  &__link {
    display: inline-block;
    padding: .5rem 1rem;
    background-color: #fefefe;
    color: cornflowerblue;
    text-decoration: none;
    border-radius: 4px;
    font-size: 3rem;

    &:not(:first-child) {
      margin-top: 1.5rem;
    }
  }
}
</style>
