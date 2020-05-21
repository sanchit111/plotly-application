/* global Plotly:true */

import React, { Component } from 'react';



import createPlotlyComponent from 'react-plotly.js/factory';

import "./Pages.css";

/* JSON Editor styling */


import 'react-select/dist/react-select.css';

const Plot = createPlotlyComponent(Plotly);




class Ordered_Bar extends Component {
  render() {
    return (
      <div>
      <Plot className="plot"
        data={[
          {
           type: 'bar',
           x: [20, 25, 30],
           y: ['giraffes', 'orangutans', 'monkeys'],
           orientation: 'h',
            // color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)'],
              },
          
        ]}
        layout={ {width: 750, height: 520, title: 'Ordered Bar'} }
      />
      <table id="data" class="table table-bordered">
        
        <tbody>
        <tr>
            <th> Title </th>
            <td> Ordered Bar </td>
          </tr>
          <tr>
            <th> Description</th>  
            <td> Standard bar charts display the ranks of values much more easily when sorted into order.</td>
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
            <tr> x: [20, 25, 30]
            </tr> 
             <tr> y: ['giraffes', 'orangutans', 'monkeys']
              </tr>
             </td>
          </tr>
          <tr>
            <th> Orientation   </th>
            <td> h </td>
          </tr>
          
          
        </tbody>
      </table>
      </div>
    );
  }
}

export default Ordered_Bar;