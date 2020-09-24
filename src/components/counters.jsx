/*
 * @Description:
 * @Author: FlyingRedPig
 * @Date: 2020-09-22 15:47:35
 * @LastEditors: FlyingRedPig
 * @LastEditTime: 2020-09-23 23:25:21
 * @FilePath: \react_practice\counter-app\src\components\counters.jsx
 */
import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  render() {
    console.log('Counters - Rendered');

    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.props.onDelete}
            onIncrease={this.props.onIncrease}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
// state 是私有的
// props 只能在其他组件，是只读的，不可以在类里面设置
