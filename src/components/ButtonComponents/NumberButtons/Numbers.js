import React, {useState} from "react";
import { numbers } from '../../../data';
import NumberButton from "./NumberButton";
import "./Numbers.css"


//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 



//Import your array data to from the provided data file


const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  const [numberState, setNumber] = useState(numbers)

  return (
    <div className= "numbers">

        {numberState.map((button, index) => ( 
        <NumberButton  key ={index} button={button} setDisplay = {props.setDisplay}/>
      ))}

      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};

export default Numbers; 