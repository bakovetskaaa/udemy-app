// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";

import cars from "./practice";


const [tesla, honda] = cars;

// const {model,  coloursByPopularity, speedStats: {topSpeed, zeroToSixty}} = tesla;
const {speedStats:{topSpeed: teslaTopSpeed}} = tesla;
const {speedStats:{topSpeed: hondaTopSpeed}} = honda;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th> 
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{tesla.coloursByPopularity}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{honda.coloursByPopularity}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
