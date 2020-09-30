<template>
  <footer class="footer" v-show="todos.length" v-cloak>
    <b-button-group class="m-3">
      <b-button @click="$emit('getAllList')">All</b-button>
      <b-button @click="$emit('getActiveList')" variant="primary">Active</b-button>
      <b-button @click="$emit('getCompletedList')" variant="success">Completed</b-button>
    </b-button-group>
    <span class="todo-count">{{ todos.length }} items</span>
  </footer>
</template>

<script>
export default {
  props: ['todos', 'visible']
}
</script>
