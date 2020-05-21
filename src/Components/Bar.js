/* global Plotly:true */

import React, { Component } from 'react';



import createPlotlyComponent from 'react-plotly.js/factory';

import "./Pages.css";

/* JSON Editor styling */


import 'react-select/dist/react-select.css';

const Plot = createPlotlyComponent(Plotly);




class Bar extends Component {
  render() {
    return (
      <Plot className="plot"
        data={[
          {
           type: 'bar',
           x: [10, 30, 50, 70, 90],
           y: ['A', 'B', 'C', 'D', 'E'],
           orientation: 'h',
            // color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)'],
              },
          
        ]}
        layout={ {width: 750, height: 520, title: 'Bar'} }
      />
    );
  }
}

export default Bar;