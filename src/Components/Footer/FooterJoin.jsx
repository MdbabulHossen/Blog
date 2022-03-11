import React, { useState } from "react";
import classes from "./Footer.module.css";
import { Link,useNavigate } from "react-router-dom";
export default function Footer() {
  const Navigate=useNavigate();
  const [joinmail, setjoinmail] = useState("");

  const joinEmail = (e) => {
    setjoinmail(e.target.value);
  };

  const joinHandle=()=>{
     Navigate("/")
    
  }
  const handleJoinSubmit = (e) => {
    console.log(joinmail);
    e.preventDefault();
  };
  return (
    <div className={classes.footer}>
      <div className="container">
        <div className={classes.get_latest_post_contact}>
          <h2>Get latest posts delivered right to your inbox</h2>

          <form action="" onSubmit={handleJoinSubmit}>
            <div className={classes.join_us_today}>
              <div>
                <input
                  type="email"
                  placeholder="Your email address"
                  onChange={joinEmail}
                  value={joinmail}
                  required
                />
              </div>
              <div>
                <button type="submit" onClick={joinHandle}>
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
              <Link to ={"/privacy"}>
              <b>privacy policy</b>
              </Link>
              <Link to={"/four"} style={{marginLeft:"10px"}}>
               <b >404</b>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
