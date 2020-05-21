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
      <div>
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
          layout={{ width: 750, height: 520, title: "Column+line timeline" }}
        />
       <table id="data" class="table table-bordered">
        
        <tbody>
        <tr>
            <th> Title </th>
            <td> Column+line timeline </td>
          </tr>
          <tr>
            <th> Description</th>  
            <td> A good way of showing the relationship between an amount (columns) and a rate(line). </td>
          </tr>
          <tr>
            <th> Type </th>
            <td> Bar + Line </td>
          </tr>
          <tr>
            <th> Data Format </th>
            <td> Array </td>
          </tr>
          <tr>
            <th> Line data </th>
            <td> 
            <tr> x: [1, 2, 3]
            </tr> 
             <tr> y: [2, 6, 3] 
              </tr>
             </td>
          </tr>
           <tr>
            <th> Bar data </th>
            <td> 
            <tr> x: [1, 2, 3]
            </tr> 
             <tr> y: [2, 5, 3] 
              </tr>
             </td>
          </tr>
          <tr>
            <th> Marker color </th>
            <td> Red </td>
          </tr>
          
          
        </tbody>
      </table>
      </div>
    );
  }
}

export default Line;