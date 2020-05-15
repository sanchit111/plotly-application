/* global Plotly:true */

import React, { Component } from 'react';



import createPlotlyComponent from 'react-plotly.js/factory';

import "./Pages.css";

/* JSON Editor styling */


import 'react-select/dist/react-select.css';

const Plot = createPlotlyComponent(Plotly);




class Pie extends Component {
  render() {
    return (
      <Plot className="plot"
        data={[
          {
           type: 'bar',
           x: [20, 25, 30],
           y: ['giraffes', 'orangutans', 'monkeys'],
           orientation: 'h',
            // color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)'],
              },
          
        ]}
        layout={ {width: 750, height: 520, title: 'ordered bar'} }
      />
    );
  }
}

export default Pie;