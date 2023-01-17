import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {useState} from 'react';
import Onkey from './Onkeyup';

function Simplecalc() {

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

  const substract = () =>
  {
    setans(parseInt(a)-parseInt(b))
  }

  const multiply = () =>
  {
    setans(parseInt(a)*parseInt(b))
  }

  const division = () =>
  {
    setans(parseInt(a)/parseInt(b))
  }

  return (
    <div className="App">
      {/* Single Value */}
      {/* <h1 className='mt-4'>{name}</h1>
      <input type="button" className='bg-primary px-5 mt-3 py-2 rounded-pill' value="Click" onClick={()=>{setname("HELLO")}} /> */}

      {/* Calc Value */}

     
    <div className='mt-5'>
    <input type="text" className='bg-primary bg-opacity-25 px-5 mt-3 me-2 py-2 rounded-3' placeholder='Enter A' onChange={(e)=>{seta(e.target.value)}}/>


    <input type="text" className='bg-primary bg-opacity-25 px-5 mt-3 py-2 rounded-3' placeholder='Enter B' onChange={(e)=>{setb(e.target.value)}} />
    </div>

    {/* answer */}
    <div>
    <input type="text" className='bg-primary bg-opacity-25 px-5 text-center fs-1 fw-bolder border border-3 border-dark mt-3 me-2 py-2 rounded-5' value={ans} />
    </div>

    <div>
    <input type="button" className='bg-success bg-opacity-25 px-5 mt-3 me-2 fw-bolder py-2 rounded-pill' value="addition" onClick={addition} />

    <input type="button" className='bg-success bg-opacity-25 px-5 mt-3 fw-bolder py-2 rounded-pill' value="Substract" onClick={substract} />
    </div>


    <div>
    <input type="button" className='bg-success bg-opacity-25 px-5 mt-3 me-2 fw-bolder py-2 rounded-pill' value="Multiply" onClick={multiply} />

    <input type="button" className='bg-success bg-opacity-25 px-5 mt-3 fw-bolder py-2 rounded-pill' value="Division" onClick={division} />
    </div>

    {/* <Onkey/> */}
    </div>
  );
}

export default Simplecalc;
