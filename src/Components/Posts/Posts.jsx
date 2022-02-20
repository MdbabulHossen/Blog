import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios'
import classes from './Post.module.css'
import img1 from "../images/02.jpg"
import author from '../images/Thomas.jpg'
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';



export default function Posts() {
  
  const [posts,setPosts]=useState([]);

useEffect(()=>{
    const fetchData=async()=>{
      const respone=await axios.get("http://localhost:5000/post");
       console.log(respone.data)
       setPosts(respone.data)
    };
    fetchData();
},[])

  return (
    <>
    <div className={classes.postPage}>
       <div className={classes.postTitle}>
         <p>Recent posts</p>
       </div>
      <div className="container">
         <div className="row">
           
             
              {
                  posts.map((post,index)=>{
                    return(
                     <div className="col-lg-6" key={index} > 
                      <div className={classes.post}>
                          <div className={classes.post_img}>
                              <img src={img1} alt="not found"/>
                          </div>


                          <div className={classes.post_content}>   
                              <b>
                                  <AccessTimeRoundedIcon style={{fontSize:"20px",marginRight:"5px"}}/>
                                  {new Date().toDateString()}
                              </b>

                              <h2 className={classes.title}>{post.title}</h2>
                              <b style={{marginTop:"20px"}}>{post.description}</b>
                          </div>


                        <div className={classes.avatarAndCateroies}>
                             <img src={author} alt="" />
                             <b>by <span className={classes.author}>{post.author} . </span></b>
                             <button className={classes.avBtn}>{post.categories[0]}</button>
                             {post.categories[1] && <button className={classes.avBtn}>{post.categories[1]}</button>}
                          
                        </div>
                      </div>
                  </div>  
                    )
                  })
                }
   
          
         </div>
      </div>
    </div>
   

    
    </>
  )
}
