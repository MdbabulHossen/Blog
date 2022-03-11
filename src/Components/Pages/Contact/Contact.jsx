

import classes from "./contact.module.css";
import Title from "../../HeaderTitle/Title";
import { useNavigate } from "react-router-dom";



import React, { useState } from 'react'

 const state = {
  names: "",
  email: "",
  textArea: "",
};



export default function Contact() {
  const Navigate=useNavigate();
   const [user,setUser]=useState (state)

   const handleNameChange=(e)=>{
     setUser({...user,[e.target.name]:e.target.value})
   }

    const handleSubmit = (e) => {
      
      e.preventDefault();
      Navigate("/")
  
    }

  return (
    




    
      <div>
        <section className={classes.contact}>
          <div className="container">

            <Title title ="Contact" current_pages="Contact"/>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <div className={classes.contact_inner_item}>
                  <h3>Contact Qurno</h3>
                  <p>
                    I’m here to help and answer any question you might have. I
                    look forward to hearing from you
                  </p>
                  <br />
                  <h3>
                    Hate forms? <br />
                    Write an email or make a call
                  </h3>
                  <a href="#" className="">
                    {" "}
                    <i className="fa fa-envelope mr-2"> </i> blog@gmail.com
                  </a>
                  <p href="#">
                    {" "}
                    <i className="fa fa-phone"></i> +98 02 296 4902
                  </p>

                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-12">
                <form onSubmit={handleSubmit}>
                  <div className={classes.contact_inner_item}>
                    <h3 className="mb-3">Contact form</h3>
                    <div className={classes.contact_inputs_item}>
                      <textarea
                        placeholder="Write Something"
                        onChange={handleNameChange}
                        name="textArea"
                        value={user.textArea}
                        required
                      ></textarea>

                      <input
                        type="text"
                        placeholder="Enter Your Name Here"
                        id="name"
                        value={user.names}
                        name="names"
                        onChange={handleNameChange}
                        required
                      />

                      <input
                        type="email"
                        placeholder="Email address"
                        id="email"
                        name="email"
                        value={user.email}
                        onChange={handleNameChange}
                        required
                      />

                      <button  type="submit">
                        Send <i className="fa fa-paper-plane mx-2"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
 
  



  )


}