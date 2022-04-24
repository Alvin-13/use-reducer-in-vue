import { addTodo, toogleTodo, removeTodo } from './todoList';
import actionType from './actionType';

const todoListReducer = (state, action) => {
  const { type, payload } = action;
  console.log('type:', type);
  console.log('payload:', payload);
  
  switch (type) {
    case actionType.ADD_TODO:
      return addTodo(state, payload);
    case actionType.TOOGLE_TODO:
      return toogleTodo(state, payload);
    case actionType.REMOVE_TODO:
      return removeTodo(state, payload);
    default:
      break;
  }
};

export { todoListReducer };
