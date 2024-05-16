import React, { useState } from "react";
import '../index.css';

function Screen(props)
{
    return(<div className='screen'>
    <input textarea className='screeninput' value={props.textValue}  />
    </div>);
}



export default Screen;