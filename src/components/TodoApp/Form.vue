<template>
  <div>
    <input type="text" v-model="todoValue" placeholder="Please type your todo item...">
    <button @click="handleAddTodItem">Add Todo</button>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'TodoForm',
  emits: ['addTodoItem'], // 官方推荐 最好注册一下自定义事件
  setup(props, ctx) {
    const todoValue = ref('');

    const handleAddTodItem = () => {
      ctx.emit('addTodoItem', {
        id: new Date().getTime(),
        content: todoValue.value,
        completed: false
      });

      todoValue.value = '';
    }
    return {
      todoValue,
      handleAddTodItem
    }
  },
}
</script>
