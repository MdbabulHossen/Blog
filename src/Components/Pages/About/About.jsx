import { ClassNames } from "@emotion/react";
import React from "react";
import Title from "../../HeaderTitle/Title";
import classes from "./about.module.css";
import img2 from "../../images/02.jpg";
import img3 from "../../images/03.jpg";
import img4 from "../../images/04.jpg";
import wirter_img from '../../images/Thomas.jpg';

const about = "About";
export default function About() {
  return (
    <div>
      <section className={classes.about}>
        <div className="container">
          <Title title="About" current_pages="About" />
          <h2 className={classes.about_header}>
            We are the Qurno, <br /> Team of content writers and designers.
          </h2>

          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <div className={classes.designer_img}>
                <img src={img2} alt="" />
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className={classes.designer_img}>
                <img src={img3} alt="" />
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className={classes.designer_img}>
                <img src={img4} alt="" />
              </div>
            </div>
          </div>

          <p className={classes.about_text}>
            If ever a place existed where you could just go crazy creatively, it
            is definitely your about page. It’s your chance to show your readers
            who you really are. Pictures, quotes, inspirational graphics,
            whatever it is that drives you.. Display it here in a way that only
            you can. I’ve included a plugin in the setup of this theme that will
            make adding columns to your pages and posts a piece of cake. Let
            creativity take control, and forget about the technical end of
            things, I’ve got your six.
          </p>

          <div className={classes.our_writters}>
            <h2>Our Writers</h2>

            <div className="row">
              <div className="col-lg-4 col-md-6 col-12">
                <div className={classes.writer_img}>
                  <img src={wirter_img} alt="" />
                  <h3>Motacchin Shimu</h3>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-12">
                <div className={classes.writer_img}>
                  <img src={wirter_img} alt="" />
                  <h3>Raihan Ahmed</h3>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-12">
                <div className={classes.writer_img}>
                  <img src={wirter_img} alt="" />
                  <h3>Babul Hossain</h3>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
