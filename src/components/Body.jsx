import './body.css';
import { useState } from 'react';
const Body=()=>{
    
    const [InputValue,setInputValue]=useState('');

    const EventHandler=(value)=>{
        setInputValue((previousvalue)=>previousvalue + value);
    };

    const ClearEvent=()=>{
        setInputValue('');
    }

    const ClearOneEvent=()=>{
        setInputValue((previousvalue)=> previousvalue.slice(0 ,-1));
    }

    const EqualEventHandler=()=>{
        try {
           const result=eval(InputValue); 
           setInputValue(result);
        } catch (error) {
            setInputValue('error');
        }
    }
    return(
        <div className="calculator_container">
            <div className='cal_input'>
                <input value={InputValue} placeholder='Enter the value'></input>
            </div>
            <div className="cal_row">
                <button onClick={ClearEvent}>AC</button>
                <button onClick={()=>EventHandler('%')}>%</button>
                <button onClick={()=>ClearOneEvent()}>C</button>
                <button onClick={()=>{EventHandler('/')}}>/</button>
            </div>
            <div className="cal_row">
                <button onClick={()=>{EventHandler('1')}}>1</button>
                <button onClick={()=>{EventHandler('2')}}>2</button>
                <button onClick={()=>{EventHandler('3')}}>3</button>
                <button onClick={()=>{EventHandler('*')}}>*</button>
            </div>
            <div className="cal_row">
                <button onClick={()=>{EventHandler('4')}}>4</button>
                <button onClick={()=>{EventHandler('5')}}>5</button>
                <button onClick={()=>{EventHandler('6')}}>6</button>
                <button onClick={()=>{EventHandler('+')}}>+</button>
            </div>
            <div className="cal_row">
                <button onClick={()=>{EventHandler('7')}}>7</button>
                <button onClick={()=>{EventHandler('8')}}>8</button>
                <button onClick={()=>{EventHandler('9')}}>9</button>
                <button onClick={()=>{EventHandler('-')}}>-</button>
            </div>
            <div className="cal_row">
                <button onClick={()=>{EventHandler('00')}}>00</button>
                <button onClick={()=>{EventHandler('0')}}>0</button>
                <button onClick={()=>{EventHandler('.')}}>.</button>
                <button onClick={()=>{EqualEventHandler('=')}}>=</button>
            </div>
        </div>
    )
}
export default Body;