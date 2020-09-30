// initial state
const state = () => ({
  todolist: [
    { title: 'Todo1', completed: false },
    { title: 'Todo2', completed: true }
  ]
})

//getters
const getters = {
  getAllList: state => state.todolist,
  getActiveList: state => state.todolist.filter((todo) => { return !todo.completed }),
  getCompletedList: state => state.todolist.filter((todo) => { return todo.completed })
}

//actions
const actions = {
  addTodo ({commit}, payload) {
    commit('addTodo', payload)
  },
  editTodo ({commit}, payload) {
    commit('editTodo', payload)
  },
  removeTodo ({commit}, payload) {
    commit('removeTodo', payload)
  }
}

//mutations
const mutations = {
  addTodo (state, title) {
    return state.todolist.push({
      title: title,
      completed: false
    })
  },
  editTodo (state, todo, index) {
    state.todolist.filter((item, position) => {
      if (position === index) {
        item.title = todo.title
        item.completed = todo.completed
      }
    })
  },
  removeTodo (state, todo) {
    return state.todolist.splice(state.todolist.indexOf(todo), 1)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
