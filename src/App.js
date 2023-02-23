
import './App.css';
import {User} from './User'


function App() {
  const users = [
    {name: 'Tatiana', age: 30},
    {name: 'Bradley', age: 31},
    {name: 'Diego', age: 1},
  ];

  return ( 
    <div className="App"> 
      {users.map((user, key) => {
        return (
        <User name={user.name} age={user.age}/>
        );
      })}
    </div>
  );
  }


export default App;
