import React, { Component } from 'react';
// import { LineChartContainer, AreaChartContainer, BarChartContainer } from './components'
// import { FlexBoxPlay } from './learning'
// import { Clock } from './smartSchedule'
// import { Header } from './header'
import { BasicFlex } from './flexBox'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Header /> */}
        <BasicFlex />
      </div>
    );
  }
}

export default App;
