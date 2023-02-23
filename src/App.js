import './App.css';
import { useState } from "react";

function App() {

  const [counter, setCount] = useState(0);

  const increaseCount = () => {
    setCount(counter+1);
  }
  const decreaseCount = () => {
    setCount(counter-1);
  }
  const setToZero = () => {
    setCount(0);
  }


  return ( 
    <div className="App"> 
    <button onClick={increaseCount}>Increase</button>
    <button onClick={decreaseCount}>Decrease</button>
    <button onClick={setToZero}>Set to Zero</button>
    {counter}
    </div>

    );
  }

export default App;
