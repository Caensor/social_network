import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./redux/store";
import {storeRender} from "./redux/store";

const Rerender = () =>{ReactDOM.render(<App store={store} />, document.getElementById('root'))}  ;
storeRender(Rerender);
Rerender();

export default Rerender;
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
