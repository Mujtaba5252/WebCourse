import React from 'react'
import {useState} from 'react';

function TextForm() {

    const [count, setCount] = useState(0);
    const [text, setText] = useState("Enter text here...");
    const [modeStyle, setModeStyle] = useState('light');
    let lightStyle  ={
        color: 'white',
        backgroundColor : 'grey'
    }

let darkStyle  ={
    color: 'black',
    backgroundColor : 'white'
}

    const [cssstyle, setCssStyle] = useState(lightStyle);
    

    const onChangeHandler = (event) =>
    {
        setText(event.target.value)

    }

    const onClearHandler = () =>
    {
        setText("");

    }
    const onUCHandler = () =>
    {
        setText(text.toUpperCase());

    }

    // const _settoggleStyle = () =>
    // {
    //     if (modeStyle === 'light')
    // {
    //     setModeStyle('dark')
    //     document.body.style.backgroundColor = 'grey'
    //  document.body.style.color = 'white'
    // }
    //     else 
    //     {
    //         setModeStyle('light')
    //         document.body.style.backgroundColor = 'white'
    // document.body.style.color ='black'
        
    //     }

    // }
    const toggleStyle = () =>
    {
        if (modeStyle === 'light')
        {
            setCssStyle(darkStyle)
            setModeStyle('dark')

        }
        else
        {
            setCssStyle(lightStyle)
            setModeStyle('light')
        }
    }

  return (
    <div style={cssstyle} className="container">
    <h1>Word Counter</h1>
    <button className="btn btn-primary" onClick={toggleStyle}>Toggle Mode</button>
    <div className="form-check form-switch">
<input className="form-check-input" type="checkbox" onClick={toggleStyle} id="flexSwitchCheckDefault"/>

</div>
    <br/><br/><br/>
<div className="mb-3">
<textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={text} onChange={onChangeHandler}></textarea>
</div> 

<button className="btn btn-primary" onClick={onClearHandler}>Clear</button>
<br/><br/>
<button className="btn btn-primary" onClick={onUCHandler}>Convert To Uppercase</button>
<br/><br/><br/>

<h2>Your page summary</h2>
<p>{text.split(" ").length} words and {text.length} characters</p>

</div>
  )
}

export default TextForm