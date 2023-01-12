import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const decreaseCount = () => {
    setCount(count-1);
  }

  const increaseCount = () => {
    setCount(count+1);
  }

  return (
    <div className="App">
 <h1>Welcome to my counter</h1>
 <p>The count is:{count}</p>
 <button onClick={()=>decreaseCount()}> - </button>
 <button onClick={()=>increaseCount()}> + </button>

  <br></br>
  <p>
State: correct way of defining variables in React.
Allows us to have some memory inside the component that is local to that component.
<br/>
State is non-persistent: Refreshing the web page -> states are lost.

  </p>


    </div>
  );
}

export default App;
