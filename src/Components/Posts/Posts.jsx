import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import classes from "./Post.module.css";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import { Link } from "react-router-dom";
import "./Pagination.css";
import Pagination from "./Pagination";


export default function Posts() {
  const [posts, setPosts] = useState([]);

  // for see posts
  useEffect(() => {
    const fetchData = async () => {

      const respone = await axios.get("https://safe-beach-33471.herokuapp.com/post");
      console.log(respone.data);
      setPosts(respone.data);
    };
    fetchData();
  }, []);


  // for categories filtering...
  const categoryFilter = (catItem) => {

    const devEnv=process.env.NODE_ENV !== "production";

    return axios
      .get(`https://safe-beach-33471.herokuapp.com/post?categories=${catItem}`)
      .then((respone) => {
        setPosts(respone.data);
      })
      .catch((er) => {
        console.log(er);
      });
  };

  // for author post filtering
  const authorFilter = async (authorItem) => {
    const devEnv=process.env.NODE_ENV !== "production";

    return await axios
      .get(`https://safe-beach-33471.herokuapp.com/post?author=${authorItem}`)
      .then((res) => {
        setPosts(res.data);
      });
  };

  // it is for pagination start
  const [pageNumber, setpageNumber] = useState(0);
  const perPage = 6;
  const pagesVisited = pageNumber * perPage;

  const pageCount = Math.ceil(posts.length / perPage);
  const changeHan = ({ selected }) => {
    setpageNumber(selected);
  };
  // it is for pagination end


  return (
    <>
      <div className={classes.postPage}>
        <div className={classes.postTitle}>
          <p>Recent posts</p>
        </div>
       

    
   

        <div className="container">
          <div className="row">

            {posts
              .map((post, index) => {
                return (
                  <div className="col-lg-6" key={index}>
                    <div className={classes.post}>
                      <div className={classes.post_img}>
                        <Link to={`/post/${post.id}`}>
                          <img src={post.imgsrc} alt="not found" />
                        </Link>
                      </div>

                      <div className={classes.post_content}>
                        <b>
                          <AccessTimeRoundedIcon
                            style={{ fontSize: "20px", marginRight: "5px" }}
                          />
                          {new Date().toDateString()}
                        </b>

                        <Link
                          to={`/post/${post.id}`}
                          className={classes.h2Link}
                        >
                          <h2 className={classes.title}>{post.title}</h2>
                        </Link>
                        <b style={{ marginTop: "20px" }}>{post.description}</b>
                      </div>

                      <div className={classes.avatarAndCateroies}>
                        <img
                          src={post.author_img}
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
              })
              .slice(pagesVisited, pagesVisited + perPage)}
          </div>
        </div>
      </div>


      <Pagination pageCount={pageCount} changeHan={changeHan} />

      

    </>
  );
}
