import React, { Component } from 'react';
import { LineChartContainer, AreaChartContainer, BarChartContainer } from './components'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        Hello World
        <LineChartContainer />
        <AreaChartContainer />
        <BarChartContainer />
      </div>
    );
  }
}

export default App;
