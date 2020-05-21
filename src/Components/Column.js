/* global Plotly:true */

import React, { Component } from 'react';


import createPlotlyComponent from 'react-plotly.js/factory';
import "./Pages.css";


/* JSON Editor styling */


import 'react-select/dist/react-select.css';

const Plot = createPlotlyComponent(Plotly);




class Column extends Component {
  render() {
    return (
      <div>
      <Plot className="plot"
        data={[
          {
            x: [1,2,3,4],
            y: [1,3,7,6],
            type: 'bar',
            marker: {
             color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
              },
            name: 'Bar'
          }
        ]}
        layout={ {width: 750, height: 520, title: 'Column Bar'} }
      />
<table id="data" class="table table-bordered">
        
        <tbody>
        <tr>
            <th> Title </th>
            <td> Column Bar </td>
          </tr>
          <tr>
            <th> Description</th>  
            <td> Columns work well for showing change over time - but usually best with only one series of data at a time.  </td>
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
            <th> Data </th>
            <td> 
            <tr> x: [1,2,3,4]
            </tr> 
             <tr> y: [1,3,7,6]
              </tr>
             </td>
          </tr>
          <tr>
            <th> Marker color  </th>
            <td> rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54) </td>
          </tr>
          
          
        </tbody>
      </table>
      </div>

    );
  }
}
export default Column;