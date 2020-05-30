import Column from "./Components/Column";
import Line from "./Components/Line";
import Bump from "./Components/Bump";
import Ordered_Bar from "./Components/Ordered_Bar";
import Filled_Area_Plot from "./Components/Filled_Area_Plot";
import Marimekko from "./Components/Marimekko";
import Dot from "./Components/Dot";
import Bubble from "./Components/Bubble";
import Diverging_Grouped_Bar from "./Components/Diverging_Grouped_Bar";
import Area from "./Components/Area";
import Paired from "./Components/Paired";
import Ordered_Proportional_Symbol from "./Components/Ordered_Proportional_Symbol";
import Slope from "./Components/Slope";
import Barcode from "./Components/Barcode";
import Candlestick from "./Components/Candlestick";
import Frequency_Polygon from "./Components/Frequency_Polygon";
import Lollipop from "./Components/Lollipop";
import Violin from "./Components/Violin";
import Connected_Scatterplot from "./Components/Connected_Scatterplot";
import Bar from "./Components/Bar";
import Paired_Bar from "./Components/Paired_Bar";
import Donut from "./Components/Donut";
import Waterfall from "./Components/Waterfall";
import Contour from "./Components/Contour";
import Heat_Map from "./Components/Heat_Map";
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
         <Link to="/Diverging_Grouped_Bar">Diverging Grouped Bar</Link>
       </li>
        <li>
         <Link to="/Filled_Area_Plot">Filled Area Plot</Link>
       </li>
       <li>
         <Link to="/Line-Chart">Column+line timeline</Link>
       </li>
       <li>
         <Link to="/Bubble-Chart">Bubble Chart</Link>
       </li>
       <li>
         <Link to="/Ordered-Bar">Ordered Bar</Link>
       </li>
        <li>
         <Link to="/Ordered_Proportional_Symbol">Ordered Proportional Symbol</Link>
       </li>
       <li>
         <Link to="/Lollipop">Lollipop</Link>
       </li>
        <li>
         <Link to="/Slope-Chart">Slope Chart</Link>
       </li>
       <li>
         <Link to="/Bump-Chart">Bump-Chart</Link>
       </li>
       <li>
         <Link to="/Dot-Strip-Plot">Dot-Strip-Plot</Link>
       </li>
        <li>
         <Link to="/Violin">Violin</Link>
       </li>
       <li>
         <Link to="/Barcode-Plot">Barcode Plot</Link>
       </li>
       <li>
         <Link to="/Frequency-Polygon">Frequency Polygon</Link>
       </li>
       <li>
         <Link to="/Column-Bar">Column</Link>
       </li>
        <li>
         <Link to="/Candlestick">Candlestick</Link>
       </li>
       <li>
         <Link to="/Connected-Scatterplot">Connected Scatterplot</Link>
       </li>
       <li>
         <Link to="/Bar-Graph">Bar</Link>
       </li>
        <li>
         <Link to="/Paired-Bar">Paired Bar</Link>
       </li>
       <li>
         <Link to="/Donut">Donut</Link>
       </li>
        <li>
         <Link to="/Waterfall">Waterfall</Link>
       </li>
       <li>
         <Link to="/Contour">Contour</Link>
       </li>
        <li>
         <Link to="/Heat-Map">Heat Map</Link>
       </li>
       <li>
         <Link to="/Marimekko">Marimekko</Link>
       </li>
       <li>
         <Link to="/Area-Plot">Area-Plot</Link>
       </li>
       <li>
         <Link to="/Paired-Column">Paired-Column</Link>
       </li>
       </ol>
       
       
            
       <Route exact path="/Column-Bar">
          <Column />
       </Route>
       <Route path="/Line-Chart">
          <Line />
       </Route>
        <Route path="/Bump-Chart">
          <Bump />
       </Route>
       <Route path="/Ordered-Bar">
          <Ordered_Bar />
       </Route>
       <Route exact path="/Filled_Area_Plot">
          <Filled_Area_Plot />
       </Route>
       <Route path="/Bubble-Chart">
          <Bubble />
       </Route>
       <Route path="/Diverging_Grouped_Bar">
          <Diverging_Grouped_Bar />
       </Route>
        <Route path="/Area-Plot">
          <Area />
       </Route>
        <Route path="/Paired-Column">
          <Paired />
       </Route>
        <Route path="/Ordered_Proportional_Symbol">
          <Ordered_Proportional_Symbol />
       </Route>
       <Route path="/Lollipop">
          <Lollipop />
       </Route>
        <Route path="/Slope-Chart">
          <Slope />
       </Route>
        <Route path="/Dot-Strip-Plot">
          <Dot />
          </Route>
       <Route path="/Violin">
          <Violin />
       </Route>
        <Route path="/Barcode-Plot">
          <Barcode />
       </Route>
        <Route path="/Frequency-Polygon">
          <Frequency_Polygon />
       </Route>
        <Route path="/Candlestick">
          <Candlestick />
       </Route>
        <Route path="/Connected-Scatterplot">
          <Connected_Scatterplot />
       </Route>
        <Route path="/Bar-Graph">
          <Bar />
       </Route>
        <Route path="/Paired-Bar">
          <Paired_Bar />
       </Route>
       <Route path="/Donut">
          <Donut />
       </Route>
       <Route path="/Waterfall">
          <Waterfall />
       </Route>
        <Route path="/Contour">
          <Contour />
       </Route>
       <Route path="/Heat-Map">
          <Heat_Map />
       </Route>
       <Route exact path="/Marimekko">
          <Marimekko />
       </Route>
      </div>
    </Router>
  );
}
}

export default App;