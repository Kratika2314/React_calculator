import React, { useState } from "react";
import '../index.css';
import Grid from "./Grid";
import Screen from "./Screen";

function Calculator()
{
    const[screenText,upDateScreenText]=useState("");//state hook

    function handelScreenUpdate(value)
    {
        upDateScreenText(screenText.concat(value));
    }

    function handelClearScreen()
    {
        upDateScreenText("");
    }

    function handelEvaluate()
    {
        try{
        const result=eval(screenText);
        upDateScreenText(result.toString());
        }
        catch(error)
        {
            upDateScreenText("INVALID INPUT");
        }
    }


    return(<>
    <Screen textValue={screenText}/>
    <div className='grid'>
    <button onClick={()=>handelScreenUpdate("0")}>0</button>
    <button onClick={()=>handelScreenUpdate("1")}>1</button>
    <button onClick={()=>handelScreenUpdate("2")}>2</button>
    <button onClick={()=>handelScreenUpdate("3")}>3</button>
    <button onClick={()=>handelScreenUpdate("4")}>4</button>
    <button onClick={()=>handelScreenUpdate("5")}>5</button>
    <button onClick={()=>handelScreenUpdate("6")}>6</button>
    <button onClick={()=>handelScreenUpdate("7")}>7</button>
    <button onClick={()=>handelScreenUpdate("8")}>8</button>
    <button onClick={()=>handelScreenUpdate("9")}>9</button>
    <button onClick={()=>handelScreenUpdate(".")}>.</button>
    <button onClick={()=>handelScreenUpdate("%")}>%</button>
    <button onClick={()=>handelScreenUpdate("+")}>+</button>
    <button onClick={()=>handelScreenUpdate("*")}>*</button>
    <button onClick={()=>handelScreenUpdate("-")}>-</button>
    <button onClick={()=>handelScreenUpdate("/")}>/</button>
    <button onClick={handelClearScreen}>clr</button>
    <button onClick={handelEvaluate}>Ans</button>
    </div>
    </>
   );
}

export default Calculator;

// change