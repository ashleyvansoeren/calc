import './Calc.css';
import { useState } from 'react';

const Calc = () => {
    const [calc, setCalc] = useState("");
    const [result, setResult] = useState("");

    const ops = ['/', '+', '-', '*', ','];

    const updateCalc = value => {
        if (
            ops.includes(value) && calc === '' || 
            ops.includes(value) && ops.includes(calc.slice(-1))
        ) {
            return;
        };

        setCalc(calc + value);

        if(!ops.includes(value)) {
            setResult(eval(calc + value).toString());
        };
    };

    const calculate = () => {
        setCalc(eval(calc).toString());
    }

    const deleteLast = () => {
        if (calc === '') {
            return;
        }

        const value = calc.slice(0, -1);

        setCalc(value);
    }

    const createDigits = () => {
        const digits = []; 

        for (let i = 1; i < 10; i++) {
            digits.push(
                <button onClick={() => updateCalc(i.toString())} key={i} className="p-4 bg-slate-900 text-white font-bold hover:bg-[#0f172ae6]">{i}</button>
            )
        } 

        return digits;
    };
    

    return (
       <div className="Calcwrapper flex justify-center flex-col w-56 m-20 rounded-t-3xl shadow-5xl">
           <div className="display bg-slate-900 text-white font-bold rounded-t-3xl h-12 flex justify-center items-center flex-col">
               <span>{calc || "0"} </span>
               {result ? <span className="text-gray-400">{result}</span> : ''}
            </div>
           <div className="operators">
                <button onClick={() => updateCalc('/')} className="p-4 text-white font-bold bg-pink-600 hover:bg-hoverpink ">/</button>
                <button onClick={() => updateCalc('*')} className="p-4 text-white font-bold bg-pink-600 hover:bg-hoverpink">*</button>
                <button onClick={() => updateCalc('+')} className="p-4 text-white font-bold bg-pink-600 hover:bg-hoverpink">+</button>
                <button onClick={() => updateCalc('-')} className="p-4 text-white font-bold bg-pink-600 hover:bg-hoverpink">-</button>
                <button onClick={ deleteLast } className="p-4 text-white font-bold bg-pink-600 hover:bg-hoverpink">DEL</button>
           </div>
           
           <div className="numbers grid grid-cols-3">
           { createDigits() }
            </div>
            

            <div className="buttongroup grid grid-cols-3 rounded-b-3xl rounded-b-3xl">
                <button onClick={() => updateCalc('0')} className="p-4 text-white font-bold bg-slate-900 hover:bg-[#0f172ae6]" >0</button>
                <button onClick={() => updateCalc(',')} className="p-4 text-white font-bold bg-slate-900 hover:bg-[#0f172ae6]">,</button>
                <button onClick={calculate} className="p-4 text-white font-bold bg-slate-900 hover:bg-[#0f172ae6]">=</button>
           </div>
       </div>

       
    )
}

export default Calc;