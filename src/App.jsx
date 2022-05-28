import React from "react";
import cars from "../src/practice"

function App(){

    const [honda, tesla]= cars;
    const {speedStats:{topSpeed:hondaTopSpeed}} = honda;
    const {speedStats:{topSpeed:teslaTopSpeed}} = tesla;

    const {coloursByPopularity:[hondaTopColour]}= honda;
    const {coloursByPopularity:[teslaTopColour]} = tesla;
    
 return(
        <table>
            <tr> 
                <th>Brand</th>
                <th>Top Speed</th>
            </tr>
            <tr>
                <td>{tesla.model}</td>
                <td>{teslaTopSpeed}</td>
                <td>{teslaTopColour}</td>
            </tr>
            <tr>
                <td>{honda.model}</td>
                <td>{hondaTopSpeed}</td>
                <td>{hondaTopColour}</td>
            </tr>
        </table>
    )
}

 export default App;
// 

// const [cat, dog] = animals;

// const {name, sound} =cat;

// CHALLENGE: uncomment the code below and see the car stats rendered
// import React from "react";
// import ReactDOM from "react-dom";

// ReactDOM.render(
//   ,
//   document.getElementById("root")
// );
