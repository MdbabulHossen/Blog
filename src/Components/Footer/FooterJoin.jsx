import React, {useState} from 'react'
import classes from './Footer.module.css'




export default function Footer() {

  const [joinmail, setjoinmail] = useState('');

  const joinEmail = (e)=>{
    setjoinmail(e.target.value)
  }

  const handleJoinSubmit = (e)=>{
    console.log(joinmail);
    e.preventDefault()
  }
  return (
    <div>
       <div className="container">
            <div className={classes.get_latest_post_contact}>
              <h2>Get latest posts delivered right to your inbox</h2>  

            <form action="" onSubmit={handleJoinSubmit}>
              
            <div className={classes.join_us_today}>
                <div>
                  <input 
                    type="email" 
                    placeholder='Your email address'
                    onChange={joinEmail} 
                    value={joinmail}
                    required
                  />
                </div>
                <div>
                  <button type='submit'>
                    <i className="fa fa-user mx-2"> Join today</i>
                  </button>
                </div>
              </div>
            </form>

              <div className={classes.footer_two_item}>
                  <div className="">
                    <p>©2022 Qurno. All rights reserved.</p>
                  </div>
                  <div className="">
                    <p>Privacy Policy | 404 page</p>
                  </div>
              </div>

            </div>
            
           </div>
    </div>
  )
}
