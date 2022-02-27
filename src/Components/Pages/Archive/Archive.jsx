
import React, { Component } from "react";
import classes from "./archive.module.css";
import Title from '../../HeaderTitle/Title'

export default class Archive extends Component {
  render() {
    return (
      <div>
        <section className={classes.Archive}>
        <Title title="Archive" current_pages="Archive"/>
        </section>
      </div>
    );
  }
}
