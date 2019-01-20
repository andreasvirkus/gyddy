<template>
  <main class="workout">
    <h1>Your workouts:</h1>

    <p v-if="!workouts.length">
      No workouts added
    </p>
    <ul v-else>
      <li v-for="(workout, i) in workouts"
        :key="i">
        {{ workout.name }}
      </li>
    </ul>

    <button @click="showForm = true"
      class="gy-btn gy-btn">Create</button>

    <workout-form @create="addWorkout" v-if="showForm"/>
  </main>
</template>

<script>
import WorkoutForm from '@/components/WorkoutForm'

export default {
  name: 'workouts',
  data () {
    return {
      workouts: [],
      showForm: false
    }
  },
  components: { WorkoutForm },
  methods: {
    addWorkout (workout) {
      console.log('new workout', workout)
    }
  }
}
</script>
