import React,{useState} from 'react';
import Meow from './api/Meow';
import './App.css';

function App() {
  const [count,setCount] = useState(1);
  
  const handleOnClick = () => {
    setCount(count+1);
  }
  return (
    <div className="App">
      <div className="body">
        
        <h1>MEOW MEOW FACTS</h1>
        <h3>CAT FACT NO. {count}</h3>
        <div className="main">
          <div className='text'><Meow count={count} /></div>
          <button
          className='next'
          onClick={handleOnClick}
          
          
          >Next Fact</button>
          
          
        </div>

      </div>
    </div>
  );
}

export default App;
