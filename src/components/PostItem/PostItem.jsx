import React from "react";
import classes from './PostItem.module.css'

let PostItem = (props) => {

    return (
        <div className={classes.item} >
            <img className={classes.imgPost} src='https://i03.fotocdn.net/s119/11a097ff366bfb24/user_l/2713047325.jpg' alt="Ava"/>
            <div className={classes.namePost}>
                <h3>{props.name}</h3>
            </div>
            <div className={classes.textPost}>
                {props.text}
            </div>

        </div>
    )
}

export default PostItem