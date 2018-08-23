import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as fruit from './fruit.json';
import { Chart, ArgumentAxis, ValueAxis, BarSeries } from '@devexpress/dx-react-chart-material-ui';



class App extends Component {
  render() {
    function getFruit(indexNum){
      return `You choose ${fruit[indexNum].name} with ${fruit[indexNum].fans} fans`
    }

    function barGraph(){
      return (
          <Chart data={fruit} width={600}>
            <ArgumentAxis />
            <ValueAxis />
            <BarSeries color='#f58220' valueField='fans' argumentField='name'></BarSeries>
          </Chart>
      )

    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Hello World. I am going to make a mock of data
        </p>

        <div className='visDiv'>

            {barGraph()}
        </div>
      </div>
    );
  }
}

export default App;
