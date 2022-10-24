import { createSlice } from "@reduxjs/toolkit";

//const mode = localStorage.getItem("theme") === null ? 'light' : localStorage.getItem("theme");

const initialState = {
    theme: 'light'
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme: (state, action) => {
            state.theme = action.payload;
            localStorage.setItem('theme', action.payload)
        }
    }
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;