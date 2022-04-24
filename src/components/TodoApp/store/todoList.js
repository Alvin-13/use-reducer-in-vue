const addTodo = (state, payload) => {
  state.value.push(payload)
};

const toogleTodo = (state, payload) => {
  state.value = state.value.map(item => {
    item.id === payload && (item.completed = !item.completed)
    return item
  })
  // state.value = state.value.reduce((prev, cur) => {
  //   cur.id === payload && (cur.completed = !cur.completed)
  //   return prev.push(cur)
  // }, [])
};

const removeTodo = (state, payload) => {
  state.value = state.value.filter(item => item.id !== payload)
};

export {
  addTodo,
  toogleTodo,
  removeTodo
}