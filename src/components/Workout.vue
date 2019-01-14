<template>
  <div class="workout">
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
  </div>
</template>

<script>
export default {
  name: 'workout',
  computed: {
    workoutDate () {
      return '04-10'
    }
  }
}
</script>
