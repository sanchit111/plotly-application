/* global Plotly:true */

import React, { Component } from 'react';


import createPlotlyComponent from 'react-plotly.js/factory';
import "./Pages.css";


/* JSON Editor styling */


import 'react-select/dist/react-select.css';

const Plot = createPlotlyComponent(Plotly);




class Filled_Area_Plot extends Component {
  render() {
    return (
      <div>
      <Plot className="plot"
        data={[
       {
             x: [1, 2, 3, 4],
             y: [0, 2, 3, 5],
             fill: 'tozeroy',
             type: 'scatter'
       },

       {
          x: [1, 2, 3, 4],
          y: [3, 5, 1, 7],
          fill: 'tonexty',
          type: 'scatter'
       },
        ]}
        layout={ {width: 750, height: 520, title: 'Filled_Area_Plot'} }
      />
            <table id="data" class="table table-bordered">
        
        <tbody>
        <tr>
            <th> Title </th>
            <td> Filled Area Plot </td>
          </tr>
          <tr>
            <th> Description</th>  
            <td> The shaded area of these charts allows a balance to be shown either against a baseline or between two series.</td>
          </tr>
          <tr>
            <th> Type </th>
            <td> Area </td>
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
             <tr>    y: [3, 5, 1, 7]
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
export default Filled_Area_Plot;