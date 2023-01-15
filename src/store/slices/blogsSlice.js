import { createSlice } from "@reduxjs/toolkit";

const blogsSlice = createSlice({
    name: 'blogs',
    initialState : [
        {
            id: 0,
            username: '',
            question: '',
            text: '',
            upvotes: 0,
            downvotes: 0,
            date: '',
            comments: [
                {
                    id: 0,
                    comUsername: '',
                    comment: '',
                    upvotes: 0,
                    downvotes: 0,
                    time: ''
                }
            ]
        }
    ],
    reducers: {
        addBlog(state,action){
            // assumption:
            // action.payload === {blog object}
            state.push(action.payload);
        },
        removeBlog(state,action){
            // assumption: 
            // action.payload === the id of blog we want to remove
            const updated = state.filter((blog) =>
                 blog.id !== action.payload
            );
            state = updated;
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
        },
        addLike(state,action){
            // assumption:
            // action.payload === blogId
            state.map((blog)=>{
                if(blog.id === action.payload){
                    blog.upvotes++;
                }
            })
        },
        addDislike(state,action){
            // assumption:
            // action.payload === blogId
            state.map((blog)=>{
                if(blog.id === action.payload){
                    blog.downvotes++;
                }
            })
        },
        addCommentLike(state,action){
            // assumption:
            // action.payload === {blogId, commentId}
            const {
                blogId,
                commentId
            } = action.payload;
        
            state.map((blog)=>{
                if(blog.id === blogId){
                    blog.comments.map((comment)=>{
                        if(comment.id === commentId){
                            comment.upvotes++;
                        }
                    })
                }
            })
        },
        addCommentDislike(state,action){
            // assumption:
            // action.payload === {blogId, commentId}
            const {
                blogId,
                commentId
            } = action.payload;
            
            state.map((blog)=>{
                if(blog.id === blogId){
                    blog.comments.map((comment)=>{
                        if(comment.id === commentId){
                            comment.downvotes++;
                        }
                    })
                }
            })
        },
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

export const{
    addDislike,
    addLike,
    updateBlog,
    removeBlog,
    addBlog,
    addCommentLike,
    addCommentDislike,
    addComment,
    removeComment,
    updateComment
} = blogsSlice.actions;

export const blogsReducer = blogsSlice.reducer;
