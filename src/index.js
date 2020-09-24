/*
 * @Description:
 * @Author: FlyingRedPig
 * @Date: 2020-09-18 16:23:31
 * @LastEditors: FlyingRedPig
 * @LastEditTime: 2020-09-23 23:23:31
 * @FilePath: \react_practice\counter-app\src\index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
