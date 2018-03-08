<template>
  <div class="add-mood">
    <textarea v-model="newMood"></textarea>
    <button v-on:click="addMood(newMood)">Add Mood</button>
    <slot></slot>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'AddMood',
  data () {
    return {
      newMood: ''
    }
  },
  methods: {
    ...mapMutations([
      'addMood'
    ])
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  button {
    font-size: 1.3em;
  }
</style>
