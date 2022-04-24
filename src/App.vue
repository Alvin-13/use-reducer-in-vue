<template>
  <div>
    <TodoApp />
  </div>
</template>

<script>
import TodoApp from '@/components/TodoApp';

// const [todoList, todoDispatch] = useReducer(todoListReducer, initialTodoList);

/**
 *  const todoListReducer = (todoList, action) => {
  const { type, payload } = action;
  
  switch(type) {
    case actionType.ADD_TODO: 
      return addTodo(todoList, payload);
    case actionType.TOOGLE_TODO: 
      return toogleTodo(todoList, payload);
    case actionType.REMOVE_TODO: 
      return removeTodo(todoList, payload);
    default: 
      break;
  }
} */

export default {
  name: 'App',
  components: {
    TodoApp,
  },
};
</script>
