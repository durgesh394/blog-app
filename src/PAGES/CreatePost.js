import React from 'react'
import { useState } from 'react';
import { addDoc, collection } from "firebase/firestore"
import { auth, db } from '../Firebase';
import { useNavigate } from 'react-router';
const CreatePost = () => {
  const navigate = useNavigate();
  const [value, setvalue] = useState({
    title: "",
    post: ""
  })

  //create the refence database
  const postsColloectioRef = collection(db, "blog-posts");

  const CreatePostHandler = async (e) => {
    e.preventDefault();
    await addDoc(postsColloectioRef, { 
      title: value.title ,
      post : value.post,
      author :{
        name : auth.currentUser.displayName,
        id : auth.currentUser.uid
      }
      
    });
    navigate("/")
  }



  return (
    <div className='create-post'>

      <h1>Create New Post</h1><br />
      <div className="post-wrapper">
        <form action="" onSubmit={CreatePostHandler}>

          <div className="createPost-title">
            <label htmlFor='posttitle'>Title </label><br />
            <input
              value={value.title}
              onChange={(e) => { setvalue({ ...value, title: e.target.value }) }}
              type="text" placeholder='Title..' required/>
          </div><br />
          <div className="createPost-Textaria">
            <label htmlFor='post'>write post</label><br />
            <textarea
              value={value.post}
              onChange={(e) => { setvalue({ ...value, post: e.target.value }) }}
              placeholder='Post.....' className='createPost' required/>
          </div>
          <div className="post-button">
            <input type='submit' value="Post" className='post-btn' />
          </div>


        </form>
      </div>

    </div>
  )
}

export default CreatePost