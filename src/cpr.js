import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
function Calc()
{
    return(
        <>
<div className='row'> 
    <div className='col-12'>
        <div class="input">
            <input type="text" name="" class="insval" id="display"/>
        </div>
    </div>

        <div className='col-12'>
            <input type="button" name="" value="1" id="1" class="btninp" onclick="no('1')"/>
            <input type="button" name="" value="2" id="2" class="btninp" onclick="no('2')"/>
            <input type="button" name="" value="3" id="3" class="btninp" onclick="no('3')"/>
            <input type="button" name="" value="4" id="4" class="btninp" onclick="no('4')"/>
            <input type="button" name="" value="7" id="7" class="btninp" onclick="no('7')"/>
            <input type="button" name="" value="0" id="0" class="btninp" onclick="no('0')"/>
            <input type="button" name="" value="+" id="+" class="btninp1" onclick="action('+')"/>
        </div>
        
        <div className='col-12'>
            <input type="button" name="" value="5" id="5" class="btninp" onclick="no('5')"/>
            <input type="button" name="" value="8" id="8" class="btninp" onclick="no('8')"/>
            <input type="button" name="" value="00" id="00" class="btninp" onclick="no('00')"/>
            <input type="button" name="" value="*" id="*" class="btninp1" onclick="action('*')"/>
        </div>

        <div className='col-12'>
            
            <input type="button" name="" value="6" id="6" class="btninp" onclick="no('6')"/>
            <input type="button" name="" value="9" id="9" class="btninp" onclick="no('9')"/>
            <input type="button" name="" value="." id="." class="btninp" onclick="no('.')"/>
            <input type="button" name="" value="-" id="-" class="btninp1" onclick="action('-')"/>
        </div>

        <div className='col-12'>
            <input type="button" name="" value="AC" id="AC" class="btninp1" onclick="no('ac')"/>
            <input type="button" name="" value="CLE" id="cle" class="btninp1" onclick="erase()"/>
            <input type="button" name="" value="=" id="=" class="btninp1" onclick="ans('=')"/>
            <input type="button" name="" value="%" id="%" class="btninp1" onclick="action('%')"/>
            <input type="button" name="" value="/" id="/" class="btninp1" onclick="action('/')"/>
        </div>
        <div className='col-12'>
            <input type="button" name="" value="AC" id="AC" class="btninp1" onclick="no('ac')"/>
            <input type="button" name="" value="CLE" id="cle" class="btninp1" onclick="erase()"/>
            <input type="button" name="" value="=" id="=" class="btninp1" onclick="ans('=')"/>
            <input type="button" name="" value="%" id="%" class="btninp1" onclick="action('%')"/>
            <input type="button" name="" value="/" id="/" class="btninp1" onclick="action('/')"/>
        </div>
</div>
		

        </>
    );
}
export default Calc;