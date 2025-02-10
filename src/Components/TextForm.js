import React,{useState} from 'react'

export default function TextForm(props) {

const handleUppercase=()=>{
    // console.log("Uppercase was clicked "+ text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case","success");

}
const handleLowercase=()=>{
    // console.log("Lowercase was clicked "+ text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case","success");


}
const handleOnChange=(event)=>{
    // console.log("On-Change}");
    setText(event.target.value)

}
const handleOnClear=()=>{
    setText('');
    props.showAlert("Text cleared","success");

}
const handleTitlecase=()=>{
    let splitStr = text.toLowerCase().split(/[\s|,|:|;|.]/);
    for (let i = 0; i < splitStr.length; i++) {
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }

        setText(splitStr.join(" ")); 
        props.showAlert("Converted to Title Case","success");

}
const handleOnCopy=()=>{
    let text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied to clipboard","success");

}
const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed","success");

}


const [text,setText] = useState('');
    return (
    <>
    <div className="container" style={{color: props.mode==='dark'? 'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode==='light'?'white':'rgb(75 89 112)',color:props.mode==='light'? 'black' : 'white'}}></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUppercase}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowercase}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleTitlecase}>FirstLetter Capital</button>
        <button className="btn btn-primary mx-1" onClick={handleOnClear}>Clear</button>
        <button className="btn btn-primary mx-1" onClick={handleOnCopy}>Copy</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className='container my-3' style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox to preview"}</p>
    </div>
    </>

  )
}




