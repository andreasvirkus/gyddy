<template>
  <form @submit.prevent="handleSubmit" class="workout-form text-left m-top-m">
    <label>
      Name:
      <input type="text"
        name="name"
        v-model="name"
        placeholder="Squat squad">
    </label>

    <label class="m-top-m">Description (optional)
      <textarea name="desc" cols="30" rows="4" v-model="description">
      </textarea>
    </label>

    <div class="m-top-m color-content-secondary f-v-align">
      <span class="m-right-a">Exercise name</span>
      <span class="m-right-s">Sets</span>
      <span>Reps</span>
    </div>
    <div v-for="(ex, i) in chosenExercises" :key="'exercise-' + i"
      class="f-v-align m-top-s">
      <multiselect name="exercises"
        v-model="chosenExercises[i].name"
        id="exercises"
        :options="exercises"
        :taggable="true"
        :key="'workoutName' + i"
        tag-placeholder="Add new exercise"
        placeholder="Search or add an exercise"
        class="m-right-s"
        @tag="addExercise"/>

      <input type="number"
        v-model.number="chosenExercises[i].sets"
        :key="'workoutSets' + i"
        class="m-right-xs">
      <span class="m-right-xs">x</span>
      <input type="number"
        v-model.number="chosenExercises[i].reps"
        :key="'workoutReps' + i">
    </div>

    <div class="text-center">
      <button type="button"
        class="gy-btn m-top-m"
        @click="addNewExerciseToWorkout">➕</button>
    </div>
    <footer class="text-center m-top-m">
      <hr>
      <button type="submit"
        class="gy-btn m-top-s">Create workout</button>
    </footer>
  </form>
</template>

<script>
import Multiselect from 'vue-multiselect'

import { exercisesKey, workoutsKey } from '@/utils/storage'

const defaultExercises = [
  'Squat',
  'Deadlift',
  'Bench press',
  'Incline bench press',
  'Decline bench press',
  'Push up',
  'Pull up',
  'Weighted pull up',
  'Chin up',
  'Weighted chin up',
  'Dip',
  'Weighted dip'
]
const newExercise = () => ({
  name: '',
  sets: 0,
  reps: 0
})

export default {
  name: 'workout-form',
  data () {
    const exercises = localStorage[exercisesKey]
    return {
      name: '',
      description: '',
      exercises: defaultExercises,
      chosenExercises: exercises ? JSON.parse(exercises) : [newExercise()]
    }
  },
  components: { Multiselect },
  watch: {
    exercises (ex) {
      localStorage[exercisesKey] = ex
    }
  },
  methods: {
    handleSubmit () {
      const w = localStorage[workoutsKey]
      const workouts = w ? JSON.parse(w) : []
      workouts.push({
        name: this.name,
        description: this.description,
        exercises: this.chosenExercises
      })

      localStorage[workoutsKey] = JSON.stringify(workouts)

      this.$router.push({ name: 'workouts' })
    },
    addExercise (exercise) {
      console.log('adding new one', exercise)
      this.exercises.push(exercise)
    },
    addNewExerciseToWorkout () {
      this.chosenExercises.push(newExercise())
    }
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="scss">
.workout-form {
  label,
  input[type="text"],
  textarea {
    display: block;
    width: 100%;
  }

  input {
    height: 2rem;
  }
  input[type="number"] {
    flex-grow: 0;
    flex-basis: 2rem;
    text-align: center;
    width: 0;
  }

  textarea {
    border: none;
    resize: vertical;
  }
}
</style>
