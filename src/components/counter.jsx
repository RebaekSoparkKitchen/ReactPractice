/*
 * @Description:
 * @Author: FlyingRedPig
 * @Date: 2020-09-18 16:38:38
 * @LastEditors: FlyingRedPig
 * @LastEditTime: 2020-09-23 23:25:51
 * @FilePath: \react_practice\counter-app\src\components\counter.jsx
 */
import React, { Component } from 'react';

class Counter extends Component {
  render() {
    let classes = this.getBadgeClasses();
    console.log('Counter - Rendered');

    return (
      <div>
        <span className={classes}>{this.props.counter.value}</span>
        <button
          onClick={() => this.props.onIncrease(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.props.counter.value === 0 ? 'warning' : 'primary';
    return classes;
  }
}

export default Counter;
