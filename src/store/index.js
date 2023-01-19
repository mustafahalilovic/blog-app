import { configureStore } from "@reduxjs/toolkit";
import {
    updateBlog,
    removeBlog,
    addBlog,
    blogsReducer
} from './slices/blogsSlice';

import {
    addComment,
    removeComment,
    updateComment,
    commentsReducer
} from './slices/commentsSlice';

import {
    addName,
    nameReducer
} from './slices/nameSlice';

import { 
    addReaction, 
    reactionReducer 
} from "./slices/reactionSlice";

const store = configureStore({
    reducer: {
        blogs: blogsReducer,
        name: nameReducer,
        comments: commentsReducer,
        reaction: reactionReducer
    }
});

export {
    updateBlog,
    removeBlog,
    addBlog,
    addComment,
    removeComment,
    updateComment,
    addName,
    addReaction,
    store
};