import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {useState} from 'react';
import Onkey from './Onkeyup';
import Simplecalc from './Simplecalc';
import Calc from './Clac';

function App() {

  return (
    <div className="App">
     {/* <Simplecalc/> */}
     {/* <Onkey/> */}
     <Calc/>
    </div>
  );
}

export default App;
