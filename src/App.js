import React, {useState } from 'react';
import './App.css';

function App() {
  const [data,setdata]=useState("")
  
  function show(e){
    setdata(data + e.target.value)
  }
  function del(e){
    setdata(data.slice(0,-1))

  }
  function delet(e){
    setdata("")

  }
  function perform(e){
    setdata(eval(data))
  }
  
  return (
    <div className="Container">
      <div className='calculator'>

      <form action=''>
        <div className='display'>
      
      <input type='text' placeholder='0' value={data} />
      </div>
      <div>
        <input type='button' value="AC" onClick={delet}/>
        <input type='button' value="DEL" onClick={del}/>
        <input type='button' value="%" onClick={show}/>
        <input type='button' value="/"  onClick={show}/>
      </div>
      <div>
        <input type='button' value="7" onClick={show}/>
        <input type='button' value="8"  onClick={show}/>
        <input type='button' value="9"  onClick={show}/>
        <input type='button' value="*"  onClick={show}/>
      </div>
      <div>
        <input type='button' value="4"  onClick={show}/>
        <input type='button' value="5"  onClick={show}/>
        <input type='button' value="6"  onClick={show}/>
        <input type='button' value="+"  onClick={show}/>
      </div>
      <div>
        <input type='button' value="1"  onClick={show}/>
        <input type='button' value="2"  onClick={show}/>
        <input type='button' value="3"  onClick={show}/>
        <input type='button' value="-"  onClick={show}/>
      </div>
      <div>
        <input type='button' value="0"  onClick={show}/>
        <input type='button' value="."  onClick={show}/>
        
        <input type='button' value="=" className='equal' onClick={perform}/>
      </div>
      </form>
      
    </div>
    </div>
  );
}

export default App;
