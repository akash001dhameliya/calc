import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {useState} from 'react';

function Onkey()
{
    
    // Single Value
  const [name,setname] = useState("AAKASH");
  
  // Calc Value
  const [a,seta] = useState();
  const [b,setb] = useState();
  const [ans,setans] = useState();

  const addition = () =>
  {
    setans(parseInt(a)+parseInt(b))
  }

  const multiply = () =>
  {
    setans(parseInt(a)*parseInt(b))
  }
    
    

  return (
    <>
    <div className="App">
      {/* Single Value */}
      <h1 className='mt-4'>{name}</h1>
      <input type="button" className='bg-primary px-5 mt-3 py-2 rounded-pill' value="Click" onClick={()=>{setname("HELLO")}} />

      {/* Calc Value */}

     
    <div className='mt-5'>
    <input type="text" className='bg-primary bg-opacity-25 px-5 mt-3 me-2 py-2 rounded-3' placeholder='Enter A' onChange={(e)=>{seta(e.target.value)}} onKeyUp = {() => { setans((parseInt(a)+parseInt(b)))}} value = {a} />


    <input type="text" className='bg-primary bg-opacity-25 px-5 mt-3 py-2 rounded-3' placeholder='Enter B' onChange={(e)=>{setb(e.target.value)}}  onKeyUp = {() => { setans((parseInt(a)+parseInt(b)))}} value = {b}/>
    </div>

    {/* answer */}
    <div>
    <input type="text" className='bg-primary bg-opacity-25 px-5 text-center fs-1 fw-bolder border border-3 border-dark mt-3 me-2 py-2 rounded-5' value={ans} />
    </div>
    </div>
</>
  );
}

export default Onkey;