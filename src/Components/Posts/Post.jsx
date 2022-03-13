import React, { useEffect } from "react";
import classes from "./Post.module.css";
import author from "../images/Thomas.jpg";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import headerimg from "../images/singlePostImg.jpg";
import img2 from "../images/singlepostimg2.jpg";
import { Link } from "react-router-dom";
import Posts from "./Posts";
import RelatedPost from "./RelatedPost";

export default function Post() {
  const { id } = useParams();
  const [post, setPosts] = useState({});

  useEffect(() => {
    const fecthData = async () => {
     
      const response = await axios.get(`https://safe-beach-33471.herokuapp.com/post/${id}`);
      setPosts(response.data);
    };
    fecthData();
  }, []);

  const authorFilter = async (authorItem) => {
    
    return await axios
      .get(`https://safe-beach-33471.herokuapp.com/post?author=${authorItem}`)
      .then((res) => {
        setPosts(res.data);
      });
  };

  return (
    <>
      <br />
      <br />
      <br />
      <div className={classes.singlePost}>
        <div className="container">
          <div className={classes.header}>
            <h1>
              What does it take to create an object that travels at 1% the speed
              of light?
            </h1>
            <div className={classes.avatarAndCateroies}>
              <img src={author} alt="" />
              <Link to={"/"}>
                <b>
                  by{" "}
                  <span
                    className={classes.author}
                    onClick={() => authorFilter("author")}
                  >
                    {post.author} -{" "}
                  </span>
                </b>
              </Link>
              <b>
                <AccessTimeRoundedIcon />
                {new Date().getMinutes()} min read
              </b>
              <b> -{new Date().toDateString()}</b>
            </div>
          </div>
        </div>

        <div className="container">
          <div className={classes.headerImg}>
            <img src={headerimg} alt="" />
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-3"></div>

            <div className="col-lg-9">
              <div className={classes.fristContent}>
                <b>
                  Light is fast. In fact, it is the fastest thing that exists,
                  and a law of the universe is that nothing can move faster than
                  light. Light travels at 186,000 miles per second (300,000
                  kilometers per second) and can go from the Earth to the Moon
                  in just over a second. Light can streak from Los Angeles to
                  New York in less than the blink of an eye.
                  <br />
                  <br />
                  While 1% of anything doesn’t sound like much, with light,
                  that’s still really fast – close to 7 million miles per hour!
                  At 1% the speed of light, it would take a little over a second
                  to get from Los Angeles to New York. This is more than 10,000
                  times faster than a commercial jet.
                </b>
                <h2>Why even 1% of light speed is hard</h2>
                <b>
                  What’s holding humanity back from reaching 1% of the speed of
                  light? In a word, energy. Any object that’s moving has energy
                  due to its motion. Physicists call this kinetic energy. To go
                  faster, you need to increase kinetic energy. The problem is
                  that it takes a lot of kinetic energy to increase speed. To
                  make something go twice as fast takes four times the energy.
                  Making something go three times as fast requires nine times
                  the energy, and so on.
                </b>

                <img src={img2} alt="" />
                <b>
                  For example, to get a teenager who weighs 110 pounds (50
                  kilograms) to 1% of the speed of light would cost 200 trillion
                  Joules (a measurement of energy). That’s roughly the same
                  amount of energy that 2 million people in the U.S. use in a
                  day.
                </b>
                <h2>How fast can we go?</h2>
                <b>
                  It’s possible to get something to 1% the speed of light, but
                  it would just take an enormous amount of energy. Could humans
                  make something go even faster?
                  <br />
                  <br />
                  Yes! But engineers need to figure out new ways to make things
                  move in space. All rockets, even the sleek new rockets used by
                  SpaceX and Blue Origins, burn rocket fuel that isn’t very
                  different from gasoline in a car. The problem is that burning
                  fuel is very inefficient.
                  <br />
                  <br />
                  Other methods for pushing a spacecraft involve using electric
                  or magnetic forces. Nuclear fusion, the process that powers
                  the Sun, is also much more efficient than chemical fuel.
                </b>

                <div className={classes.lastinPost}>
                  <b> Tags: </b>
                  <Link to={"/"}>
                    <button>Life</button>
                  </Link>
                  <Link to={"/"}>
                    <button>Lighting</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <RelatedPost />
      </div>
    </>
  );
}
