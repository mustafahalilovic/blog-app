import { createSlice } from "@reduxjs/toolkit";

const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        /*
        comments: [
            {
                    id: 0,
                    blog_id: 0,
                    comUsername: '',
                    comment: '',
                    upvotes: 0,
                    downvotes: 0,
                    comment_date: ''
            }
        ]
        */
    },
    reducers: {
        addComment(state,action){
            // assumption:
            // action.payload === {blogId, {comment object}}
            const {
                blogId,
                commentObject
            } = action.payload;
        
            state.map((blog)=>{
                if(blog.id === blogId){
                    blog.comments.push(commentObject);
                }
            })
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