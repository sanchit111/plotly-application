/* global Plotly:true */

import React, { Component } from 'react';



import createPlotlyComponent from 'react-plotly.js/factory';

import "./Pages.css";

/* JSON Editor styling */


import 'react-select/dist/react-select.css';

const Plot = createPlotlyComponent(Plotly);




class Contour extends Component {
  render() {
    return (
      <Plot className="plot"
        data={[
          {
  z: [[10, 10.625, 12.5, 15.625, 20],
       [5.625, 6.25, 8.125, 11.25, 15.625],
       [2.5, 3.125, 5., 8.125, 12.5],
       [0.625, 1.25, 3.125, 6.25, 10.625],
       [0, 0.625, 2.5, 5.625, 10]],
  x: [-9, -6, -5 , -3, -1],
  y: [0, 1, 4, 5, 7],
  type: 'contour'
},

          
        ]}
        layout={ {width: 750, height: 520, title: 'Contour Map'} }
      />
    );
  }
}

export default Contour;