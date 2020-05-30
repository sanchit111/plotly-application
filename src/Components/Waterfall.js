/* global Plotly:true */

import React, { Component } from 'react';



import createPlotlyComponent from 'react-plotly.js/factory';

import "./Pages.css";

/* JSON Editor styling */


import 'react-select/dist/react-select.css';

const Plot = createPlotlyComponent(Plotly);




class Waterfall extends Component {
  render() {
    return (
      <div>
      <Plot className="plot"
        data={[
          {
            name: "2018",
            type: "waterfall",
            orientation: "v",
            measure: [
                "relative",
                "relative",
                "total",
                "relative",
                "relative",
                "total"
            ],
            x: [
                "Sales",
                "Consulting",
                "Net revenue",
                "Purchases",
                "Other expenses",
                "Profit before tax"
            ],
            textposition: "outside",
            text: [
                "+60",
                "+80",
                "",
                "-40",
                "-20",
                "Total"
            ],          
            y: [
                60,
                80,
                0,
                -40,
                -20,
                0
            ],
            connector: {
              line: {
                color: "rgb(63, 63, 63)"
              }
            },
        }
          
        ]}
        layout={ {width: 750, height: 520, title: 'Waterfall Plot'} }
      />
      <table id="data" class="table table-bordered">
        
        <tbody>
        <tr>
            <th> Title </th>
            <td> Waterfall Plot </td>
          </tr>
          <tr>
            <th> Description</th>  
            <td> Designed to show the sequencing of data through a flow process, typically budgets. Can include +/- components.</td>
          </tr>
          <tr>
            <th> Type </th>
            <td> Waterfall </td>
          </tr>
          <tr>
            <th> Data Format </th>
            <td> Array </td>
          </tr>
          <tr>
            <th> Trace 1 </th>
            <td> 
            <tr> 
            x: [
                "Sales",
                "Consulting",
                "Net revenue",
                "Purchases",
                "Other expenses",
                "Profit before tax"
            ]                             
            </tr> 
             <tr>  y: [
                60,
                80,
                0,
                -40,
                -20,
                0
            ]
              </tr>
             </td>
          </tr>
                
          </tbody>
      </table> 
      </div>
    );
  }
}

export default Waterfall;