import React from 'react'
import Posts from '../Posts/Posts'
import classes from './Home.module.css'

export default function Home() {
  return (
    <>
    <div className={classes.Homepage}>
    <div className="container">
        <div className={classes.head}>
            <h1>Taking control of your daily  life is <br /> easy when you know how!</h1>
        </div>
    </div>
 </div>  
    
    <Posts />
    
    </>
  )
}
