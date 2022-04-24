import { ref } from 'vue'

const useReducer = (reducer, initialState) => {
  const state = ref(initialState),
        action = {};

  const dispatch = ({type, payload}) => {
    action.type = type;
    action.payload = payload;

    reducer(state, action);
  }

  return [
    state,
    dispatch
  ]
}

export default useReducer;