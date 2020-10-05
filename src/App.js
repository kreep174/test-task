import React from 'react';
import './App.css';
import Posts from "./components/Posts";

function App(props) {
    debugger
  return (
    <div>
      <Posts state={props.state.post}
             newPost={props.state.newPost}
             dispatch={props.dispatch} />
    </div>
  );
}

export default App;
