import React, { Component } from 'react';
import './App.css';
import * as fruit from './data/fruit.json';
import * as projDetails from './data/projDetails.json'
import { Chart, ArgumentAxis, ValueAxis, BarSeries } from '@devexpress/dx-react-chart-material-ui';
import Gantt from './gantt.js'

/***
 * 
 * Third party libraries in this demo:
 * 
 * devexpress
 * material ui
 * dhtmlx-gantt
 */

let chartData = { //Testing data for the gantt chart
  data: [],
  links: [
    {id: 1, source: 1, target: 3, type: '0'}
  ]
}


class App extends Component {
  render() {
  function renderGantt(){

      for(let i=0; i < projDetails['length']; i++){
        let proj = {
          id: projDetails[i].id, 
          text: projDetails[i].projName, 
          start_date: projDetails[i].startDate, 
          duration: projDetails[i].numDays, 
          progress: 0
        }

        chartData['data'].push(proj)
      }

      console.log(chartData)
    }

    renderGantt()



    function getFruit(indexNum){
      return `You choose ${fruit[indexNum].name} with ${fruit[indexNum].fans} fans`
    }

    //using devexpress/material-ui chart
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
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Hello World. I am going to make a mock of data
        </p>

        <div className='visDiv'>

            {barGraph()}
        </div>

        <div className='ganttViz'>
          <div className='gantt-container'>
            <Gantt tasks={chartData} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
