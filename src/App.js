import logo from './logo.svg';
import React,{useEffect,useState} from 'react';
import './App.css';
import { Timerstartstop } from './components/Timerstartstop';

function App() {
  const [start,setStart] = useState(0);
  const [end,setEnd] = useState(100);
  const [isstart,setIsstart] = useState(false);
  let stopapply =(a)=>{
    setIsstart(a)
  }
  
  return (
    <div className="App">
      
      <input type="number" placeholder='please type start time' onChange={(e)=>{setStart(Number(e.target.value))}}/>
      <input type='number' placeholder='please type end time' onChange={(e)=>{setEnd(Number(e.target.value))}} />
      <button onClick={()=>setIsstart(true)}>Start</button>
      <h1 style={{display:"flex",justifyContent:"center",gap:"10px"}}> {isstart ? < Timerstartstop start={start} end={end} isstart={isstart} stopapply={stopapply}/> :null}</h1> 
    </div>
  );
}

export default App;
