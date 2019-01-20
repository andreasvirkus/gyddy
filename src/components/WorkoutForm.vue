<template>
  <form @submit="handleSubmit">
    <input type="text" name="name" v-model="name">

    <textarea name="desc" cols="30" rows="10" v-model="description">
    </textarea>

    <label>Exercises:
      <select name="exercises" multiple v-model="exercises">
        <option value="squat">Skwaat</option>
        <option value="deadlift">Didlift</option>
        <option value="bench">Binch</option>
      </select>
    </label>

    <button type="submit"></button>
  </form>
</template>

<script>
export default {
  name: 'workout-form',
  data () {
    return {
      name: '',
      description: '',
      exercises: []
    }
  },
  methods: {
    handleSubmit () {

    }
  }
}
</script>

<style lang="css" scoped>
</style>
