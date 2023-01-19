import { createSlice } from "@reduxjs/toolkit";

const blogsSlice = createSlice({
    name: 'blogs',
    initialState : {
    },
    reducers: {
        addBlog(state,action){
            // assumption:
            // action.payload === [blogs array]
            state.blogs = action.payload;
        },
        removeBlog(state, action){
            // assumption: 
            // action.payload === the id of blog we want to remove
            const updated = state.blogs.filter((blog) =>
                 blog.id !== action.payload
            );
            state.blogs = updated;
        },
        updateBlog(state,action){
            // assumption: 
            // action.payload === {blogId, text}
            const {
                blogId,
                text
            } = action.payload;

            state.map((blog)=>{
                if(blog.id === blogId){
                    blog.text = text;
                }
            })
        }
    }
});

export const{
    updateBlog,
    removeBlog,
    addBlog,
} = blogsSlice.actions;

export const blogsReducer = blogsSlice.reducer;
