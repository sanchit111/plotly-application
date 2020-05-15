/* global Plotly:true */

import React, { Component } from 'react';


import createPlotlyComponent from 'react-plotly.js/factory';
import "./Pages.css";


/* JSON Editor styling */


import 'react-select/dist/react-select.css';

const Plot = createPlotlyComponent(Plotly);




class surplus extends Component {
  render() {
    return (
      <Plot className="plot"
        data={[
         {
              x: [1, 2, 3, 4],
              y: [0, 2, 3, 5],
              fill: "tozeroy",
              type: "scatter"
            },
            {
              x: [1, 2, 3, 4],
              y: [3, 5, 1, 7],
              fill: "tonexty",
              type: "scatter"
            }
        ]}
        layout={ {width: 750, height: 520, title: 'surplus Chart'} }
      />
    );
  }
}
export default surplus;