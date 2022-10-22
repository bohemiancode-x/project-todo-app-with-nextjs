import { configureStore } from "@reduxjs/toolkit";
import todosReducer from './todoSlice';
import themeReducer from './themeSlice';

export default configureStore({
    reducer: {
        todos: todosReducer,
        theme: themeReducer
    }
})