import * as serviceWorker from './serviceWorker';
import store from "./state";
import ReactDOM from "react-dom";
import React from "react";
import './index.css'
import App from "./App";


 let rerender = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} dispatch={store.dispatch.bind(store)} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerender(store.getState());

store.subscriber(rerender)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
