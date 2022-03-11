import classes from "./title.module.css";
import {Link} from 'react-router-dom'
export default function Title(props) {
  return (
    <div>
      <div className={classes.title}>
        <h2>{props.title}</h2>
        <div className={classes.title_under_text}>
          {" "}
          <Link to={"/"}>
            {" "}
            <i className="far fa-home-alt m-1"> </i>
            Home
          </Link>
          <li>{props.current_pages}</li>
        </div>
      </div>
    </div>
  );
}
