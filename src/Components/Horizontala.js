/* global Plotly:true */

import React, { Component } from 'react';


import createPlotlyComponent from 'react-plotly.js/factory';
import "./Pages.css";


/* JSON Editor styling */


import 'react-select/dist/react-select.css';

const Plot = createPlotlyComponent(Plotly);




class Horizontala extends Component {
  render() {
    return (
      <Plot className="plot"
        data={[
            {
              x: [1, 2, 3, 4],
              y: [10, 11, 12, 13],
              text: ["A size: 40", "B size: 60", "C size: 80", "Dsize: 100"],
              mode: "markers",
              marker: {
                color: [
                  "rgb(93, 164, 214)",
                  "rgb(255, 144, 14)",
                  "rgb(44, 160, 101)",
                  "rgb(255, 65, 54)"
                ],
                opacity: [1, 0.8, 0.6, 0.4],
                size: [40, 60, 80, 100]
              }
            }
        ]}
        layout={ {width: 750, height: 520, title: 'Ordered proportional symbol'} }
      />
    );
  }
}
export default Horizontala;