/* global Plotly:true */

import React, { Component } from 'react';


import createPlotlyComponent from 'react-plotly.js/factory';
import "./Pages.css";


/* JSON Editor styling */


import 'react-select/dist/react-select.css';

const Plot = createPlotlyComponent(Plotly);




class Horizontal extends Component {
  render() {
    return (
      <Plot className="plot"
        data={[
            {
           type: 'bar',
           orientation: "h",
    x: [500,600,700],
    y: ['2016','2017','2018'],
    base: [-500,-600,-700],
    hovertemplate: '%{base}',
    marker: {
      color: 'red'
    },
    name: 'expenses'
  },
  {
           type: 'bar',
           orientation: "h",
    x: [500,600,700],
    y: ['2016','2017','2018'],
    base: [-500,-600,-700],
    hovertemplate: '%{base}',
    marker: {
      color: 'blue'
    },
    name: 'expenses'
  },
  {
    type: 'bar',
    orientation: "h",
    x: [300,400,700],
    y: ['2016','2017','2018'],
    base: 0,
    marker: {
      color: 'blue'
  },
  }    
        ]}
        layout={ {width: 750, height: 520, title: 'Diverging Bar'} }
      />
    );
  }
}
export default Horizontal;