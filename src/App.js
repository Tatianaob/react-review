import './App.css';
import { useState } from "react";

function App() {

  const [age,setAge] = useState(0);

  const [inputValue, setInputValue] = useState("");

  const [showText, setShowText] = useState(true);

  const [textColor, setTextColor] = useState("black");


  const increaseAge = () => {
    setAge(age+1);
  }

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setInputValue(event.target.value); // value of the input that the user is writing
  };


  return ( 
    <div className="App"> 
    {age} <button onClick={increaseAge}>Increase Age</button>

    <input type="text" onChange={handleInputChange}/>
    {inputValue}
    <button 
    onClick={()=> {setShowText(!showText);}}>Show or Hide
    </button> 
    {showText && <h3 style={{color: "red"}}>hi this is me</h3>}
    <button 
    onClick={()=> {
      setTextColor(textColor=== "black" ? "yellow": "black");
      }}>change the color</button>
    <h4 style={{color: textColor}}> changing my color</h4>
    </div>

    );
  }

export default App;
