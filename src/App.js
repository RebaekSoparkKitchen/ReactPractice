/*
 * @Description:
 * @Author: FlyingRedPig
 * @Date: 2020-09-18 16:23:31
 * @LastEditors: FlyingRedPig
 * @LastEditTime: 2020-09-23 23:23:02
 * @FilePath: \react_practice\counter-app\src\App.js
 */
import React from 'react';
import NavBar from './components/navbar.jsx';
import './App.css';
import Counters from './components/counters';
import { Component } from 'react';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  constructor() {
    super();
    console.log('App - Constructor');
  }

  componentDidMount() {
    //Ajax Call
    console.log('App - Mounted');
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value += 1;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const newCounters = this.state.counters.filter(
      (counter) => counter.id !== counterId
    );
    this.setState({ counters: newCounters });
  };
  render() {
    console.log('App - Rendered');
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            onIncrease={this.handleIncrement}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
