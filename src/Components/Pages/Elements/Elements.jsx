import React from "react";
import Title from "../../HeaderTitle/Title";
import "../../HeaderTitle/title.module.css";
import classes from "./elements.module.css";

export default function Elements() {
  return (
    <div>
      <section className={classes.elements}>
        <div className="container">
          <Title title="Elements" current_pages="Elements" />
          <div className={classes.element_wrapper}>
            <div className={classes.element_first}>
              <h2>Elements</h2>
              <p>
                This page demonstrate some basic elements and typography which
                you will use frequently within your site. Make the text bold or
                make it italic. Why not bold and italic both at a time. Here is
                the link to Hugo website. Do you want to link a long text here
                how it looks in this theme Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Eligendi aliquam magnam deserunt
                veritatis dolores exercitationem fugit placeat, sunt repellendus
                nulla?
              </p>
            </div>

            <div className={classes.heading}>
              <div>
                <h1>Heading One</h1>
              </div>
              <div>
                <h2>Heading Two</h2>
              </div>
              <div>
                <h3>Heading Three</h3>
              </div>
              <div>
                <h4>Heading Four</h4>
              </div>
              <div>
                <h5>Heading Five</h5>
              </div>
              <div>
                <h6>Heading Six</h6>
              </div>
            </div>

            <div className={classes.paragraph}>
              <h2>Paragraph</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <hr />

              <div className={classes.unorderd_list}>
                <h2>Unorderd List</h2>
                <ul>
                  <li>The leap into electronic typesetting</li>
                  <li>It was popularised in the 1960s</li>
                  <li>Recently with desktop publishing software</li>
                  <li>An unknown printer took a galley</li>
                  <li>It has survived not only five centuries</li>
                </ul>
                <hr />
              </div>

              <div className={classes.orderd_list}>
                <ol>
                  <li>The leap into electronic typesetting</li>
                  <li>It was popularised in the 1960s</li>
                  <li>Recently with desktop publishing software</li>
                  <li>An unknown printer took a galley</li>
                  <li>It has survived not only five centuries</li>
                </ol>
                <hr />
              </div>

              <div className={classes.blockquote}>
                <div className={classes.inner_blockquote}>
                  <p>
                    {" "}
                    <i className="fa fa-quote-left"></i> Since its beginning in
                    the 1950s, the field of artificial intelligence has cycled
                    several times between periods of optimistic predictions and
                    investment.{" "}
                  </p>
                  <aside> - Alexender Toto</aside>
                </div>
                <hr />
              </div>
               
               <div className={classes.gallery}>
                 <div className="row">
                   <div className="col-lg-4 col-6">
                     
                   </div>
                   <div className="col-lg-4 col-6">

                   </div>
                 </div>
               </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
