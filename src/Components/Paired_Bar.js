/* global Plotly:true */

import React, { Component } from 'react';


import createPlotlyComponent from 'react-plotly.js/factory';
import "./Pages.css";


/* JSON Editor styling */


import 'react-select/dist/react-select.css';

const Plot = createPlotlyComponent(Plotly);




class Paired_Bar extends Component {
  render() {
    return (
      <Plot className="plot"
        data={[
          {
    type: 'bar',
    orientation: "h",
    x: [700,300,400,700],
    y: ['2016','2017','2018', '2019'],
    base: 0,
    marker: {
      color: 'blue'
  },
   name: 'expenses'
  },
  {
    type: 'bar',
    orientation: "h",
    x: [600,500,600,900],
    y: ['2016','2017','2018','2019'],
    base: 0,
    marker: {
      color: 'red'
  },
  }      
        ]}
        layout={ {width: 750, height: 520, title: 'Paired Bar'} }
      />
    );
  }
}
export default Paired_Bar;