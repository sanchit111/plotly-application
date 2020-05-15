import Bar from "./Components/Bar";
import Line from "./Components/Line";
import Bump from "./Components/Bump";
import Pie from "./Components/Pie";
import Violin from "./Components/Violin";
import Scatter from "./Components/Scatter";
import Dot from "./Components/Dot";
import Bubble from "./Components/Bubble";
import Horizontal from "./Components/Horizontal";
import Area from "./Components/Area";
import Paired from "./Components/Paired";
import Horizontala from "./Components/Horizontala";
import surplus from "./Components/surplus";
import slope from "./Components/slope";
import Barcode from "./Components/Barcode";
import Beeswarm from "./Components/Beeswarm";
import Candlestick from "./Components/Candlestick";
import "./App.css";

import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

document.body.style.backgroundColor = "#A9A9A9"
// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

class App extends Component {
  render() {
  return (
    <Router>
      <div>
       <h1>
         Plotly - React.js
       </h1>
       <ol>
       <li>
         <Link to="/Pie-Chart">ordered-bar</Link>
       </li>
       <li>
         <Link to="/Scatter-Plot">Scatter-Plot</Link>
       </li>
         <li>
         <Link to="/Bump-Chart">Bump-Chart</Link>
       </li>
       <li>
         <Link to="/Bubble-Chart">Bubble-Chart</Link>
       </li>
       <li>
         <Link to="/Violin-Plot">Violin-Plot</Link>
       </li>
       <li>
         <Link to="/Line-Chart">Line-Chart</Link>
       </li>
       <li>
         <Link to="/Bar-Graph">Bar-Graph</Link>
       </li>
       <li>
         <Link to="/Horizontal-Bar-Chart">Horizontal-Bar-Chart</Link>
       </li>
       <li>
         <Link to="/Area-Chart">Area-Chart</Link>
       </li>
       <li>
         <Link to="/Paired-Column">Paired-Column</Link>
       </li>
       <li>
         <Link to="/Beeswarm-Plot">Beeswarm-Plot</Link>
       </li>
        <li>
         <Link to="/Horizontala-Bar-Chart">ordered-proportional-symbol</Link>
       </li>
       <li>
         <Link to="/slope-chart">slope-chart</Link>
       </li>
        <li>
         <Link to="/surplus/deficit-line">surplus-line</Link>
       </li>
       <li>
         <Link to="/Dot-Chart">Dot-Plot</Link>
       </li>
       <li>
         <Link to="/Barcode">Barcode</Link>
       </li>
       <li>
         <Link to="/Candlestick">Candlestick</Link>
       </li>
       </ol>
       
       
            
       <Route exact path="/Bar-Graph">
          <Bar />
       </Route>
       <Route path="/Line-Chart">
          <Line />
       </Route>
        <Route path="/Bump-Chart">
          <Bump />
       </Route>
       <Route path="/Pie-Chart">
          <Pie />
       </Route>
       <Route path="/Beeswarm-Plot">
          <Beeswarm />
       </Route>
       <Route exact path="/Scatter-Plot">
          <Scatter/>
       </Route>
       <Route exact path="/Violin-Plot">
          <Violin />
       </Route>
       <Route path="/Bubble-Chart">
          <Bubble />
       </Route>
       <Route path="/Horizontal-Bar-Chart">
          <Horizontal />
       </Route>
        <Route path="/Area-Chart">
          <Area />
       </Route>
        <Route path="/Paired-Column">
          <Paired />
       </Route>
        <Route path="/Horizontala-Bar-Chart">
          <Horizontala />
       </Route>
        <Route path="/slope-Chart">
          <slope />
       </Route>
       <Route path="/surplus-line">
          <surplus />
       </Route>
        <Route path="/Dot-Chart">
          <Dot />
       </Route>
        <Route path="/Barcode">
          <Barcode />
       </Route>
        <Route path="/Candlestick">
          <Candlestick />
       </Route>
       
      </div>
    </Router>
  );
}
}

export default App;