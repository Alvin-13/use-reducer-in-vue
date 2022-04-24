<template>
  <div>
    <TodoForm 
      @add-todo-item='addTodoItem'
    />
    <TodoList 
      :todoList='todoList'
      @handle-todo-item-toogle='handleTodoItemToogle'
      @handle-todo-item-remove="handleTodoItemRemove"
    />
  </div>
</template>

<script>
import TodoForm from './Form'
import TodoList from './List'

import { useReducer } from '../../hooks'
import { initialTodoList, actionType, todoListReducer } from './store'

export default {
  name: '',
  components: {
    TodoList,
    TodoForm
  },
  setup() {
    const [todoList, todoDisPatch] = useReducer(todoListReducer, initialTodoList);

    const addTodoItem = (todoItem) => {
      console.log('add todo');
      todoDisPatch({
        type: actionType.ADD_TODO,
        payload: todoItem
      })
    }

    const handleTodoItemToogle = (id) => {
      console.log('toogle');
      todoDisPatch({
        type: actionType.TOOGLE_TODO,
        payload: id
      })
    }

    const handleTodoItemRemove = (id) => {
      console.log('remove');
      todoDisPatch({
        type: actionType.REMOVE_TODO,
        payload: id
      })
    }

    return {
      todoList,
      addTodoItem,
      handleTodoItemToogle,
      handleTodoItemRemove
    }
  }
}
</script>
