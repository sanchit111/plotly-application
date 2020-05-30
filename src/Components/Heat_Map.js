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
      <div>
      <Plot className="plot"
        data={[
          {
    z: [[1, 20, 30], [20, 1, 60], [30, 60, 1]],
    type: 'heatmap'
  },
        ]}
        layout={ {width: 750, height: 520, title: 'Heat Map'} }
      />
      <table id="data" class="table table-bordered">
        
        <tbody>
        <tr>
            <th> Title </th>
            <td> Heat-Map </td>
          </tr>
          <tr>
            <th> Description</th>  
            <td> A good way of showing the patterns between 2 categories of data, less effective at showing fine differences in amounts. </td>
          </tr>
          <tr>
            <th> Type </th>
            <td> Heatmap </td>
          </tr>
          <tr>
            <th> Data Format </th>
            <td> Array </td>
          </tr>
          <tr>
            <th> Trace 1 </th>
            <td> 
            <tr> 
            [[1, 20, 30], [20, 1, 60], [30, 60, 1]]                             
            </tr> 
             </td>
          </tr>
          <tr>
            <th> Fill </th>
            <td> tonexty and tozeroy </td>
          </tr>
                
          </tbody>
      </table> 
      </div>
    );
  }
}

export default Heat_Map;