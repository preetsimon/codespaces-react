import './App.css';
import Product from './Product';

function App() {
  return (
    <div className="App">
  <h1>Forever is a Long time</h1>
  <Product name='Avacado' description="fresh from Mexico" price={20.99}/>
  <Product name='Apple' description="jiucy and cripy red" price={10.99}/>
  <br></br>
  <p>
    Props: properties of components, passed from top down, readOnly
  </p>


    </div>
  );
}

export default App;
