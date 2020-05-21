/* global Plotly:true */

import React, { Component } from 'react';



import createPlotlyComponent from 'react-plotly.js/factory';

import "./Pages.css";

/* JSON Editor styling */


import 'react-select/dist/react-select.css';

const Plot = createPlotlyComponent(Plotly);




class Heat_Map extends Component {
  render() {
    return (
      <Plot className="plot"
        data={[
          {
    z: [[1, 20, 30], [20, 1, 60], [30, 60, 1]],
    type: 'heatmap'
  },
        ]}
        layout={ {width: 750, height: 520, title: 'Heat Map'} }
      />
    );
  }
}

export default Heat_Map;