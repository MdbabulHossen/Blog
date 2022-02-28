import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import classes from "./Post.module.css";
import img1 from "../images/02.jpg";
import author from "../images/Thomas.jpg";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import { Link } from "react-router-dom";

export default function RelatedPost() {
  const [posts, setPosts] = useState([]);

  const postsItem = posts.slice(Math.max(posts.length - 4, 0));

  useEffect(() => {
    const fetchData = async () => {
      const respone = await axios.get("http://localhost:5000/post");
      console.log(respone.data);
      setPosts(respone.data);
    };
    fetchData();
  }, []);

  const categoryFilter = (catItem) => {
    return axios
      .get(`http://localhost:5000/post?categories=${catItem}`)
      .then((respone) => {
        setPosts(respone.data);
      })
      .catch((er) => {
        console.log(er);
      });
  };

  const authorFilter = async (authorItem) => {
    return await axios
      .get(`http://localhost:5000/post?author=${authorItem}`)
      .then((res) => {
        setPosts(res.data);
      });
  };

  return (
    <>
      {/* for Related Posts */}

      <div className={classes.postPage}>
        <div className={classes.postTitle}>
          <p>Recent posts</p>
        </div>
        <div className="container">
          <div className="row">
            {postsItem.map((post, index) => {
              return (
                <div className="col-lg-6" key={index}>
                  <div className={classes.post}>
                    <div className={classes.post_img}>
                      <img src={img1} alt="not found" />
                    </div>

                    <div className={classes.post_content}>
                      <b>
                        <AccessTimeRoundedIcon
                          style={{ fontSize: "20px", marginRight: "5px" }}
                        />
                        {new Date().toDateString()}
                      </b>

                      <Link to={`/post/${post.id}`} className={classes.h2Link}>
                        <h2 className={classes.title}>{post.title}</h2>
                      </Link>
                      <b style={{ marginTop: "20px" }}>{post.description}</b>
                    </div>

                    <div className={classes.avatarAndCateroies}>
                      <img
                        src={author}
                        alt=""
                        onClick={() => authorFilter(post.author)}
                      />

                      <b>
                        by
                        <span
                          className={classes.author}
                          onClick={() => authorFilter(post.author)}
                        >
                          {post.author} .
                        </span>
                      </b>

                      <button
                        className={classes.avBtn}
                        onClick={() => categoryFilter(post.categories)}
                      >
                        {post.categories[0]}
                      </button>

                      {post.categories[1] && (
                        <button
                          className={classes.avBtn}
                          onClick={() => categoryFilter(post.categories)}
                        >
                          {post.categories[1]}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
