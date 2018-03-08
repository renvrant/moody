import Vue from 'vue'
import Vuex from 'vuex'

import moods from '@/appData/moods'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    moods: moods,
    moodIndex: 0
  },
  mutations: {
    randomizeMood (state) {
      const oldIndex = state.moodIndex
      while (oldIndex === state.moodIndex) {
        state.moodIndex = Math.floor(Math.random() * state.moods.length)
      }
    },
    addMood (state, payload) {
      state.moods = [
        ...state.moods,
        payload.split('\n')
      ]
      console.log(state.moods)
    }
  },
  getters: {
    moodPhrase (state) {
      return state.moods[state.moodIndex]
    },
    currentIndex (state) {
      return state.moodIndex
    }
  }
})

export default store
