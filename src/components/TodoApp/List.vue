<template>
  <ul>
    <li v-for="item of todoList" :key="item.id">
      <input type="checkbox" :checked='item.completed' @click="handleTodoItemToogle(item.id)">
      <span :style="{ textDecoration: item.completed ? 'line-through' : 'none' }">{{ item.content }}</span>
      <button @click="handleTodoItemRemove(item.id)">Remove</button>
    </li>
  </ul>
</template>

<script>

export default {
  name: 'TodoList',
  props: {
    todoList: {
      type:Array,
      default: () => []
    }
  },
  emits: ['handleTodoItemToogle', 'handleTodoItemRemove'],
  setup(props, ctx) {
    // const todoList = props.todoList;

    const handleTodoItemToogle = (id) => {
      ctx.emit('handleTodoItemToogle', id);
    }

    const handleTodoItemRemove = (id) => {
      ctx.emit('handleTodoItemRemove', id);
    }

    return {
      handleTodoItemToogle,
      handleTodoItemRemove
    }
  },
}
</script>
