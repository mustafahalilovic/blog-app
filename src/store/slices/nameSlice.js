import { createSlice } from "@reduxjs/toolkit";

const nameSlice = createSlice({
    name: 'name',
    initialState: {
        username: ''
    },
    reducers: {
        addName(state, action){
            state.username = action.payload;
        }
    }
});

export const {
    addName
} = nameSlice.actions;

export const nameReducer = nameSlice.reducer;