import { configureStore } from "@reduxjs/toolkit";
import {
    addDislike,
    addLike,
    updateBlog,
    removeBlog,
    addBlog,
    addCommentLike,
    addCommentDislike,
    addComment,
    removeComment,
    updateComment,
    blogsReducer
} from './slices/blogsSlice';

const store = configureStore({
    reducer: {
        blogs: blogsReducer
    }
});

export {
    addDislike,
    addLike,
    updateBlog,
    removeBlog,
    addBlog,
    addCommentLike,
    addCommentDislike,
    addComment,
    removeComment,
    updateComment,
    store
};