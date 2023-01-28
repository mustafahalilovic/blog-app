import { createSlice } from "@reduxjs/toolkit";

const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        comments: []
    },
    reducers: {
        addComment(state,action){
            // assumption:
            // action.payload === { comment object }
            state.comments = action.payload;
        },
        removeComment(state,action){
            // assumption:
            // action.payload === {blogid, commentId}
            const {
                blogId,
                commentId
            } = action.payload;
        
            state.map((blog)=>{
                if(blog.id === blogId){
                    const updated = blog.comments.filter((comment)=>{
                        return comment.id !== commentId;
                    })
                    blog.comments = updated;
                }
            });
        
        },
        updateComment(state,action){
            // assumption: 
            // action.payload === {blogId, commentId, commentText}
            const {
                blogId,
                commentId,
                commentText
            } = action.payload;
        
            state.map((blog)=>{
                if(blog.id === blogId){
                    blog.comments.map((comment)=>{
                        if(comment.id === commentId){
                            comment.comment = commentText;
                        }
                    })
                }
            })
        }
    }
});

export const {
    addComment,
    removeComment,
    updateComment
} = commentsSlice.actions;

export const commentsReducer = commentsSlice.reducer;