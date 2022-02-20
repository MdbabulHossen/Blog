
import React, { Component } from "react";
import Title from "../Contacts/Title";
import classes from "./archive.module.css";
import FooterJoin from "../Contacts/FooterJoin";
import PostRouter from "./Post/PostRouter";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";

import Post1 from "./Post/Post1";
import Post2 from "./Post/Post2";
import Post3 from "./Post/Post3";
import Post4 from "./Post/Post4";
import Post5 from "./Post/Post5";

export default class ArchiveMain extends Component {
  render() {
    return (
      <div>
        <section className={classes.Archive}>
          <Title title="Archive" />
  

        <Router>
          <PostRouter />
          <Route exact path="Post1" component={Post1} />
          <Route exact path="./Post/Post2" component={Post2} />
          <Route exact path="./Post/Post3" component={Post3} />
          <Route exact path="./Post/Post4" component={Post4} />
          <Route exact path="./Post/Post5" component={Post5} />
        </Router>

          <FooterJoin />
        </section>
      </div>
    );
  }
}
