
import { useState } from 'react';
import './App.css';
function App() {
const [calc,setCalc] = useState("");
const [result,setResult] = useState("");
const ops=['/','*','+','-','.'];

const updateCalc = value =>{
if (
  (ops.includes(value) && calc === '') ||
  (ops.includes(value) && ops.includes(calc.slice(-1)))

){return;}// if was empty & starts with operator , or the last char was operator so no cosecutive operators

  setCalc(calc + value);
  if (!ops.includes(value)){
    setResult(()=>eval(calc+value).toString())
  }
}
const calculate = () =>{
  setCalc(eval(calc).toString())
}
const deleteLast =()=>{
  if (calc=='') { return;}
  const value=calc.slice(0,-1);
  
  setCalc(value);
  
  if (!value==''){
      if (!ops.includes(value.slice(-1))){
        setResult(()=>eval(value).toString())
      }
      else{
        setResult(()=>eval(value.slice(0,-1)).toString())
      }
    } else {
      setResult(0)
    }
}

 const createDigits =()=>{
  const digits =[];
  for(let i=9;i>0;i--){
    digits.push(
      <button  onClick={()=> updateCalc(i.toString())} key={i}>{i}</button>
    )
  }
  return digits;
 }

  return (
      <div className="App">
        <div className="calculator">
          <div className="display">
            {result ? <span>({result})</span> : ''} &nbsp; {calc || "0"}
          </div>
          <div className="operators">
            <button onClick={()=> updateCalc('*')}>x</button> 
            <button onClick={()=> updateCalc('/')}>/</button>  
            <button onClick={()=> updateCalc('+')}>+</button> 
            <button onClick={()=> updateCalc('-')}>-</button> 
            <button onClick={()=> deleteLast()}>DEL</button> 
          </div>
          <div className="digits">
            {createDigits()}
            <button onClick={()=> updateCalc('0')}>0</button>  
            <button onClick={()=> updateCalc('.')}>.</button> 
            <button onClick={()=> calculate()}>=</button> 
            
          </div>
        </div>
      </div> 
  );
}

export default App;