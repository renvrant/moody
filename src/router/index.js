import Vue from 'vue'
import Router from 'vue-router'
import MoodText from '@/components/MoodText'
import AddMood from '@/components/AddMood'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: MoodText
    },
    {
      path: '/add',
      name: 'add',
      component: AddMood
    }
  ]
})
