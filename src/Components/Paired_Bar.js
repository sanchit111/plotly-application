/* global Plotly:true */

import React, { Component } from 'react';


import createPlotlyComponent from 'react-plotly.js/factory';
import "./Pages.css";


/* JSON Editor styling */


import 'react-select/dist/react-select.css';

const Plot = createPlotlyComponent(Plotly);




class Paired_Bar extends Component {
  render() {
    return (
      <div>
      <Plot className="plot"
        data={[
          {
    type: 'bar',
    orientation: "h",
    x: [700,300,400,700],
    y: ['2016','2017','2018', '2019'],
    base: 0,
    marker: {
      color: 'blue'
  },
   name: 'expenses'
  },
  {
    type: 'bar',
    orientation: "h",
    x: [600,500,600,900],
    y: ['2016','2017','2018','2019'],
    base: 0,
    marker: {
      color: 'red'
  },
  }      
        ]}
        layout={ {width: 750, height: 520, title: 'Paired Bar'} }
      />
      <table id="data" class="table table-bordered">
        
        <tbody>
        <tr>
            <th> Title </th>
            <td> Paired Bar </td>
          </tr>
          <tr>
            <th> Description</th>  
            <td> As per standard bar but allows for multiple series. Can become tricky to read with more than 2 series. </td>
          </tr>
          <tr>
            <th> Type </th>
            <td> Bar </td>
          </tr>
           <tr>
            <th> Orientation: </th>
            <td> h </td>
          </tr>
          <tr>
            <th> Data Format </th>
            <td> Array </td>
          </tr>
          <tr>
            <th> Trace 1 </th>
            <td> 
            <tr> 
            x: [700,300,400,700]                             
            </tr> 
             <tr>  y: ['2016','2017','2018', '2019']
              </tr>
             </td>
          </tr>
           <th> Marker Color </th>
            <td> Blue </td>
          <tr>
            <th> Trace 2 </th>
            <td> 
            <tr>  x: [600,500,600,900]                     
              </tr> 
             <tr>    ['2016','2017','2018','2019']  
              </tr>
             </td>
          </tr>
           <tr>
            <th> Marker Color </th>
            <td> Red </td>
          </tr>
                
          </tbody>
      </table> 
      </div>
    );
  }
}
export default Paired_Bar;