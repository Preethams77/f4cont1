import React ,{useState} from 'react'
import "./App.css";
const App = () => {
  const[Input,setInput]=useState("");
  const handler1=e=>{
    setInput(e.target.value);
  }
  const handler2=e=>{
    setInput(e.target.value);
  }
  return (
    <div className="body">React Calculator
    <input className="input" type="text" placeholder="Num 1" name="input" onChange={handler1}/>
    <input className="input2" type="text" placeholder="Num 2"value={Input} name="input" onChange={handler2}/>
    <button className='one' onClick={()=> setInput(Input + '+')}>+</button>
    <button className='two'onClick={()=> setInput(Input + '-')}>-</button>
    <button className='three'onClick={()=> setInput(Input + '*')}>*</button>
    <button className='four'onClick={()=> setInput(Input + '/')}>/</button>

    </div>
    
  )
}

export default App