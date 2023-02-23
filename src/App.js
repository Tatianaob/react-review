
import './App.css';


function App() {
  const age = 28;
  const isGreen = true;
  // const isGreen = false;

  return <div className="App">
    {age >= 18 ? <h1>over age</h1> : <h1>under age</h1>}
    <h1 style={{color: isGreen ? "green": "red"}}>this has color </h1>

    {isGreen && <button>this is a button</button>}
  </div>
  }


export default App;
