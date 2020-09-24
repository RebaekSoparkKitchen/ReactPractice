/*
 * @Description:
 * @Author: FlyingRedPig
 * @Date: 2020-09-23 16:50:59
 * @LastEditors: FlyingRedPig
 * @LastEditTime: 2020-09-23 23:24:52
 * @FilePath: \react_practice\counter-app\src\components\navbar.jsx
 */
import React, { Component } from 'react';
const NavBar = (props) => {
  console.log('NavBar - Rendered');

  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{' '}
        <span className="badge badge-pill badge-secondary">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
