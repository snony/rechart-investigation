import React, { Component } from 'react';
// import { LineChartContainer, AreaChartContainer, BarChartContainer } from './components'
import { FlexBoxPlay } from './learning'
import { Clock } from './smartSchedule'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Hello World
        <LineChartContainer />
        <AreaChartContainer />
        <BarChartContainer /> */}
        <FlexBoxPlay />
        <div style={{ height: '200px', width: '200px' }}>
          <Clock />
        </div>
      </div>
    );
  }
}

export default App;
