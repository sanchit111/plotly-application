/* global Plotly:true */

import React, { Component } from 'react';



import createPlotlyComponent from 'react-plotly.js/factory';

import "./Pages.css";

/* JSON Editor styling */


import 'react-select/dist/react-select.css';

const Plot = createPlotlyComponent(Plotly);




class Donut extends Component {
  render() {
    return (
      <div>
      <Plot className="plot"
        data={[
          {
  values: [16, 15, 12, 6, 5, 4, 42],
  labels: ['US', 'China', 'European Union', 'Russian Federation', 'Brazil', 'India', 'Rest of World' ],
  domain: {column: 0},
  name: 'GHG Emissions',
  hoverinfo: 'label+percent+name',
  hole: .4,
  type: 'pie'
},{
  values: [27, 11, 25, 8, 1, 3, 25],
  labels: ['US', 'China', 'European Union', 'Russian Federation', 'Brazil', 'India', 'Rest of World' ],
  text: 'CO2',
  textposition: 'inside',
  domain: {column: 1},
  name: 'CO2 Emissions',
  hoverinfo: 'label+percent+name',
  hole: .4,
  type: 'pie'
},

    ]}
        layout={ {width: 750, height: 520, title: 'Donut'} }
      />
      <table id="data" class="table table-bordered">
        
        <tbody>
        <tr>
            <th> Title </th>
            <td> Donut Plot </td>
          </tr>
          <tr>
            <th> Description</th>  
            <td> Similar to a pie chart but the centre can be a good way of making space to include more information about the data (eg total). </td>
          </tr>
          <tr>
            <th> Type </th>
            <td> Pie </td>
          </tr>
          <tr>
            <th> Data Format </th>
            <td> Array </td>
          </tr>
          <tr>
            <th> Trace 1 </th>
            <td> 
            <tr> 
            x: [1, 2, 3, 4]                             
            </tr> 
             <tr>  y: [0, 2, 3, 5]
              </tr>
             </td>
          </tr>
          <tr>
            <th> Trace 2 </th>
            <td> 
            <tr>  x: [1, 2, 3, 4]                      
              </tr> 
             <tr>    y: [3, 5, 4, 7]    
              </tr>
             </td>
          </tr>
          <tr>
            <th> Trace 3 </th>
            <td> 
            <tr> x: [1, 2, 3, 4]                           
              </tr> 
             <tr> y: [4.5, 6, 5.5, 8]      
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

export default Donut;