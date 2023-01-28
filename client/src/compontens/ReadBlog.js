import React, {useState} from 'react';
import { getTime } from '../hooks/getTime';
import Modal from './Modal';
import Comment from './Comment';

export default function ReadBlog({blog, comments, name, reactions}) {
  const [showModal, setShowModal] = useState(false);
  const [inputComment, setInputComment] = useState();
  const time = getTime(blog.blog_date);

  const commentReactions = reactions.filter((reaction)=>{
    return reaction.purpose === "comment";
  });

  const renderedComments = comments.map((comment)=>{
    if(comment.blog_id === blog.id){
      const comment_reactions = commentReactions.filter((reaction)=>{
        return reaction.comment_id === comment.id;
      });
      return <Comment comment={comment} comment_reactions={comment_reactions}/>
    }
  });

  const handleInputChange = (e)=>{
    setInputComment(e.target.value);
  }
  
  const handleSubmit = async (e)=>{

    try {
      const body = {
        blog_id: blog.id,
        comUsername: name,
        comment: inputComment,
        comment_date: Date.now()
      }
      
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/comments/add`, {
        method: 'POST',
        headers: {
          token: localStorage.token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });

      const parsedResponse = await response.json();

      if(parsedResponse){
        setShowModal(false);
        setInputComment('');
      }

    } catch (error) {
        console.log(error.message);
    }
  }

  const modal = <Modal onClose={()=>setShowModal(false)}>
    <form onSubmit={handleSubmit} className='pt-4'>
      <div className='form-group'>
        <label>Comment:</label>
        <textarea
          type='text'
          value={inputComment ? inputComment : ''}
          onChange={(e)=>handleInputChange(e)}
          className='form-control'
          />
      </div>
      <button type='submit' className='w-100 mt-2 btn btn-success'>Add</button>
    </form>
  </Modal>

  return (
    <div>
      {showModal && modal}
       <div style={{minWidth: '500px'}} key={blog.id} className='blog'>
          <h4 className='m-0'> {blog.user_name} </h4>
          <span className='date'> {time} </span>
          <h4 className='mt-2 question'>
              {blog.question}
          </h4>
          <div className='blog-text'>
            {blog.blog_text}
          </div>
          <h3 className='mt-3' >Comments</h3>
          <div className='mb-3 comments'>
            {comments && renderedComments}
          </div>
          <buttom  
          onClick={()=>setShowModal(true)}
          style={{width: '100%'}} 
          className="btn btn-primary"
          >Add Comment</buttom>
        </div> 
     </div>
  )
}
