/* global Plotly:true */

import React, { Component } from 'react';



import createPlotlyComponent from 'react-plotly.js/factory';

import "./Pages.css";

/* JSON Editor styling */


import 'react-select/dist/react-select.css';

const Plot = createPlotlyComponent(Plotly);




class Waterfall extends Component {
  render() {
    return (
      <Plot className="plot"
        data={[
          {
            name: "2018",
            type: "waterfall",
            orientation: "v",
            measure: [
                "relative",
                "relative",
                "total",
                "relative",
                "relative",
                "total"
            ],
            x: [
                "Sales",
                "Consulting",
                "Net revenue",
                "Purchases",
                "Other expenses",
                "Profit before tax"
            ],
            textposition: "outside",
            text: [
                "+60",
                "+80",
                "",
                "-40",
                "-20",
                "Total"
            ],          
            y: [
                60,
                80,
                0,
                -40,
                -20,
                0
            ],
            connector: {
              line: {
                color: "rgb(63, 63, 63)"
              }
            },
        }
          
        ]}
        layout={ {width: 750, height: 520, title: 'Waterfall Plot'} }
      />
    );
  }
}

export default Waterfall;