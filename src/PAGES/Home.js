
import { collection, doc, getDocs} from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import { db } from '../Firebase';


const Home = () => {

  
const [post , setpost] = useState([]);
const isLogin = localStorage.getItem("isLogin")
const postsColloectioRef = collection(db, "blog-posts");

  useEffect(()=>{
       let getpost = async ()=>{
           let data = await getDocs(postsColloectioRef)
           setpost(data.docs.map((doc)=>({...doc.data(),id : doc.id})))
       }
       getpost();
  },[])

  

  return (
  <>
     {

        isLogin ? <> 
        <div className="Post-heading">
        <h1>Recent Posts..</h1>
       </div>
      <div   className='post-container'>
  
          {
            post.map((posts)=>{
              return(<>
                  <div className="posts-wrapper">
                    <h3>{posts.title}</h3><br />
                    <div className="posts-hold">
                      {posts.post}
                    </div>
                  </div>
              </>
              )
            })
          }
  
      </div>
        </> : <p style={{display:"flex" ,justifyContent:"center"
        , marginTop :"100px"}}><Link to="Login" style={{color:"#000"}} ><span style={{color:"blue",borderBottom:"1px solid blue"}}>click</span> Here to Login and view the post.</Link></p>

     }
  </>
  )
}

export default Home