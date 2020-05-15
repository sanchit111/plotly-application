/* global Plotly:true */

import React, { Component } from 'react';


import createPlotlyComponent from 'react-plotly.js/factory';
import "./Pages.css";


/* JSON Editor styling */


import 'react-select/dist/react-select.css';

const Plot = createPlotlyComponent(Plotly);




class Paired extends Component {
  render() {
    return (
      <Plot className="plot"
        data={[
                    {
              x: ["giraffes", "orangutans", "monkeys"],
              y: [20, 14, 23],
              name: "SF Zoo",
              type: "bar"
            },
            {
              x: ["giraffes", "orangutans", "monkeys"],
              y: [12, 18, 29],
              name: "LA Zoo",
              type: "bar"
            }
        ]}
        layout={ {width: 750, height: 520, title: 'Paired column'} }
      />
    );
  }
}
export default Paired;