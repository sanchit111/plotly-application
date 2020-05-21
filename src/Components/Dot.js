/* global Plotly:true */

import React, { Component } from 'react';


import createPlotlyComponent from 'react-plotly.js/factory';
import "./Pages.css";


/* JSON Editor styling */


import 'react-select/dist/react-select.css';

const Plot = createPlotlyComponent(Plotly);




class Dot extends Component {
  render() {
    return (
      <div>
      <Plot className="plot"
        data={[
          {
            x: [1,2,3,4],
            y: [1,3,7,6],
            mode: 'markers',
            type: 'scatter',
            marker: {
             color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
             size: 12 },

        }
        ]}
        layout={ {width: 750, height: 520, title: 'Dot-Plot'} }
      />
      <table id="data" class="table table-bordered">
        
        <tbody>
        <tr>
            <th> Title </th>
            <td> Ordered Bar </td>
          </tr>
          <tr>
            <th> Description</th>  
            <td> A simple way of showing the change or range (min,max) of data across multiple categories.</td>
          </tr>
          <tr>
            <th> Type </th>
            <td> Scatter </td>
          </tr>
          <tr>
            <th> Data Format </th>
            <td> Array </td>
          </tr>
          <tr>
            <th> Data </th>
            <td> 
            <tr> x: [1,2,3,4]
            </tr> 
             <tr> y: [1,3,7,6]
              </tr>
             </td>
          </tr>
          <tr>
            <th> Marker size   </th>
            <td> 12 </td>
          </tr>
          
          
        </tbody>
      </table>
      </div>
    );
  }
}
export default Dot;