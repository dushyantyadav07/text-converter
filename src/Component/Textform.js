 
import React, {useState} from 'react'



export default function Textform(props) {
 const [text, setText] = useState("");
  
  const clickHandler = () => {
    let newtext = text.toUpperCase()
    setText(newtext)
  }

  const clicklonHandler = () => {
    let newtext = text.toLowerCase()
    setText(newtext)
  }
  const clickclearHandler = () => {
    let newtext = ''
    setText(newtext)
  }

  const Handlecopy = () => {
    let text = document.getElementById("my box")
    text.select()
    navigator.clipboard.writeText(text.value);
  }

  const Handleextraspaces = () => {
    let spacetext = text.split(/[ ] +/)
    setText(spacetext.join(" "))
  }

  const handleChange = (event) => {
   setText(event.target.value)
  }

  
  
  return (
     
    <div className='container' style={{color:props.mode === 'light' ? 'red':'yellow'}}>
      <h1>{props.heading}</h1>
   <div className = "container mb-3" style={{color:props.mode === 'dark' ? 'black':'blue'}}>
   
  <textarea className = "form-control" value={text} onChange={handleChange} style={{backgroundColor: props.mode ==='dark' ? 'light':'white',color:props.mode === 'dark' ? 'black':'black'}} id="my box" rows="7"></textarea>
</div>
<button className="btn btn-primary mx-1 my-1" onClick={clickHandler}>Convert to uppercase</button>
<button className="btn btn-primary mx-1  my-1" onClick={clicklonHandler}>Convert to lowercase</button>


<button className="btn btn-primary mx-1 my-1" onClick={Handlecopy}>Text copy</button>
<button className="btn btn-primary mx-1 my-1" onClick={Handleextraspaces}>Extra spaces</button>
<button className="btn btn-primary mx-1 my-1" onClick={clickclearHandler}>Clear text</button>
<div className ='container my-2'  style={{color:props.mode === 'dark' ? 'yellow':'black'}}>
      <h1>Your Text Summary </h1>
      <p>{text.split(" ").filter((Element)=>{return Element.length!==0}).length} Words and {text.length} Characters</p>
      <p>{.008* text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div> 

    </div>
  )
}

