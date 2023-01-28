import { createSlice } from "@reduxjs/toolkit";

const reactionSlice = createSlice({
    name: 'reaction',
    initialState: {
        
    },
    reducers: {
        addReaction(state, action){
            state.reactions = action.payload;
        }
    }
});

export const {
    addReaction
} = reactionSlice.actions;

export const reactionReducer = reactionSlice.reducer;