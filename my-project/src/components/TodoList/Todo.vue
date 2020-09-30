<template>
  <b-list-group-item class="todo-item">
    <b-row>
      <b-col cols="2">
        <label>
          <input type="checkbox" v-model="todo.completed">
        </label>
      </b-col>
      <b-col text-align="left">
        <label @dblclick="$emit('editTodo', todo)" :class="{ completed: todo.completed }">{{ todo.title }}</label>
      </b-col>
      <b-col cols="3">
        <b-button variant="danger" @click="$emit('removeTodo', todo)">
          <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
          Delete
        </b-button>
      </b-col>
    </b-row>
    <label class="edit-input">
      <input
        v-show="editedTodo === todo"
        type="text"
        v-model="todo.title"
        @blur="$emit('doneEdit', todo)"
        @keyup.enter="$emit('doneEdit', todo)"
      />
    </label>
  </b-list-group-item>
</template>

<script>
export default {
  props: ['todo', 'editedTodo']
}
</script>

<style>
  .completed {
    text-decoration: line-through;
  }
  .todo-item {
    position: relative;
  }
  .edit-input {
    position: absolute;
    top: 10px;
    left: 180px;
  }
</style>
