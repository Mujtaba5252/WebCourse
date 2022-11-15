import React,{useState} from 'react'

function UperCase() {
    const[name,setName]=useState("");

    const change=(event)=>{
        setName(event.target.value)
    }
    const changeCase=(event)=>{
        setName(name.toUpperCase())
        // event.preventDefault();
        // setName(event.target.value.toUpperCase());
        
    }



  return (
    <div>
        <input value={name} onChange={change} ></input>
        <button onClick={changeCase}>Click</button>
        
    
    </div>
  )
}

export default UperCase