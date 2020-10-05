import React from "react";
import classes from './Post.module.css'
import PostItem from "./PostItem/PostItem";
import {AddPostActionCreator, updateNewPostTextActionCreator} from "../state";

let Posts = (props) => {

    let postData = props.state.map(p => <PostItem name={p.name} text={p.text}/>)

    let newPostName = React.createRef()
    let newPostText = React.createRef()

    let addPost = () => {
        let newName = newPostName.current.value
        let newText = newPostText.current.value
        props.dispatch( AddPostActionCreator(newName, newText) )
        props.dispatch( updateNewPostTextActionCreator('', '') )
    }

    let onPostChange = () => {
        let newNameSymbol = newPostName.current.value
        let newTextSymbol = newPostText.current.value
        props.dispatch( updateNewPostTextActionCreator(newNameSymbol, newTextSymbol) )
    }

    return (
        <div className={classes.formPost}>
            <h2>Напиши пост:</h2>
            <div className={classes.name}>
                <input onChange={onPostChange} ref={newPostName} value={props.newPost.newPostName}/>
            </div>
            <div className={classes.text}>
                <textarea onChange={onPostChange} ref={newPostText} value={props.newPost.newPostText}/>
            </div>
            <div className={classes.btn}>
                <button onClick={ addPost }>Отправить</button>
            </div>
            <div className={classes.posts}>
                {postData}

            </div>
        </div>
    )
}

export default Posts