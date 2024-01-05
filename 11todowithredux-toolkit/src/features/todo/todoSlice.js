import { createSlice, nanoid } from "@reduxjs/toolkit";

const intialState = {
  todos: [{ id: 1, text: "Learn Redux" }],
};

export const todoSlice = createSlice({
  name: "todoApp",
  initialState: intialState,
  reducers: {
    addTodos: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodos, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
