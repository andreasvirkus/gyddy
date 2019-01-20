<template>
  <div class="home">
    <section class="home__actions">
      <router-link
        class="home__link gy-btn gy-btn--big"
        :to="{ name: 'workouts' }">Set up</router-link>
      <router-link
        class="home__link gy-btn gy-btn--big"
        :to="{ name: 'train' }">Work out</router-link>
      <router-link
        class="home__link gy-btn gy-btn--big"
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

  &__link:not(:first-child) {
    margin-top: 1.5rem;
  }
}
</style>
