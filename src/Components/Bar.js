/* global Plotly:true */

import React, { Component } from 'react';



import createPlotlyComponent from 'react-plotly.js/factory';

import "./Pages.css";

/* JSON Editor styling */


import 'react-select/dist/react-select.css';

const Plot = createPlotlyComponent(Plotly);




class Bar extends Component {
  render() {
    return (
      <div>
      <Plot className="plot"
        data={[
          {
           type: 'bar',
           x: [10, 30, 50, 70, 90],
           y: ['A', 'B', 'C', 'D', 'E'],
           orientation: 'h',
            // color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)'],
              },
          
        ]}
        layout={ {width: 750, height: 520, title: 'Bar'} }
      />
      <table id="data" class="table table-bordered">
        
        <tbody>
        <tr>
            <th> Title </th>
            <td> Bar Graph </td>
          </tr>
          <tr>
            <th> Description</th>  
            <td> The standard way to compare the size of things. Must always start at 0 on the axis. Good when the data are not time series and labels have long category names. </td>
          </tr>
          <tr>
            <th> Type </th>
            <td> Bar </td>
          </tr>
          <tr>
            <th> Data Format </th>
            <td> Array </td>
          </tr>
          <tr>
            <th> Trace 1 </th>
            <td> 
            <tr> 
            x: [10, 30, 50, 70, 90]                             
            </tr> 
             <tr>  y: ['A', 'B', 'C', 'D', 'E']
              </tr>
             </td>
          </tr>
                
          </tbody>
      </table> 
      </div>
    );
  }
}

export default Bar;