
import React, { Component } from "react";
import classes from "./archive.module.css";
import Title from '../../HeaderTitle/Title'
import Posts from "../../Posts/Posts";

export default class Archive extends Component {
  render() {
    return (
      <>
        <section className={classes.Archive}>
        <Title title="Posts" current_pages="Posts"/>
        </section>

<Posts />

      </>
    );
  }
}
