import React, { Component } from 'react';
import Clock from './Clock';
import Planner from './Planner';

class App extends Component {
  render() {
    return (
      <div>
        <Planner/>
      </div>
    )
  }
}

export default App;