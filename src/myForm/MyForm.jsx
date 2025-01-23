import { useState } from "react"

export default function MyForm(){
    const [nameInput, setNameInput]=useState("")
    const [emailInput, setEmailInput]=useState("")

    
    return(
        <form>
            <label>Name:</label>                 
            <input value={nameInput} onChange={(event)=>{setNameInput(event.target.value)}}></input>
            <hr />
            <label>Email:</label>
            <input value={emailInput} onChange={(event)=>{setEmailInput(event.target.value)}}></input>
            <hr />
            <button>submit</button>
        </form>

    )
}
// the good practise that if you want to add event like onChange you must to inset inside the event 
// the arrow function ()=>{} ....