/* global Plotly:true */

import React, { Component } from 'react';


import createPlotlyComponent from 'react-plotly.js/factory';
import "./Pages.css";


/* JSON Editor styling */


import 'react-select/dist/react-select.css';

const Plot = createPlotlyComponent(Plotly);




class Diverging_Grouped_Bar extends Component {
  render() {
    return (
      <div>
      <Plot className="plot"
        data={[
            {
           type: 'bar',
           orientation: "h",
    x: [500,600,700],
    y: ['2016','2017','2018'],
    base: [-500,-600,-700],
    hovertemplate: '%{base}',
    marker: {
      color: 'red'
    },
    name: 'expenses'
  },
  {
           type: 'bar',
           orientation: "h",
    x: [300,800,500],
    y: ['2016','2017','2018'],
    base: [-300,-800,-500],
    hovertemplate: '%{base}',
    marker: {
      color: 'blue'
    },
    name: 'expenses'
  },
  {
    type: 'bar',
    orientation: "h",
    x: [300,400,700],
    y: ['2016','2017','2018'],
    base: 0,
    marker: {
      color: 'blue'
  },
  }  ,
  {
    type: 'bar',
    orientation: "h",
    x: [100,300,900],
    y: ['2016','2017','2018'],
    base: 0,
    marker: {
      color: 'red'
  },
  }      
        ]}
        layout={ {width: 750, height: 520, title: 'Diverging Grouped Bar'} }
      />
      <table id="data" class="table table-bordered">
        
        <tbody>
        <tr>
            <th> Title </th>
            <td> Diverging Grouped Bar </td>
          </tr>
          <tr>
            <th> Description</th>  
            <td> Perfect for representing survey results which involve sentiment (eg. disagree,neutral,agree) </td>
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
            x: [500,600,700]                             
            </tr> 
             <tr>  y: ['2016','2017','2018']
              </tr>
             </td>
          </tr>
          <tr>
            <th> Trace 2 </th>
            <td> 
            <tr>  x: [300,800,500]                     
              </tr> 
             <tr>    y: ['2016','2017','2018']  
              </tr>
             </td>
          </tr>
          <tr>
            <th> Trace 3 </th>
            <td> 
            <tr> x: [300,400,700]                          
              </tr> 
             <tr> y: ['2016','2017','2018']     
              </tr>
             </td>
          </tr>
          <tr>
            <th> Trace 4 </th>
            <td> 
            <tr> x: [100,300,900]                          
              </tr> 
             <tr> y: ['2016','2017','2018'],     
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
export default Diverging_Grouped_Bar;