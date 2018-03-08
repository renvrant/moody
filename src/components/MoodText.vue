<template>
  <div class="hello">
    <transition-group name="fade">
      <h1 v-for="(line, key) in moodPhrase" :key="key">
        {{ line }}
      </h1>
    </transition-group>
    <button v-on:click="randomizeMood">Change</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'MoodText',
  data () {
    return {}
  },
  computed: {
    ...mapGetters([
      'moodPhrase'
    ])
  },
  methods: {
    ...mapMutations([
      'randomizeMood'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.fade-enter-active, {
  transition: opacity 1s ease;
}
.fade-enter-to, .fade-leave-active {
  opacity: 0;
}
</style>
