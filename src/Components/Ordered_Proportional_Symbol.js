/* global Plotly:true */

import React, { Component } from 'react';


import createPlotlyComponent from 'react-plotly.js/factory';
import "./Pages.css";


/* JSON Editor styling */


import 'react-select/dist/react-select.css';

const Plot = createPlotlyComponent(Plotly);




class Ordered_Proportional_Symbol extends Component {
  render() {
    return (
      <div>
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
      <table id="data" class="table table-bordered">
        
        <tbody>
        <tr>
            <th> Title </th>
            <td> Ordered Proportional Symbol </td>
          </tr>
          <tr>
            <th> Description</th>  
            <td> Use when there are big variations between values and/or seeing fine differences between data is not so important.</td>
          </tr>
          <tr>
            <th> Type </th>
            <td> Bubble </td>
          </tr>
          <tr>
            <th> Data Format </th>
            <td> Array </td>
          </tr>
          <tr>
            <th> Data </th>
            <td> 
            <tr> x: [1, 2, 3, 4]
            </tr> 
             <tr> y: [10, 11, 12, 13]
              </tr>
             </td>
          </tr>
          <tr>
            <th> Marker size </th>
            <td> [40, 60, 80, 100] </td>
             <th> Marker opacity </th>
            <td> [1, 0.8, 0.6, 0.4] </td>
          </tr>
          
          
        </tbody>
      </table>
      </div>
    );
  }
}
export default Ordered_Proportional_Symbol;