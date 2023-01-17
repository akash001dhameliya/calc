import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';

function Calc()
{
    const [a,seta]  = useState(0);
    const [op1,setop1] = useState();
    const [display,setdisplay] = useState('');

    function clr()
    {
        setdisplay('');
        seta(0);
    }

    function fun(n)
    {
        seta(display);
        setop1(n);
        setdisplay('');
    }
    function answer()
    {
        if(op1=='+')
        {
            setdisplay(parseInt(a)+parseInt(display))
        }
        else if(op1=='-')
        {
            setdisplay(parseInt(a)-parseInt(display))
        }
        else if(op1=='*')
        {
            setdisplay(parseInt(a)*parseInt(display))
        }
        else if(op1=='/')
        {
            setdisplay(parseInt(a)/parseInt(display))
        }
        else if(op1=='%')
        {
            setdisplay(parseInt(a)%parseInt(display))
        }
    }

    return(
        <>
<div className='row p-5 border border-dark  mt-5 main rounded-5 m-auto h-50'> 
        <div className='col-12 d-flex justify-content-center'>
            <div class="input">
                <input type="text" name="" class="insval" id="display" value={display}/>
            </div>
        </div>
        <div className='col-12 d-flex justify-content-center mainbtn'>
            <input type="button" name="" value="AC" id="AC" class="btns btninp1" onClick= {clr}/>
            <input type="button" name="" value="CLE" id="cle" class="btns btninp1" onClick= {clr}/>
            <input type="button" name="" value="=" id="=" class="btns btninp1" onClick= {answer}/>
            <input type="button" name="" value="%" id="%" class="btns btninp1" onClick={(val) => fun(val.target.value) }/>
        </div>

        <div className='col-12 d-flex justify-content-center'>
            <input type="button" name="" value="1" id="1" class="btns btninp" onClick={(val) => {setdisplay(display + val.target.value) }}/>
            <input type="button" name="" value="2" id="2" class="btns btninp" onClick={(val) => {setdisplay(display + val.target.value) }}/>
            <input type="button" name="" value="3" id="3" class="btns btninp" onClick={(val) => {setdisplay(display + val.target.value) }}/>
            <input type="button" name="" value="+" id="+" class="btns btninp1" onClick={(val) => fun(val.target.value) }/>
        </div>
        
        <div className='col-12 d-flex justify-content-center'>
            <input type="button" name="" value="4" id="4" class="btns btninp" onClick={(val) => {setdisplay(display + val.target.value) }}/>
            <input type="button" name="" value="5" id="5" class="btns btninp" onClick={(val) => {setdisplay(display + val.target.value) }}/>
            <input type="button" name="" value="6" id="6" class="btns btninp" onClick={(val) => {setdisplay(display + val.target.value) }}/>
            <input type="button" name="" value="*" id="*" class="btns btninp1" onClick={(val) => fun(val.target.value) }/>
        </div>

        <div className='col-12 d-flex justify-content-center'>
            <input type="button" name="" value="7" id="7" class="btns btninp" onClick={(val) => {setdisplay(display + val.target.value) }}/>
            <input type="button" name="" value="8" id="8" class="btns btninp" onClick={(val) => {setdisplay(display + val.target.value) }}/>
            <input type="button" name="" value="9" id="9" class="btns btninp" onClick={(val) => {setdisplay(display + val.target.value) }}/>
            <input type="button" name="" value="-" id="-" class="btns btninp1" onClick={(val) => fun(val.target.value) }/>
        </div>

        <div className='col-12 d-flex justify-content-center'>
            <input type="button" name="" value="0" id="0" class="btns btninp" onClick={(val) => {setdisplay(display + val.target.value) }}/>
            <input type="button" name="" value="00" id="00" class="btns btninp" onClick={(val) => {setdisplay(display + val.target.value) }}/>
            <input type="button" name="" value="." id="." class="btns btninp" onClick={(val) => {setdisplay(display + val.target.value) }}/>
            <input type="button" name="" value="/" id="/" class="btns btninp1" onClick={(val) => fun(val.target.value) }/>
        </div>
</div>
        </>
    );
}
export default Calc;