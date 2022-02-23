
import classes from './contact.module.css'

export default function Title(props) {


  return (
    <div>
        <div className={classes.contact_title}>
              <h2>{props.title}</h2>
          {/* here will be home router & contact */}
        </div>
    </div>
  )
}
