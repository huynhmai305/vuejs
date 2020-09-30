<template>
  <section>
    <header>
      <h1>TO DO LISTS</h1>
      <input v-model="newTodo" @keyup.enter="addTodo" />
    </header>
    <section v-show="todoList.length" v-cloak class="main">
      <b-list-group>
        <Todo
          v-for="(todo, index) in todoList"
          :todo="todo"
          :key="index"
          :editedTodo="editedTodo"
          @removeTodo="removeTodo"
          @editTodo="editTodo"
          @doneEdit="doneEdit"
          autofocus
        >
        </Todo>
      </b-list-group>
      <ActionFooter
        :todos="todoList"
        @getAllList="getAllList"
        @getActiveList="getActiveList"
        @getCompletedList="getCompletedList"
      ></ActionFooter>
    </section>
  </section>
</template>

<script>
import Todo from './Todo'
import ActionFooter from './ActionFooter'

export default {
  name: 'ListAll',
  components: {
    Todo, ActionFooter
  },
  data () {
    return {
      newTodo: '',
      editedTodo: null,
      visible: 'all',
      todoList: []
    }
  },
  mounted () {
    this.getAllList()
  },
  methods: {
    addTodo () {
      const value = this.newTodo && this.newTodo.trim()
      if (!value) return

      this.$store.dispatch('addTodo', value)
    },
    editTodo (todo) {
      this.editedTodo = todo
    },
    doneEdit (todo) {
      if (!this.editedTodo) return;

      this.editedTodo = null
      const index = this.todoList.indexOf(todo)
      this.$store.dispatch('editTodo', todo, index)
    },
    removeTodo (todo) {
      this.$store.dispatch('removeTodo', todo)
    },
    getAllList () {
      this.todoList = this.$store.getters.getAllList
    },
    getActiveList () {
      this.todoList = this.$store.getters.getActiveList
    },
    getCompletedList () {
      this.todoList = this.$store.getters.getCompletedList
    }
  },
}
</script>

<style scoped>
  header {
    background-color: #42b983;
    color: azure;
    padding: 10px;
  }
  [v-cloak] {
   display: none;
  }
  .main {
    border: #42b983 solid 2px;
    margin: 20px 30vw;
  }
</style>
