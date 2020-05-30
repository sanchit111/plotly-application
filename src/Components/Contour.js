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
      <div>
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
     <table id="data" class="table table-bordered">
        
        <tbody>
        <tr>
            <th> Title </th>
            <td> Contour Map </td>
          </tr>
          <tr>
            <th> Description</th>  
            <td> For showing areas of equal value on a map. Can use deviation colour schemes for showing +/- values. </td>
          </tr>
          <tr>
            <th> Type </th>
            <td> Contour </td>
          </tr>
          <tr>
            <th> Data Format </th>
            <td> Array </td>
          </tr>
          <tr>
            <th> Trace 1 </th>
            <td> 
            <tr> 
             x: [-9, -6, -5 , -3, -1]                            
            </tr> 
             <tr>  y: [0, 1, 4, 5, 7]
              </tr>
              <tr>
              z: [[10, 10.625, 12.5, 15.625, 20],
       [5.625, 6.25, 8.125, 11.25, 15.625],
       [2.5, 3.125, 5., 8.125, 12.5],
       [0.625, 1.25, 3.125, 6.25, 10.625],
       [0, 0.625, 2.5, 5.625, 10]]
       </tr>
             </td>
          </tr>
                
          </tbody>
      </table> 
      </div>
    );
  }
}

export default Contour;