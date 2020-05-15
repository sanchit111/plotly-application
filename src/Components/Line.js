/* global Plotly:true */

import React, { Component } from 'react';



import createPlotlyComponent from 'react-plotly.js/factory';
import "./Pages.css";


/* JSON Editor styling */


import 'react-select/dist/react-select.css';

const Plot = createPlotlyComponent(Plotly);




class Line extends Component {
  render() {
    return (
      <Plot className="plot" 
        data={[
          {
              x: [1, 2, 3],
              y: [2, 6, 3],
              type: "scatter",
              mode: "lines+points",
              marker: { color: "red" }
            },
            { type: "bar", x: [1, 2, 3], y: [2, 5, 3] }
          ]}
          layout={{ width: 320, height: 240, title: "Column+line timeline" }}
        />
    );
  }
}

export default Line;