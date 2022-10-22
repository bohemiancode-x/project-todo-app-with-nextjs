import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: []
};

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos = [...state.todos, action.payload]
        },
        deleteTodo: (state, action) => {
            const todoId = action.payload;
            state.todos = state.todos.filter((todo) => todo.id !== todoId);
        },
        deleteCompletedTodos: (state) => {
            state.todos = state.todos.filter((todo) => todo.completed === false);
        },
        completeTodo: (state, action) => {
            const newState = {...state};
            const index = newState.todos.findIndex(f => f.id === action.payload);
            const todo = newState.todos[index];
            const updatedTodo = {
                ...todo,
                "completed": !todo.completed,
            };
            state.todos = [
                ...newState.todos.slice(0, index),
                updatedTodo,
                ...newState.todos.slice(index + 1)
            ]
        }
    }
})

export const { addTodo, deleteTodo, completeTodo, deleteCompletedTodos } = todoSlice.actions;

export default todoSlice.reducer;