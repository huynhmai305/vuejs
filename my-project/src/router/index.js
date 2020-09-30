import Vue from 'vue'
import Router from 'vue-router'
import ListAll from '../components/TodoList/ListAll'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'ListAll',
      component: ListAll
    }
  ]
})
