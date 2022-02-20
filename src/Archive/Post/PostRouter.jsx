import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class PostRouter extends Component {
  render() {
    return (
      <div>
          <nav>
            <ul>
              <li>
                <Link to="./Post/Post">Post 1</Link>
              </li>
              <li>
                <Link to="">Post 2</Link>
              </li>
              <li>
                <Link to="">Post 3</Link>
              </li>
              <li>
                <Link to="">Post 4</Link>
              </li>
              <li>
                <Link to="">Post 5</Link>
              </li>
                
             
            </ul>
          </nav>
      </div>
    )
  }
}
