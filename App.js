//Project by Nevin Bullywon
import React, {useState} from "react"

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops =['/', '*', '+', '-', '.'];//creating my operators

  const updateCalc = value =>{
    if(
      ops.includes(value) && calc === '' ||
      ops.includes(value) && ops.includes(calc.slice(-1)
      )
    ) {
      return;
    }
    setCalc(calc + value);
    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  }
  const createdigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {//creating a function for my number buttons from 1-9 to reduce less code clutter
      digits.push(
        <button onClick={()=> updateCalc(i.toString())} key={i}>{i}</button>
      )
    }
    return digits;
  }

  const calculate = () =>{
    setCalc(eval(calc).toString());
  }

  const deleteLast = () =>{
    if (calc == ''){
      return;
    }
    const value =calc.slice(0, -1);//pressing DEL will remove 1 number in front

    setCalc(value);
  }

  const clear = () =>{
    const value =calc.slice(0, -value);//pressing clear will delete everything on the screen
    setCalc(value);
  }

  return (
    
    <div className="App">
      <div className="calculator">
        <div className="display">
          { result ? <span>({result})</span>: ''}&nbsp; 
          {calc || "0"}
        </div>
        <div className="operators">
          <button onClick={()=> updateCalc('+')}>+</button> 
          <button onClick={()=> updateCalc('-')}>-</button>
          <button onClick={()=> updateCalc('*')}>x</button>
          <button onClick={()=> updateCalc('/')}>÷</button>


          <button onClick={deleteLast}>DEL</button>
          <button onClick={clear}>CA</button>
        </div>
        <div className="digits">
          { createdigits ()}
          <button onClick={()=> updateCalc('0')}>0</button>
          <button onClick={()=> updateCalc('.')}>.</button>

          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
