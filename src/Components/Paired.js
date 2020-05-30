/* global Plotly:true */

import React, { Component } from 'react';


import createPlotlyComponent from 'react-plotly.js/factory';
import "./Pages.css";


/* JSON Editor styling */


import 'react-select/dist/react-select.css';

const Plot = createPlotlyComponent(Plotly);




class Paired extends Component {
  render() {
    return (
      <div>
      <Plot className="plot"
        data={[
                    {
              x: ["giraffes", "orangutans", "monkeys"],
              y: [20, 14, 23],
              name: "SF Zoo",
              type: "bar"
            },
            {
              x: ["giraffes", "orangutans", "monkeys"],
              y: [12, 18, 29],
              name: "LA Zoo",
              type: "bar"
            }
        ]}
        layout={ {width: 750, height: 520, title: 'Paired column'} }
      />
            <table id="data" class="table table-bordered">
        
        <tbody>
        <tr>
            <th> Title </th>
            <td> Paired column </td>
          </tr>
          <tr>
            <th> Description</th>  
            <td> As per standard column but allows for multiple series. Can become tricky to read wwith more than 2 series. </td>
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
            <th> Representation: </th>
            <td> X axis represents animal name. </td>
          </tr>
           <tr>
            <th>  </th>
            <td> Y axis represents no. of those animals. </td>
          </tr>
          <tr>
            <th> SF Zoo </th>
            <td> 
            <tr> 
            x: ["giraffes", "orangutans", "monkeys"]                            
            </tr> 
             <tr>  y: [20, 14, 23]
              </tr>
              <tr>  Color: Blue
              </tr>
             </td>
          </tr>
          <tr>
            <th> LA Zoo </th>
            <td> 
            <tr>  x: ["giraffes", "orangutans", "monkeys"]
              </tr> 
             <tr>    y: [12, 18, 29]    
              </tr>
               <tr>    Color: Orange    
              </tr>
             </td>
          </tr>
                
          </tbody>
      </table> 
      </div>
    );
  }
}
export default Paired;