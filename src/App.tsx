import React, { Component } from 'react';
import { LineChartContainer, AreaChartContainer } from './components'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        Hello World
        <LineChartContainer />
        <AreaChartContainer />
      </div>
    );
  }
}

export default App;
