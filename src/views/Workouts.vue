<template>
  <main class="workout">
    <h1>Your workouts:</h1>

    <workout-form v-if="create" @create="addWorkout"/>
    <p v-else-if="!workouts.length" class="m-top-m">
      No workouts added
    </p>
    <ul v-else class="m-top-m">
      <li v-for="(workout, i) in workouts"
        :key="i">
        {{ workout.name }}
      </li>
    </ul>

    <router-link :to="{ name: 'new-workout' }"
      v-show="!create"
      class="gy-btn m-top-m">Create</router-link>
  </main>
</template>

<script>
import WorkoutForm from '@/components/WorkoutForm'
import { workoutsKey } from '@/utils/storage'

export default {
  name: 'workouts',
  data () {
    const workouts = localStorage[workoutsKey]

    return {
      workouts: workouts ? JSON.parse(workouts) : []
    }
  },
  props: {
    create: Boolean
  },
  components: { WorkoutForm },
  methods: {
    addWorkout (workout) {
      console.log('new workout', workout)
    }
  }
}
</script>
