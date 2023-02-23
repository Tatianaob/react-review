
import './App.css';

function App() {
  return <div className="App">
    <User name="Tatiana" age={30} email="tati@tati.com"/>
    <User name="Erika" age={39} email="erika@gmail.com"/>
    <User name="Paola" age={26} email="paola@gmail.com"/>
    <Job salary={9000} position="Senior SDE"company="Amazon"/>
		<Job salary={12000} position="Junior SDE"company="Google"/>
		<Job salary={10000} position="Project Manager"company="Netflix"/>
  </div>;
}



const User = (props) => {
  return ( <div>
    <h1>{props.name}</h1>
    <h1>{props.age}</h1>
    <h1>{props.email}</h1>
  </div>
  )
};

const Job = (props) => {
  return ( <div>
    <h2>{props.salary}</h2>
    <h2>{props.position}</h2>
    <h2>{props.company}</h2>

  </div>)
}
export default App;
